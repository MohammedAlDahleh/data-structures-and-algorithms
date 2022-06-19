<!-- ![linked-list-kth](./linked-list-kth.PNG)



 test('Where k is greater than the length of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    linkedList.toInsert('a');
    linkedList.toInsert('h');
    expect(linkedList.kthEnd(5)).toBe('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    linkedList.toInsert('a');
    linkedList.toInsert('h');
    expect(linkedList.kthEnd(3)).toBe('B');
  });
  test('Where k is not a positive integer', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    linkedList.toInsert('a');
    linkedList.toInsert('h');
    expect(linkedList.kthEnd(-1)).toBe('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    expect(linkedList.kthEnd(1)).toBe('B');
  });
  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    linkedList.toInsert('a');
    linkedList.toInsert('h');
    expect(linkedList.kthEnd(2)).toBe('a');
  });
  
  kthEnd(k) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    if (k > count) {
      return 'Exception';
    }
    if (k < 1) {
      return 'Exception';
    }
    currentNode = this.head;
    for (let i = 0; i < count - k; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  } -->