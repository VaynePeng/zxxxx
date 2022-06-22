import React, { FC, ReactElement } from 'react'
import './index.less'

import AMap from '../../components/amap'

const Index: FC = (): ReactElement => {
  return (
    <div className="home">
      <AMap style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Index
