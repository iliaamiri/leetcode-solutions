/**
 *
 * @param val
 * @param next LinkNode | null
 * @constructor
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param head
 * @return {ListNode}
 */
function swapPairs(head) {
  if (head === null) return null
  let resultHead = null;

  let position = 1;
  let previousLinkedNode = new ListNode();
  let currentLinkedNode = head;
  while(true) {
    if (position % 2 !== 0) {
      previousLinkedNode.val = currentLinkedNode.val;
      previousLinkedNode.next = null;
    } else {
      if (resultHead !== null) {
        let lastNode = resultHead
        while(lastNode.next !== null) {
          lastNode = lastNode.next;
        }
        lastNode.next = new ListNode(currentLinkedNode.val, new ListNode(previousLinkedNode.val, null));
      } else {
        resultHead = new ListNode(currentLinkedNode.val, new ListNode(previousLinkedNode.val, null));
      }
    }

    const nextLinkedNode = currentLinkedNode.next
    if (nextLinkedNode === null) {
      if (position % 2 !== 0) {
        if (resultHead !== null) {
          let lastNode = resultHead
          while(lastNode.next !== null) {
            lastNode = lastNode.next;
          }
          lastNode.next = currentLinkedNode;
        } else {
          resultHead = head;
        }
      }
      break;
    }
    currentLinkedNode.val = nextLinkedNode.val;
    currentLinkedNode.next = nextLinkedNode.next;

    position++;
  }

  return resultHead;
}

const head = new ListNode(1,
  new ListNode(2,
    new ListNode(3, null)))

const result = swapPairs(head);
console.log(result);
