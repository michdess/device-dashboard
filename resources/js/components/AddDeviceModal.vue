<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 p-4" style="background-color: rgba(0,0,0,0.25);" v-show="show">
    <div class="bg-white w-full sm:w-1/3 rounded p-4 mx-auto flex flex-col shadow-lg">
      <h1 class="text-left text-xl font-bold">
        Add Device
      </h1>
      <input v-model="name" class="py-1 px-2 my-2 border-2 border-gray-300 rounded" placeholder="Name" />
      <p v-if="errors" class="text-xs text-red-500">You must add a name</p>
      <input v-model="type" class="py-1 px-2 my-2 border-2 border-gray-300 rounded" placeholder="Type" />
      <p v-if="errors" class="text-xs text-red-500">You must add a type</p>
      <input v-model.number="value" type="number" class="py-1 px-2 my-2 border-2 border-gray-300 rounded" placeholder="Value (numbers only)" />
      <p v-if="errors" class="text-xs text-red-500">You must add a value and it must be less than 3 digits</p>
      <div class="flex justify-end">
        <div class="text-center flex justify-end mt-2">
          <button @click="cancel" type="button" class="text-green-500 mr-4">
            Cancel
          </button>
          <button @click="confirmAdd" type="button" class="px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  inject: ["deviceState"],
  data(){
    return {
      name: '',
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
    confirmAdd(e) {
      e.preventDefault();
      if(this.name.length > 0 && this.type.length > 0 && this.value > 0 && this.value < 999){
        this.$emit("close"); 
        this.deviceState.devices.push({ 
          'id' : this.deviceState.devices.length+1, 
          'name': this.name, 
          'type': this.type,
          'value': this.value,
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
