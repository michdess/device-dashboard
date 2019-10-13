<template>
    <div class="bg-gray-200 min-h-screen">
        <header class="flex w-full bg-gray-900 py-3 px-5">
            <button class="mr-5 text-gray-100" v-if="currentPage === 'detailview'" @click="$router.push({ path: '/' })">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="inherit" stroke-width="1" fill="inherit" fill-rule="evenodd">
                  <g id="icon-shape">
                    <polygon id="Combined-Shape-Copy" points="3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"></polygon>
                  </g>
                </g>
              </svg>
            </button>
            <h1 class="text-3xl text-gray-100">Device Dashboard</h1>
        </header>
        <div class="p-3 w-full max-w-full">
            <transition name="fade" mode="out-in">
                <keep-alive include="dashboard">
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Layout',
    data() {
      return {
        currentPage: 'dashboard'
      }
    },
    watch: {
      '$route': {
        deep: true,
        handler: function (page) {
          this.currentPage = page.name;
        }
      }
    }
  }
</script>
<style>
.fade-enter-active,.fade-leave-active {
  transition: opacity .2s
}
.fade-enter,.fade-leave-active {
  opacity: 0
}
</style>