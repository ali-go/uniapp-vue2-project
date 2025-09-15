<script>
import { checkForUpdate } from './utils/checkForUpdate'

export default {
  onLaunch: function () {
    console.log('App Launch')
    checkForUpdate() // 检测小程序是否更新
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
</style>
