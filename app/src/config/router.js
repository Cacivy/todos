import List from '../components/list'
import Add from '../components/add'

export default (router) => {
	router.map({
		'/': {
			component: List
		},
		'/add': {
			component: Add
		}
	})
}
