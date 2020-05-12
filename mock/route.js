export default {
  '/api/routes': [
    {
      path:"/",
      addRoutes:[
        {
          path: '/home',
        },
        {
          path: '/home_1',
        },
        
      ]
    }
  ],
  '/api/auth_routes': {
    '/': { role: 'admin' },
  },
};
