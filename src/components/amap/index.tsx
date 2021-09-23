import React, { CSSProperties, FC, memo, ReactElement } from 'react'
import AMap from '../../utils/amap'

interface AMapProps {
  zoom?: number
  center?: Array<number>
  style?: CSSProperties
  [propName: string]: any
}

type ReadonlyProps = Readonly<AMapProps>

const AGMap: FC<ReadonlyProps> = (props: ReadonlyProps): ReactElement => {
  const { style, ...mapParams } = props

  AMap.onload.then(() => {
    new window.AMap.Map('container', {
      ...mapParams
    })
  })

  return <div id="container" style={style}></div>
}

AGMap.defaultProps = {
  zoom: 10,
  center: [116.397428, 39.90923],
  style: {
    width: '300px',
    height: '180px'
  }
}

export default memo(AGMap)
