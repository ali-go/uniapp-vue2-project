function request(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${process.env.VUE_APP_BASE_URL}${url}`,
      data,
      method: 'POST',
      success: function (res) {
        const { code, msg, data } = res
        // 接口是否正确处理
        if (code !== '200') {
          reject(msg)
          uni.showToast({
            title: msg,
            icon: 'none'
          })
          return
        }

        resolve(data)
      },
      fail: function (err) {
        console.error('err', err)
      },
      ...config
    })
  })
}

export default request
