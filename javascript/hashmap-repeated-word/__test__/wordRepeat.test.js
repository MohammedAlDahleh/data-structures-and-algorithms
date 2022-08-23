const wordRepeat = require('../hashmap-repeated-word');

describe('Hash Table test', () => {
    test("Repeated Words Test", () => {
        const words = "Once upon a time, there was a brave princess who..."
        expect(wordRepeat(words)).toBe("a")
    })
})