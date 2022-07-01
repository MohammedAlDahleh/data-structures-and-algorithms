'use strict';
const LinkedList = require('../lib/linkedList');
const zipLists = require('../lib/function');

describe('Linked List Test', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('mohammed');
    expect(linkedList.head.value).toBe('mohammed');
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    expect(linkedList.head.value).toBe('h');
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('mohammed');
    linkedList.Insert('ammar');
    linkedList.Insert('mohammad');
    linkedList.Insert('lith');
    linkedList.Insert('yousf');
    linkedList.Insert('ahmad');
    expect(linkedList.length > 0).toBe(true);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    expect(linkedList.Includes('bahaa')).toBe(true);
  });
  test('Will return fale when searching for a value in the linked list that does not exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    expect(linkedList.Includes('malek')).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.Insert('a');
    linkedList.Insert('m');
    expect(linkedList.ToString()).toBe('m -> a -> h -> o -> m -> ');
  });
  test('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.Insert('a');
    linkedList.Insert('m');
    linkedList.append('d');
    expect(linkedList.ToString()).toBe('a -> m -> h -> o -> m -> d -> ');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.Insert('a');
    linkedList.Insert('m');
    linkedList.append('d');
    linkedList.append('e');
    linkedList.append('f');
    expect(linkedList.ToString()).toBe('m -> a -> h -> o -> m -> d -> e -> f -> ');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.insertBefore('a', 'c');
    expect(linkedList.ToString()).toBe('h -> c -> o -> m -> ');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('a');
    linkedList.Insert('h');
    linkedList.insertBefore('h', 'c');
    expect(linkedList.ToString()).toBe('c -> h -> a -> b -> ');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.insertAfter('a', 'c');
    expect(linkedList.ToString()).toBe('h -> o -> c -> m -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    linkedList.insertAfter('b', 'c');
    expect(linkedList.ToString()).toBe('h -> o -> m -> c -> ');
  });
  test('Where k is greater than the length of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    expect(linkedList.kthFromEnd(5)).toBe('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    expect(linkedList.kthFromEnd(3)).toBe('h');
  });
  test('Where k is not a positive integer', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    linkedList.Insert('o');
    linkedList.Insert('h');
    expect(linkedList.kthFromEnd(-1)).toBe('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('m');
    expect(linkedList.kthFromEnd(1)).toBe('m');
  });
  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('a');
    linkedList.Insert('h');
    expect(linkedList.kthFromEnd(2)).toBe('a');
  });
  test('Zip the two linked lists together', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('m');
    linkedList1.Insert('o');
    linkedList1.Insert('h');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('h -> f -> o -> e -> m -> d -> ');
  });
  test('Zip the two linked lists together, list2 had one more node', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('m');
    linkedList1.Insert('o');
    linkedList1.Insert('h');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    linkedList2.Insert('g');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('h -> g -> o -> f -> m -> e -> d -> ');
  });
  test('Zip the two linked lists together, list1 had one more node', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('m');
    linkedList1.Insert('o');
    linkedList1.Insert('h');
    linkedList1.Insert('z');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('z -> f -> h -> e -> o -> d -> m -> ');
  });
});