function mergeSortLinkedList(head) {
  if (head.next === null) {
    return head
  }
  //divide
  const [leftUnordered, rightUnordered] = splitList(head)
  const leftHead = mergeSortLinkedList(leftUnordered)
  const rightHead = mergeSortLinkedList(rightUnordered)
  return merge(leftHead, rightHead)
}

function splitList(head) {
  let fast = head
  let slow = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const rightHead = slow.next
  slow.next = null
  return [head, rightHead]
}

function logLinkedListNodes(head) {
  let current = head;
  console.log("start of the list")
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function merge(leftHead, rightHead){
  let result = null
  if(leftHead === null) return rightHead
  if(rightHead === null) return leftHead
  if(leftHead.value < rightHead.value){
    result = leftHead
    result.next = merge(leftHead.next, rightHead)
  }
  if(rightHead.value < leftHead.value){
    result = rightHead
    result.next = merge(leftHead, rightHead.next)
  }
  return result
}

const head = { value: 4, next: { value: 1, next: { value: 3, next: { value: 2, next: { value: 5, next: null } } } } }

const sorted = mergeSortLinkedList(head)
logLinkedListNodes(sorted)
