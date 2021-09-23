import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import AMap from './src/utils/amap'

// 引入高德地图
new AMap('a3d707ea01fc4043acc359f53aeb0540').load()

ReactDOM.render(<App />, document.getElementById('app'))
