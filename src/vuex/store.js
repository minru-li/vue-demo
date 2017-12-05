/*
 管理数据和操作数据
  */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	articles:{
		fir: {
      author: '黎敏如',
      title: '我不是学霸，只是比较努力一点而已',
      time: '大约6小时之前',
      read: '321',
      comment: '321',
      like: '321',
      pay: '321',
      src: 'url(../../static/vue-demo-pic.jpg'
		},
		sec: {
      author: '黎敏如',
      title: '我不是学霸，只是比较努力一点而已',
      time: '大约6小时之前',
      read: '321',
      comment: '321',
      like: '321',
      pay: '321',
      src: 'url(../../static/vue-demo-pic.jpg'
		},
		thi: {
      author: '黎敏如',
      title: '我不是学霸，只是比较努力一点而已',
      time: '大约6小时之前',
      read: '321',
      comment: '321',
      like: '321',
      pay: '321',
      src: 'url(../../static/vue-demo-pic.jpg'
		}
	},
	texts:{
		Jan:{
			title:'给你90天，成为不一样的自己',
			content_1:"如果你应付不了现在的生活和工作",
			content_2:"无论你走到哪里，",
			content_3:"无论你换了什么工作，什么公司，",
			content_4:"都无济于事。",
			content_5:"因为你根本没想让自己成熟起来，",
			content_6:"想让变的更优秀也不过是一句口头禅。",
			author:'',
		},
		Feb:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Mar:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Apr:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		May:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Jun:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Jul:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Aug:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Sep:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Oct:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Nov:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		},
		Dec:{
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
		}
	},

	show:'hot',
}

const mutations = {
	DISPLAY_ARTICLE (state, show) {
		const article = {
			hot: {
				fir: {
          author: '黎敏如',
          title: '我不是学霸，只是比较努力一点而已',
          time: '大约6小时之前',
          read: '321',
          comment: '321',
          like: '321',
          pay: '321',
          src: 'url(../../static/vue-demo-pic.jpg'
				},
				sec: {
          author: '黎敏如',
          title: '我不是学霸，只是比较努力一点而已',
          time: '大约6小时之前',
          read: '321',
          comment: '321',
          like: '321',
          pay: '321',
          src: 'url(../../static/vue-demo-pic.jpg'
				},
				thi: {
          author: '黎敏如',
          title: '我不是学霸，只是比较努力一点而已',
          time: '大约6小时之前',
          read: '321',
          comment: '321',
          like: '321',
          pay: '321',
          src: 'url(../../static/vue-demo-pic.jpg'
				}
			},
			new: {
				fir: {
          author: '黎敏如',
          title: 'JUST DO IT!',
          time: '大约30分钟之前',
          read: '123',
          comment: '123',
          like: '123',
          pay: '123',
          src: 'url(../../static/vue-demo-pic.jpg)'
				},
				sec: {
          author: '黎敏如',
          title: 'JUST DO IT!',
          time: '大约30分钟之前',
          read: '123',
          comment: '123',
          like: '123',
          pay: '123',
          src: 'url(../../static/vue-demo-pic.jpg)'
				},
				thi: {
          author: '黎敏如',
          title: 'JUST DO IT!',
          time: '大约30分钟之前',
          read: '123',
          comment: '123',
          like: '123',
          pay: '123',
          src: 'url(../../static/vue-demo-pic.jpg)'
				}
			},
			daily:{
				fir: {
          author: '黎敏如',
          title: '如何拍照显腿长？',
          time: '大约1天之前',
          read: '666',
          comment: '666',
          like: '666',
          pay: '666',
          src: '../../static/vue-demo-pic.jpg'
				},
				sec: {
          author: '黎敏如',
          title: '如何拍照显腿长？',
          time: '大约1天之前',
          read: '666',
          comment: '666',
          like: '666',
          pay: '666',
          src: '../../static/vue-demo-pic.jpg'
				},
				thi: {
          author: '黎敏如',
          title: '如何拍照显腿长？',
          time: '大约1天之前',
          read: '666',
          comment: '666',
          like: '666',
          pay: '666',
          src: '../../static/vue-demo-pic.jpg'
				}
			}
		}
		state.show = show
		state.articles = article[show]
	},



}
export default new Vuex.Store({
	state,
	mutations
})
