import React, { FC, ReactElement } from 'react'
import './index.less'

import { Layout } from '../router'

import Navigation from './navigation'
import Footer from './footer'


interface ILayout {
  children?: ReactElement | undefined
  layout?: Layout
}

const Layout: FC<ILayout> = (
  props: ILayout = { layout: 'limpidity' }
): ReactElement => {
  let { layout = 'normal' } = props
  const isHeader = ['normal', 'no-footer'].includes(layout)
  const isFooter = ['normal', 'no-header'].includes(layout)
  return (
    <div className="layout">
      {isHeader && <Navigation />}
      <div className="content">{props.children}</div>
      {isFooter && <Footer />}
    </div>
  )
}

export default Layout
