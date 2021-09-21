import { FC } from 'react';
import Index from '../pages/home/index'

interface IRouters {
  title: string,
  path: string,
  component: FC
}

const routes: IRouters[] = [
  {
    title: '首页',
    path: '/',
    component: Index
  }
]

export { routes }
