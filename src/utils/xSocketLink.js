import Vue from "vue";
import store from "./../store";
import xSocket from "./xSocket";
import type from '@/commons/type';
export default class xSocketLink {
	/**
	 * 连接socket
	 * @param {Object} opt
	 * {
	 *    onMsg: function(res) {},     //接收到消息的回调函数（除心跳等无用消息），参数是socket接收到返回数据
	 * }
	 */
	constructor(opt) {
    let SocketUrl = ""
    if (window.location.protocol === "https:") {
      SocketUrl = "wss://"
    } else {
      SocketUrl = "ws://"
    }
		if (Vue.prototype.$xSocket) {
			Vue.prototype.$xSocket.destroy();
		}
		//链接socket
		const wsParam = {
			token: localStorage.getItem(type.TOKEN),
			// ua: navigator.userAgent
    };
		if (wsParam.token) {
			Vue.prototype.$xSocket = new xSocket({
				url: `${SocketUrl}47.108.144.216:10020/ws/mgr.ashx?token=${wsParam.token}`,
				onmessage: function(e) {
          //这里的this指向是new的xSocket对象
					const data = e.data;
					const res = JSON.parse(data);
          const command = parseInt(res.res);
					if (command != 100) {
						this.heartReset();
					}
					try {
						// switch (command) {
						// 	case 100:
            //     //确认心跳
            //     store.dispatch("saveServerTime",res.data);
						// 		break;
            // }
						if ([100].indexOf(res.res) !=-1) {
							store.dispatch("saveServerTime",res.data);
							opt.onMsg(res);
						}else{
							opt.onMsg(res);
						}
					} catch (e) {
						console.log(`Socket接收信息的方法异常：${e.message}`);
					}
				}
			});
    }
	}
}
