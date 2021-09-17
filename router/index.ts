import { FC } from 'react';
import Index from '../src/index'

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
