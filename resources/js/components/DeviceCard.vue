<template>
  <div class="flex w-full sm:w-1/2 lg:w-1/5 p-2">
    <div class="p-4 flex items-center justify-between w-full bg-white shadow-lg rounded cursor-pointer" @dblclick.stop="openDetails">
      <div class="flex flex-col">
        <p class="mt-1 text-gray-900 font-semibold text-lg">{{device.name}}</p>
        <p class="uppercase text-sm text-gray-900">{{device.type ? device.type : 'No type given'}}</p>
      </div>
        <p class="flex items-center justify-center h-10 w-10 px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-lg">{{device.value ? device.value : "N/A"}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:['device'],
    methods:{
        openDetails() {
          this.$router.push({name: 'detailview', params: { 'id': this.device.id, 'device': this.device }})
        },
    },
  }
</script>