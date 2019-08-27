describe("Auction", function() {
  var auction

  beforeEach(function() {
    auction = new Auction()
    auction.createAuction("Juicy Barby",10,1,2)
  })

  describe("Initialisation of auction", function() {

    it("should have a title", function() {
      expect(auction._auctionDetails.title).toEqual("Juicy Barby")
    })

    it("should have a starting bid price", function() {
      expect(auction._auctionDetails.startBid).toEqual(10)
    })

    it("should have a minimum bid", function() {
      expect(auction._auctionDetails.minBid).toEqual(1)
    })

    it("should specify length of auction in minutes", function() {
      expect(auction._auctionDetails.auctionLen).toEqual(2)
    })

    it("current bid defaults to starting bid", function() {
      expect(auction._currentBid).toEqual(10)
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

    it("should return bid", function() {
      let date = new Date
      expect(auction.makeBid(4)).toEqual({
        amount: 4,
        date: date.getDate(),
        user: "Halsey Meem"
      })
    })

    it("should keep a record of all bids", function() {
      let date = new Date
      auction.makeBid(20)
      auction.makeBid(30)
      expect(auction._allBids).toEqual([{
        amount: 20,
        date: date.getDate(),
        user: "Halsey Meem"
      }, {
        amount: 30,
        date: date.getDate(),
        user: "Halsey Meem"
      }])
    })
  })
})
