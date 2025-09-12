<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log('env', process.env.NODE_ENV)
			console.log('url', process.env.VUE_APP_BASE_URL)
			console.log('url', process.env)
		},
		onShow: function() {
			console.log('App Show1')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
