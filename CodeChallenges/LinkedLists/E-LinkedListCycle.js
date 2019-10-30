/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let values = [];
  if (!head) {
    return false;
  }
  while (head.next) {
    console.log(head.next.val);
    values.push(head.val);

    if (values.includes(head.next.val)) {
      return true;
    }
    head = head.next;
  }
  return false;
};

hasCycle([
  -21,
  10,
  17,
  8,
  4,
  26,
  5,
  35,
  33,
  -7,
  -16,
  27,
  -12,
  6,
  29,
  -12,
  5,
  9,
  20,
  14,
  14,
  2,
  13,
  -24,
  21,
  23,
  -21,
  5
]);
