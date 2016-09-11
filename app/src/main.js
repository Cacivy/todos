import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'
import App from './App'
import './assets/styles/reset.scss'
import './assets/styles/comman.scss'

// Filer
Vue.filter('date', function(value) {
	var date = new Date(value)
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})

// Router
Vue.use(VueRouter)

const router = new VueRouter({
	history: true,
	hashbang: false,
	saveScrollPosition: true,
	suppressTransitionError: true,
	transitionOnLoad: true
})

Router(router)

//Start
router.start(App, '#app')
