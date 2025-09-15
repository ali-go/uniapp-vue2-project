<template>
  <view class="page-container">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ hello }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      hello: 'mine'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 36rpx;
    color: #8f8f94;
    text-decoration: underline;
  }
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
