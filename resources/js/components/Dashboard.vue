<template>
  <div class="w-full max-w-full flex flex-wrap">
    <div v-if="loading" class="absolute top-0 left-0 right-0 bottom-0 flex w-full items-center justify-center">
      <moon-loader :loading="loading" :size="100"></moon-loader>
    </div>
    <template v-else>
        <div class="flex w-full sm:w-1/2 lg:w-1/5 p-2">
          <div class="p-4 flex items-center justify-between w-full bg-white shadow-lg rounded cursor-pointer" @click="addDeviceModalOpen =! addDeviceModalOpen">
            <div class="flex flex-col">
              <p class="mt-1 text-gray-900 font-semibold text-lg">Add new device</p>
            </div>
              <p class="">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="inherit" stroke-width="1" fill="inherit" fill-rule="evenodd">
                  <g id="icon-shape">
                    <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Shape"></path>
                  </g>
                </g>
                </svg>
              </p>
          </div>
        </div>
        <DeviceCard v-for="device in deviceState.devices" :key="device.id" :device="device"></DeviceCard>
      </template>
      <portal to="modals" v-if="addDeviceModalOpen">
          <add-device-modal
            :show="addDeviceModalOpen"
            @close="addDeviceModalOpen = false"
          ></add-device-modal>
      </portal>
  </div>
</template>

<script>
import axios from 'axios';
import DeviceCard from './DeviceCard';
import AddDeviceModal from './AddDeviceModal';
export default {
  inject: ["deviceState"],
  name: 'Dashboard',
  components:{
    DeviceCard,
    AddDeviceModal
  },
  data(){
    return{
      addDeviceModalOpen: false,
    }
  },
  created(){

  },
  methods:{

  },
  computed:{
    loading(){
        return this.deviceState.loading;
    }
  },
}
</script>
