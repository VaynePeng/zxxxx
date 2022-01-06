/*
 * @Description: 高德地图
 * @Author: WaynePeng
 * @Date: 2022-01-06 15:12:31
 * @LastEditTime: 2022-01-06 15:29:50
 * @LastEditors: WaynePeng
 */

class AMap {
  private key: string
  private version?: string

  constructor(key: string, version = '1.4.15') {
    this.key = key
    this.version = version
  }

  // 加载完成回调
  static onload: Promise<void>

  load() {
    let script: HTMLScriptElement = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=${this.version}&key=${this.key}`
    AMap.onload = new Promise<void>((resolve) => {
      script.onload = () => {
        resolve()
      }
    })
    document.head.insertAdjacentElement('beforeend', script)
  }
}

export default AMap
