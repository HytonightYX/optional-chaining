/**
 * webpack loader
 * Optional Chain Transformer
 * 
 * @param {string} source 待处理代码字符串
 * @author Husiyuan
 */
function optionalChain(source) {
  const replacer = (str) => {
    // 判断是否为函数 fn?.(), 数组arr?.[1] 或对象属性, obj?.['name']
    const endBrackets = str[str.length - 1]
    const haveEndBrackets = (endBrackets === '(' || endBrackets === '[')

    // 去除末尾 ( 或 [，切分变量
    const varList = str.replace(/[\[\(]/g, '').split(/\.|\?\./)
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

    return ret + (haveEndBrackets ? endBrackets : '.')
  }

  return source.replace(/([\w\$_\?\.]+\?\.)[(\(\[]?/g, replacer)
}

module.exports = optionalChain