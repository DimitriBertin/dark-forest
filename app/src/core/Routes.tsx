import * as AuthPage from '../pages/auth'

type RouteType = {
  auth: {
    [key: string]: {
      url: string
      component: React.ComponentType
      exact: boolean
    }
  }
}

const Routes: RouteType = {
  auth: {
    login: {
      url: '/login',
      component: AuthPage.Login,
      exact: true,
    },
    register: {
      url: '/register',
      component: AuthPage.Register,
      exact: true,
    },
    forgotPassword: {
      url: '/forgot-password',
      component: AuthPage.ForgotPassword,
      exact: true,
    },
  },
}

export default Routes
