// Validate Binary search tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root, currentI = 0, track = []) {
  const leftI = getLeft(currentI)
  const rightI = getRight(currentI)
  const isLeft = isIn(leftI, root) 
  const isRight = isIn(rightI, root)
  let isValidLeftTree = false
  let isValidRightTree = false

  if (!isLeft && !isRight) {
    return isValidEm(root[currentI], track)
  }

  if (isLeft) {
    isValidLeftTree = isValidBST(root, leftI, track.concat([[root[currentI], '-']]))
  }
  if (isRight) {
    isValidRightTree = isValidBST(root, rightI, track.concat([[root[currentI], '+']]))
  }

  return isValidLeftTree && isValidRightTree

};

function getLeft(indexN) {
  return indexN * 2 + 1
}

function getRight(indexN) {
  return indexN * 2 + 2
}

function isIn(index, array) {
  return index > 0 && index <= array.length - 1 && array[index] !== null
}

function isValidEm(value, track) {
  return track.every(([num, sign]) => sign === '+' ? value > num : value < num)
}


console.log(isValidBST([5,1,4,null,null,3,6]))