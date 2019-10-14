<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 p-4" style="background-color: rgba(0,0,0,0.25);" v-show="show">
    <div class="bg-white w-full sm:w-1/3 rounded p-4 mx-auto flex flex-col shadow-lg">
      <h1 class="text-left text-xl font-bold">
        Add New Reading
      </h1>
      <select v-model="type">
        <option value="airquality">Air Quality</option>
        <option value="humidity">Humidity</option>
        <option value="temperature">Temperature</option>
      </select>
      <input v-model.number="value" type="number" class="py-1 px-2 my-2 border-2 border-gray-300 rounded" placeholder="Value (numbers only)" />
      <date-picker class="py-1 px-2 my-2 border-2 border-gray-300 rounded" v-model="date" format="D MMM YYYY" placeholder="Due On"></date-picker>
      <p v-if="errors" class="text-xs text-red-500">Something went wrong - try again</p>
      <div class="flex justify-end">
        <div class="text-center flex justify-end mt-2">
          <button @click="cancel" type="button" class="text-green-500 mr-4">
            Cancel
          </button>
          <button @click="confirmReading" type="button" class="px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from './DatePicker';
export default {
  props: ["show", "id"],
  inject: ["deviceState"],
  components:{
    DatePicker,
  },
  data(){
    return {
      date: '',
      type: '',
      value: '',
      errors: false
    }
  },
  methods: {
    cancel() {
      this.$emit("close");
      document.body.style.removeProperty("overflow");
    },
    confirmReading(e) {
      e.preventDefault();
      if(this.date != null && this.value > 0 && this.value < 999){
        this.$emit("close"); 
        let device = this.deviceState.devices.filter(device => device.id === this.id);
        console.log(device);
        device[0].readings.push({ 
          'id' : device.readings ? device.readings.length+1 : 1, 
          'type': this.type,
          'value': this.value,
          'createdAt': this.date,
          'updatedAt': this.date,
        });     
      } else {
        this.errors = true;
      }
      document.body.style.removeProperty("overflow");
    },
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.cancel();
      }
    }
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    })
  }
}
</script>
