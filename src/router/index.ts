import { FC } from 'react'
import Login from '../pages/login'
import Index from '../pages/home'
import PageNotFound from '../pages/page-not-found'

type Layout = 'limpidity' | 'normal' | 'no-header' | 'no-footer'

interface IRouters {
  title: string
  path: string
  component: FC
  isAuth?: boolean
  exact?: boolean
  layout?: Layout
}

const routes: IRouters[] = [
  {
    title: '登录',
    path: '/login',
    component: Login,
    layout: 'limpidity'
  },
  {
    title: '首页',
    path: '/',
    isAuth: true,
    component: Index,
    layout: 'normal'
  },
  {
    title: '404',
    path: '/404',
    component: PageNotFound,
    layout: 'limpidity'
  }
]

export { routes, Layout }
