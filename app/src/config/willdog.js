import wilddog from 'wilddog'

var config = {
	syncDomain: 'cacivy.wilddog.com',
	syncURL: 'https://cacivy.wilddogio.com'
}
wilddog.initializeApp(config)
var ref = wilddog.sync().ref()

export default ref
