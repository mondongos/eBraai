describe("Auction", function() {
  var auction

  beforeEach(function() {
    auction = new Auction(10, 1, 2)
  })

  describe("Initialisation of auction", function() {

    it("should have a starting bid price", function() {
      expect(auction._startingBid).toEqual(10)
    })

    it("should have a minimum bid", function() {
      expect(auction._minBid).toEqual(1)
    })

    it("should specify length of auction in minutes", function() {
      expect(auction._auctionLen).toEqual(2)
    })

    it("current bid defaults to starting bid", function() {
      expect(auction._currentBid).toEqual(auction._startingBid)
    })
  })

  describe("Make a bid", function() {

    it("current bid should increase when bid made", function() {
      auction.makeBid(4)
      expect(auction._currentBid).toEqual(14)
    })

    it("should throw error if bid is lower than minimum bid", function() {
      expect(function() {
        auction.makeBid(0.5)
      }).toThrowError("Error - bid lower than minimum allowed")
    })

    it("should keep a record of all bids", function() {
      let date = new Date
      expect(auction.makeBid(4)).toEqual({
        amount: 4,
        date: 23,
        user: "Halsey Meem"
      })
    })
  })
})
