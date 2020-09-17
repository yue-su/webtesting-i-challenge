
const enhancer = require("./enhancer.js")
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("should set durability to 100", () => {
      //act
      const item = { name: "plot", durability: 30, enhancement: 10 }
      const repairedItem = enhancer.repair(item)

      expect(repairedItem).toEqual({
        name: "plot",
        durability: 100,
        enhancement: 10,
      })
    })
  })

  describe("success", () => {
    it("should add 1 to enhencement when the enhencement is less than 20 ", () => {
      const item = { name: "plot", durability: 30, enhancement: 10 }
      const succeedItem = enhancer.success(item)
      
      expect(succeedItem).toEqual({
          name: "plot",
          durability: 30,
          enhancement: 11,
        })
    })
    
    it("should not change if the enhencement is 20", () => {
        const item = { name: "plot", durability: 30, enhancement: 20 }
        const succeedItem = enhancer.success(item)
        
        expect(succeedItem).toEqual({
            name: "plot",
            durability: 30,
            enhancement: 20,
          })
    })
  })
    
    describe("fail", () => {
        it("should have durability - 5 when enhancement < 15", () => {
           const item = { name: "plot", durability: 30, enhancement: 14 }
            const failedItem = enhancer.fail(item)
            expect(failedItem).toEqual({
              name: "plot",
              durability: 25,
              enhancement: 14,
            })
        })
        it("should have durability - 10 when enhancement = 15 or 16", () => {
            const item = { name: "plot", durability: 30, enhancement: 16 }
            const failedItem = enhancer.fail(item)
            expect(failedItem).toEqual({
              name: "plot",
              durability: 20,
              enhancement: 16,
            })
        })
        it("should have durability - 10 and enhancement - 1 when enhancement > 16", () => {
            const item = { name: "plot", durability: 30, enhancement: 18 }
            const failedItem = enhancer.fail(item)
           expect(failedItem).toEqual({
             name: "plot",
             durability: 20,
             enhancement: 17,
           })
       })
    })
   
    describe("get", () => {
         const item = { name: "plot", durability: 30, enhancement: 18 }
        const getItem = enhancer.get(item)
        
        expect(getItem).toEqual({
          name: "[+18] plot",
          durability: 30,
          enhancement: 18,
        })
    
    })
})
