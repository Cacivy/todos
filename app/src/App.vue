<template lang="jade">
	div#app
		navbar
		router-view
</template>

<script>
	import navbar from './components/nav'
	import list from './components/list'

	export default {
		components: {
			navbar, list
		}
	}
</script>

<style lang="scss">
</style>