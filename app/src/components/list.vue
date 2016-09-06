<template>
	<collection>
	<collection-item avatar>
	<img :src="imageUrl" alt="" class="circle">
	<span class="title">Title</span>
	<p>First Line <br>
		Second Line
	</p>
	<a href="#!" class="secondary-content"><icon value="grade"></icon></a>
</collection-item>
<collection-item avatar>
<icon value="folder" class="circle"></icon>
<span class="title">Title</span>
<p>First Line <br>
	Second Line
</p>
<a href="#!" class="secondary-content"><icon value="grade"></icon></a>
</collection-item>
</collection>
</template>
<script>
	import collection from 'material-ui-vue/components/collections/collection'
	import collectionItem from 'material-ui-vue/components/collections/collection-item'
	import icon from 'material-ui-vue/components/icons/icon.vue'
	export default {
		components: {collection, collectionItem, icon},
		data: function() {
			return {
				imageUrl: 'http://materializecss.com/images/yuna.jpg'
			}
		}
	}
</script>
<style>

</style>