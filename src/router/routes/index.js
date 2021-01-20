export default [
  //登录页
  {
    path: '/',
		name: '/',
    component: () => import('../../views/login/login.vue'),
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
        component: () => import('../../views/home/home.vue'),
      },
    ]
  }
]
