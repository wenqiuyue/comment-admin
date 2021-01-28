export default [
  //登录页
  {
    path: '/',
		name: '/',
    component: () => import('../../views/login/login.vue'),
  },
  //注册页
  {
    path: '/register',
		name: 'register',
    component: () => import('../../views/register'),
  },
	//首页
  {
    path: '/',
    name: 'layout',
    component: () => import('../../views/layout/layout.vue'),
    children: [
      //首页
      {
        path: '/home',
        name: 'home',
        meta:{title:'Home'},
        component: () => import('../../views/home/home.vue'),
      },
      //数据
      {
        path: '/analystics',
        name: 'analystics',
        meta:{title:'Analystics'},
        component: () => import('../../views/analystics'),
      },
      //评论回复
      {
        path: '/reviews',
        name: 'reviews',
        meta:{title:'Reviews'},
        component: () => import('../../views/reviews'),
      },
      //验证
      {
        path: '/verification',
        name: 'verification',
        meta:{title:'Verification'},
        component: () => import('../../views/verification'),
      },
    ]
  }
]
