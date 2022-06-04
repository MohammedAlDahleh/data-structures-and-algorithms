'use strict'

const LinkedList = require('../lib/linkedlist');

describe("Can successfully instantiate an empty linked list", () => {
    test("create LinkedList", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test("Can properly insert into the linked list", () => {
        let list = new LinkedList();
        list.toInsert("Mohammed");
        expect(list.head.value).toEqual('Mohammed');
    })
    test("The head property will properly point to the first node in the linked list", () => {
        let list = new LinkedList();
        list.toInsert('a');
        list.toInsert('b');
        list.toInsert('c');
        list.toInsert('d');
        expect(list.head.value).toEqual('a');
    })
    it("Can properly insert multiple nodes into the linked list", () => {
        let list = new LinkedList();
        list.toInsert("Mohammed");
        list.toInsert("Mohammed");
        list.toInsert("Mohammed");
        list.toInsert("Mohammed");
        expect(list.length>2).toEqual(true);
    })
    it("Will return true when finding a value within the linked list that exists",()=>{
        let list = new LinkedList();
        list.toInsert(1);
        expect(list.includeBoolean(1)).toEqual(true);
    })
    test("Will return false when searching for a value in the linked list that does not exist",()=>{
        let list = new LinkedList();
        list.toInsert(50)
        expect(list.includeBoolean(1)).toEqual(false);
    })
    test("Can properly return a collection of all the values that exist in the linked list",()=>{
        let list = new LinkedList();
        list.toInsert('a');
        list.toInsert('b');
        list.toInsert('c');
        expect(list.str()).toEqual("a->b->c->");
    })
})