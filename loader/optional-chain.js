/**
 * webpack loader
 * Optional Chain Transformer
 * 
 * @param {string} source 待处理代码字符串
 * @author HuSiyuan
 */
function optionalChain(source) {
  const replacer = (str) => {
    const isFunc = str.endsWith('()')
    // 去除末尾()，切分变量
    const varList = str.replace('()', '').split(/\.|\?\./)
    // 去除末尾空字符
    varList.pop()

    const defaultListIndex = 0
    let ret = varList[defaultListIndex]
    let pre = ret
    for (let i = 1; i < varList.length; i++) {
      pre = pre + '.' + varList[i]
      ret += ' && ' + pre
    }
    ret += ' && ' + pre

    return ret + (isFunc ? '()' : '.')
  }

  return source.replace(/([\w\$_\?\.]+\?\.)(\(\))?/g, replacer)
}

module.exports = optionalChain