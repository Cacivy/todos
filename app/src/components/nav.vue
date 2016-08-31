<template lang="jade">
	navbar(logo="ToDos")
		nav-item
			a dolist
				badges(new) 102
		nav-item
</template>

<script>
	import navbar from 'material-ui-vue/components/navbar/navbar'
	import navItem from 'material-ui-vue/components/navbar/nav-item'
	import badges from 'material-ui-vue/components//badges/badge'

	export default {
		components: {
			navbar, navItem, badges
		},
		ready() {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>