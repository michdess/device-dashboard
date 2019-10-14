require('./bootstrap');

window.Vue = require('vue');

import PortalVue from 'portal-vue';
Vue.use(PortalVue);

import { VueSpinners } from '@saeris/vue-spinners'
Vue.use(VueSpinners)

import router from './router'
import Layout from './components/Layout.vue'

const app = new Vue({
    el: '#app',
    router,
	components: {
    	Layout
  	},
  	provide() {
	    return {
	      deviceState: this.sharedState
	    }
  	},
  	data() {
	    return {
	      sharedState: {
	        devices: [],
	        loading: true,
	      }
	    }
  	},
  	mounted(){
    	this.getDevices();
  	},
  	methods: {
	    getDevices(){
	      let self = this;
	      axios.get('/devices')
	              .then(response => {
	                  self.sharedState.devices = response.data;
	                  self.getReadings();
	                  // self.sharedState.loading = false;
	              }); 
	    },
	    getReadings(){
	    	for(let device of this.sharedState.devices){
	    		let self = this;
	    		axios.get('/devices/'+device.id+'/readings')
	    		.then(response => {
	                  device.readings = response.data;
	              }); 
	    	}
	        this.sharedState.loading = false;
	    },
    },
});
