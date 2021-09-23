import { resolve } from 'path/posix'
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
