<template lang="jade">
header
	div.row
		navbar(logo="ToDo", side-nav-id="sideNav",  logo-position="center")
		side-nav#sideNav(fixed)
			nav-item(active)
				a link1
			nav-collapsible-item(active)
				collapsible-header(label="dropdown menu", icon="arrow_drop_down", icon-position="right")
				collapsible-body
					ul
						nav-item
							a link3
						nav-item
							a link4
	
</template>

<script>
	import navbar from 'material-ui-vue/components/navbar/navbar'
	import navItem from 'material-ui-vue/components/navbar/nav-item'
	import navCollapsibleItem from 'material-ui-vue/components/navbar/nav-collapsible-item'
	import badges from 'material-ui-vue/components/badges/badge'
	import sideNav from 'material-ui-vue/components/side-nav/side-nav.vue'
	import collapsibleHeader from 'material-ui-vue/components/collapsible/collapsible-header.vue'
	import collapsibleBody from 'material-ui-vue/components/collapsible/collapsible-body.vue'
	import icon from 'material-ui-vue/components/icons/icon.vue'

	export default {
		components: {
			navbar, navItem, navCollapsibleItem, badges, sideNav, collapsibleHeader, collapsibleBody, icon
		},
		data() {
			return {
				active: true
			}
		},
		ready() {
			
		}
	}
</script>