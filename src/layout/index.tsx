import React, { FC, ReactElement } from 'react'

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
    <>
      {isHeader && <Navigation />}
      {props.children}
      {isFooter && <Footer />}
    </>
  )
}

export default Layout
