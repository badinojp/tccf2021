const filter = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {


    it('filter product equal "Camera GHE" should return 1 item', () => {

        let items = filter("product", "EQUAL", "Camera GHE")

        assert.strictEqual(items.length,1)
    })


    it('filter product equal "Rocket" should return 0 items', () => {
        let items = filter("product", "EQUAL", "Rocket")

        assert.strictEqual(items.length,0)
    })

    it('filter inStock equal true should return 12 items', () => {
        let items = filter("inStock", "EQUAL", true)

        assert.strictEqual(items.length,12)
    })

    it('filter inStock equal false should return 4 items', () => {
        let items = filter("inStock", "EQUAL", false)

        assert.strictEqual(items.length,4)
    })

    it('filter price equal 82 should return 2 items', () => {
        let items = filter("price", "EQUAL", 82)

        assert.strictEqual(items.length,2)
    })

    it('filter product contains "TV" should return 4 items', () => {
        let items = filter("product", "CONTAINS", "TV")

        assert.strictEqual(items.length,4)
    })

    it('filter product contains "200" should return 2 items', () => {
        let items = filter("product", "CONTAINS", "200")

        assert.strictEqual(items.length,2)
    })

    it('filter product contains "qwerty" should return 0 items', () => {
        let items = filter("product", "CONTAINS", "999")

        assert.strictEqual(items.length,0)
    })

    it('filter price greater than 50 should return 14 items', () => {
        let items = filter("price", "GREATER_THAN", 50)

        assert.strictEqual(items.length,14)
    })

    it('filter price greater than 200 should return 6 items', () => {
        let items = filter("price", "GREATER_THAN", 200)

        assert.strictEqual(items.length,6)
    })

    it('filter price less than 50 should return 2 items', () => {
        let items = filter("price", "LESS_THAN", 50)

        assert.strictEqual(items.length,2)
    })

    it('filter price less than 200 should return 10 items', () => {
        let items = filter("price", "LESS_THAN", 200)

        assert.strictEqual(items.length,10)
    })
})
