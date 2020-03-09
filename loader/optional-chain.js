/**
 * Optional Chain transformer
 * 
 * @param {string} source 待处理代码字符串
 * @author Hu siyuan
 */
function optionalChain(source) {
  const replacer = (str) => {
    const isFunc = str.endsWith('()')
    // 去除末尾()，切分变量
    const vars = str.replace('()', '').split(/\.|\?\./)
    // 去除末尾空字符
    vars.pop()

    let ret = vars[0]
    let pre = ret
    for (let i = 1; i < vars.length; i++) {
      pre = pre + '.' + vars[i]
      ret += ' && ' + pre
    }
    ret += ' && ' + pre

    return ret + (isFunc ? '()' : '.')
  }

  const replaced = source.replace(/([\w\$_\?\.]+\?\.)(\(\))?/g, replacer)

  return replaced
}

module.exports = optionalChain