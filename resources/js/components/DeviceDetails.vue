<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center">
        <p class="text-3xl">{{device.name}}</p>
        <button @click="addReadingModalOpen = !addReadingModalOpen" class="flex items-center ml-3 bg-teal-200 text-teal-800 text-xs uppercase px-2 py-1 rounded">
            Add new reading
            <svg class="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="inherit" stroke-width="1" fill="inherit" fill-rule="evenodd">
                  <g id="icon-shape">
                    <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Shape"></path>
                  </g>
                </g>
            </svg>
        </button>
    </div>
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
    <portal to="modals" v-if="addReadingModalOpen">
      <add-reading-modal
        :id="device.id"
        :show="addReadingModalOpen"
        @close="addReadingModalOpen = false"
        @refreshGraphs="getTypes"
      ></add-reading-modal>
    </portal>
  </div>
</template>
<script>
  import VueApexCharts from 'vue-apexcharts'
  import AddReadingModal from './AddReadingModal';
  export default {
    props:['device'],
    components:{
      'apexchart': VueApexCharts,
      AddReadingModal,
    },
    data() {
      return {
        loading:true,
        types: null,
        noData: false,
        addReadingModalOpen: false,
      }
    },
    methods:{
        getTypes(){
            if(this.device.readings != null){   
                this.types = new Set(this.device.readings.map(item => item.type));
                this.loading = false;
            } else {
                this.loading = false;
                this.noData = true;
            }
        },
        findSeries(type){
          let seriesData = this.device.readings.filter(item => item.type === type);
          seriesData = seriesData.sort((a,b) => a.createdAt-b.createdAt);
          let seriesValues = seriesData.map(item => ({x:item.createdAt , y:item.value}));
          return [{data: seriesValues}]
        },
    },
    created(){
        this.getTypes();
    }
  }
</script>
<style>
.apexcharts-toolbar{
    z-index: 0;
}
</style>