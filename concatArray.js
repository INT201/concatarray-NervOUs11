const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let result = [] //ผลลัพธ์
  if ((array1 == null && array2 == null) || (array1 == undefined && array2 == undefined)){
    return undefined
  }
  else if ((array1 == null && array2 == undefined) || (array1 == undefined && array2 == null)) {
    return undefined
  }
  else if (array1 == null || array1 == undefined){
    return array2
  }
  else if (array2 == null || array2 == undefined){
    return array1
  }
  
  else {
    for (let index = 0; index < array1.length; index++) {
      result[index] = array1[index]
    }
    for (let index = 0; index < array2.length; index++) {
      result[array1.length + index] = array2[index]
    }
  }
  return result
}
module.exports = concatArray