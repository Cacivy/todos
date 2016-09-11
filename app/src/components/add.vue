<template>
	<div class="row">
		<form class="col s12">
			<div class="row">
				<text-area class="col s12"
				label="添加一个任务"
				value=""
				icon="mode_edit"></text-area>
			</div>
			<date-picker label="时间" icon="today" :date.sync="dateTime"></date-picker>
		</form>
	</div>
	<float-button class="red float_button" type="floating" icon="done" large @click="add"></float-button>
</template>
<script>
	import floatButton from 'material-ui-vue/components/buttons/button.vue'
	import ref from '../config/willdog'

	export default {
		components: {
			'text-area': require('material-ui-vue/components/forms/text-area.vue'),
			'date-picker': require('material-ui-vue/components/forms/date-picker.vue'),
			floatButton
		},
		data() {
			return {
				textArea: 'aa',
				dateTime: new Date().valueOf()
			}
		},
		methods: {
			add() {
				let text = document.getElementsByTagName('textarea')[0].value
				ref.child('todos').push({
					'date' : this.dateTime,
					'text' : text
				})
				this.$router.go('/')
			}
		}
	}
</script>