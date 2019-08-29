module.exports = {
  // devServer: {
  //     open: true,
  //     host: 'localhost',
  //     port: 9001,
  //     https: false,
  //     //以上的ip和端口是我们本机的;下面为需要跨域的
  //     proxy: {//配置跨域
  //         '/api': {
  //             target: 'http://148.70.121.59:9001',//这里后台的地址模拟的;应该填写你们真实的后台接口
  //             ws: true,
  //             changOrigin: true,//允许跨域
  //             pathRewrite: {
  //                 '^/emstu': ''//请求的时候使用这个api就可以
  //             }
  //         }
          
  //     }
  // }
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '127.0.0.1',
    port: 8088, // 服务端口
    https: false,
    hotOnly: false,
    proxy: 'http://148.70.121.59:9001' // 设置代理
 }
}