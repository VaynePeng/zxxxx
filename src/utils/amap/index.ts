function loadAMap(key: string, version = '1.4.15') {
  let script: HTMLScriptElement = document.createElement('script')
  script.src = `https://webapi.amap.com/maps?v=${version}&key=${key}`
  document.head.insertAdjacentElement('beforeend', script)
}

export default loadAMap
