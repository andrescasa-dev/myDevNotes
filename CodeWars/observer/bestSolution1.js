// export default function getPINs(observed) {
//   const dictionary = {
//     '0': [ '0', '8' ],
//     '1': [ '1', '2', '4' ],
//     '2': [ '1', '2', '3', '5' ],
//     '3': [ '2', '3', '6' ],
//     '4': [ '1', '4', '5', '7' ],
//     '5': [ '2', '4', '5', '6', '8' ],
//     '6': [ '3', '5', '6', '9' ],
//     '7': [ '4', '7', '8' ],
//     '8': [ '5', '7', '8', '9', '0' ],
//     '9': [ '6', '8', '9' ]
//   }
//   return observed.split('')
//   .map(t => (dictionary[t]))
//   .reduce((pre, cur)=>{
//       return pre.map(t => {
//         return cur.map(g => {
//             return t + g
//           })
//       }).flat();
//     }
//   )
// }

export default function getPINS(observer){
  const table = {
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }
  const variationArr = observer.split('').map(digit => table[digit]);
  const st = variationArr.reduce((variations, addArr)=>{
    return variations.map( variation => {
      return addArr.map(digitToAdd => {
        return variation + digitToAdd;
      })
    }).flat();
  })
  debugger;
}