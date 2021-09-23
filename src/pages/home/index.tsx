import React, { FC, ReactElement } from 'react'
import './index.less'

import AMap from '../../components/amap'

const Index: FC = (): ReactElement => {
  // window.AMap.

  return (
    <div className="home">
      <AMap style={{ width: '100vw', height: '100vh' }} />
    </div>
  )
}

export default Index
