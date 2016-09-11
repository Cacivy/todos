<template>
	<collection>
		<collection-item avatar v-for="(key, val) in list">
			<icon value="query_builder" class="circle"></icon>
			<span class="title">{{val.date | date}}</span>
			<p>
				{{val.text}}
			</p>
			<a href="#!" class="secondary-content"><icon value="grade"></icon></a>
		</collection-item>
	</collection>
	<float-button class="red float_button" type="floating" icon="add" large v-link="{path: '/add'}"></float-button>
</template>
<script>
	import collection from 'material-ui-vue/components/collections/collection'
	import collectionItem from 'material-ui-vue/components/collections/collection-item'
	import icon from 'material-ui-vue/components/icons/icon.vue'
	import floatButton from 'material-ui-vue/components/buttons/button.vue'
	import ref from '../config/willdog'

	export default {
		components: {collection, collectionItem, icon, floatButton},
		data: function() {
			return {
				list: []
			}
		},
		route: {
			data() {
				ref.on('value', (snapshot) => {
					this.list = snapshot.val().todos
				})
			}
		}
	}
</script>
<style lang="scss">
	
</style>