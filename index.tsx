import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import loadAMap from './src/utils/amap'

// 引入高德地图
loadAMap('a3d707ea01fc4043acc359f53aeb0540')

ReactDOM.render(<App />, document.getElementById('app'))
