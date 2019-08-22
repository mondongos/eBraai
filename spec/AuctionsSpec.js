describe("Auction", function() {
  var auction
  beforeEach(function() {
    auction = new Auction(10, 1, 2)
  })

  it("should have a starting bid price", function() {
    expect(auction._startingBid).toEqual(10)
  })

  it("should have a minimum bid", function() {
    expect(auction._minBid).toEqual(1)
  })

  it("should specify length of auction in minutes", function() {
    expect(auction._auctionLength).toEqual(2)
  })
})
