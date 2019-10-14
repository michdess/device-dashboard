<template>
  <div class="flex flex-col w-full">
    <p class="text-3xl">{{device.name}}</p>
    <p v-if="noData">There are no devices or readings to display</p>
    <div class="-mx-2 w-full flex flex-wrap">
        <div v-if="loading" class="absolute top-0 left-0 right-0 bottom-0 flex w-full items-center justify-center">
            <moon-loader :loading="loading" :size="100"></moon-loader>
        </div>
      <div v-else class="p-2 w-full sm:w-1/2 lg:w-1/3" v-for="type in types" v-bind:key="type.id">
        <div class="p-2 w-full rounded bg-white shadow-lg">
          <p class="uppercase tracking-wider text-gray-700 font-semibold">{{type}}</p>
          <apexchart width="100%" type="line" 
            :options="{
              xaxis: { 
                type: 'datetime', 
                labels: { 
                  show: true 
                }
              }, 
              axisTicks: {show: true},
              markers: {size: 6},
            }" 
            :series="findSeries(type)">
          </apexchart>
        </div>
      </div>       
    </div>
  </div>
</template>
<script>
  import VueApexCharts from 'vue-apexcharts'
  export default {
    props:['device'],
    components:{
      'apexchart': VueApexCharts,
    },
    data() {
      return {
        loading:true,
        types: null,
        data: '',
        noData: false
      }
    },
    methods:{
        getDeviceMeasurements(){
          let self = this;
          axios.get('/devices/'+this.device.id+'/readings')
                  .then(function(response){
                    self.data = response.data;
                    self.getTypes();
                  }).catch(function(error){
                    console.log(error);
                    self.noData = true;
                    self.loading = false;
                  }); 
        },
        getTypes(){
          this.types = new Set(this.data.map(item => item.type));
          this.loading = false;
        },
        findSeries(type){
          let seriesData = this.data.filter(item => item.type === type);
          seriesData = seriesData.sort((a,b) => a.createdAt-b.createdAt);
          let seriesValues = seriesData.map(item => ({x:item.createdAt , y:item.value}));
          return [{data: seriesValues}]
        },
    },
    created(){
        this.getDeviceMeasurements();
    }
  }
</script>