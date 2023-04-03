/**
 *
 * @param {String} url websocket地址
 * @param {Function} onmessage 接收到消息的回调方法
 * @returns
 */


function inteWebSocket(url, onmessage) {
  console.log(url, 'url---web');
  var socket = null
  var count = 0
  var t
  // MQ中断之后重连
  var close = function () {
    reConnection()
  }
  // MQ报错之后重连
  var error = function (e) {
    console.log(e)
    reConnection()
  }
  var reConnection = function () {
    if (count >= 20 || socket.readyState == 1) {
      clearTimeout(t)
    } else {
      t = setTimeout(function () {
        //3已经关闭了与服务器的连接
        if (socket.readyState == 3) {
          connection()
        } else {
          // 0正尝试与服务器建立连接,2正在关闭与服务器的连接
          reConnection()
        }
      }, 30000)
    }
    count = count + 1
  }
  var connection = function () {
    if ('WebSocket' in window) {
      //				socket = new WebSocket(initData.mqServer);
      socket = new WebSocket(url)
      //				socket = new WebSocket("ws://192.168.58.124:8080/cs/websocket");
      socket.onopen = function () {
        console.log('ready')
      }
      socket.onmessage = onmessage
      // message = function (d) {
      //     console.log(d);
      // };
      socket.onclose = close
      socket.onerror = error
      return socket
    } else {
      console.log('浏览器不支持')
    }
    return null
  }
  return connection()
}

/**
 * 回调函数示例
 * @param {Object} e
 */
// function onreciverMsg(e) {
//   console.log(e.data);
//   //e.data即为接收到的消息内容
// }


let webSocketUrl
// 判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') {      // 开发环境
  webSocketUrl = '192.168.10.63:8090/echo'
} else {                                           // 编译环境
  webSocketUrl = window.Glod.webSocketUrl  // 在这里使用配置文件中的域名
}
console.log(webSocketUrl, 'baseURL')



export const testUseWebSocket = (data) => {

  console.log(data, 75);
  let socket
  //这里的配置用来  http://server:listen的配置，通过对端口和ip的拦截
  //，打中对应的nginx中的配置
  // console.log(window.location.hostname);
  // let host = window.location.hostname
  // let port = window.location.port
  // console.log(window.location.hostname);
  // var socket = inteWebSocket('ws://'+host+'/socket')
  //测试环境
  socket = inteWebSocket('ws://'+webSocketUrl)


  // var socket = inteWebSocket('ws://' + host + ":" + port + '/socket')
  return socket
}

