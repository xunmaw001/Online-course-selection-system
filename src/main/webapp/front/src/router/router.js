import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import kechengleixingList from '../pages/kechengleixing/list'
import kechengleixingDetail from '../pages/kechengleixing/detail'
import kechengleixingAdd from '../pages/kechengleixing/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import xuankexinxiList from '../pages/xuankexinxi/list'
import xuankexinxiDetail from '../pages/xuankexinxi/detail'
import xuankexinxiAdd from '../pages/xuankexinxi/add'
import kechengchengjiList from '../pages/kechengchengji/list'
import kechengchengjiDetail from '../pages/kechengchengji/detail'
import kechengchengjiAdd from '../pages/kechengchengji/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'kechengleixing',
					component: kechengleixingList
				},
				{
					path: 'kechengleixingDetail',
					component: kechengleixingDetail
				},
				{
					path: 'kechengleixingAdd',
					component: kechengleixingAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'xuankexinxi',
					component: xuankexinxiList
				},
				{
					path: 'xuankexinxiDetail',
					component: xuankexinxiDetail
				},
				{
					path: 'xuankexinxiAdd',
					component: xuankexinxiAdd
				},
				{
					path: 'kechengchengji',
					component: kechengchengjiList
				},
				{
					path: 'kechengchengjiDetail',
					component: kechengchengjiDetail
				},
				{
					path: 'kechengchengjiAdd',
					component: kechengchengjiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
