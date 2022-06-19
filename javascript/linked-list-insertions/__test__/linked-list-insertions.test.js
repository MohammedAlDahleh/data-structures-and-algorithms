'use strict';
const LinkedList = require('../lib/linked-list-insertions');

describe('Linked List Test', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('mohammed');
    expect(linkedList.head.value).toBe('mohammed');
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.toInsert('a');
    linkedList.toInsert('m');
    expect(linkedList.head.value).toBe('m');
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('mohammed');
    linkedList.toInsert('ali');
    linkedList.toInsert('ahmad');
    linkedList.toInsert('samer');
    linkedList.toInsert('yousef');
    linkedList.toInsert('sam');
    expect(linkedList.length > 0).toBe(true);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('mohammed');
    expect(linkedList.includeBoolean('mohammed')).toBe(true);
  });
  test('Will return fale when searching for a value in the linked list that does not exists', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('mohammed');
    expect(linkedList.includeBoolean('ahmad')).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.toInsert('a');
    linkedList.toInsert('m');
    expect(linkedList.ToString()).toBe('m -> o -> h -> a -> m -> ');
  });
  test('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.toInsert('a');
    linkedList.toInsert('m');
    linkedList.append('d');
    expect(linkedList.ToString()).toBe('m -> o -> h -> a -> m -> d -> ');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.toInsert('a');
    linkedList.toInsert('m');
    linkedList.append('d');
    linkedList.append('e');
    linkedList.append('f');
    expect(linkedList.ToString()).toBe('m -> o -> h -> a -> m -> d -> e -> f -> ');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.insertBefore('o', 'c');
    expect(linkedList.ToString()).toBe('m -> c -> o -> h -> ');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.insertBefore('m', 'c');
    expect(linkedList.ToString()).toBe('c -> m -> o -> h -> ');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.insertAfter('o', 'c');
    expect(linkedList.ToString()).toBe('m -> o -> c -> h -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('m');
    linkedList.toInsert('o');
    linkedList.toInsert('h');
    linkedList.insertAfter('h', 'c');
    expect(linkedList.ToString()).toBe('m -> o -> h -> c -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.toInsert('B');
    linkedList.toInsert('a');
    linkedList.toInsert('h');
    linkedList.insertAfter('h', 'c');
    expect(linkedList.ToString()).toBe('B -> a -> h -> c -> ');
  });
 
});