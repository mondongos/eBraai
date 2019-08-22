describe("Auction", function() {
  var auction
  beforeEach(function() {
    auction = new Auction(10)
  })

  it("should have a starting bid price", function() {
    expect(auction._startingBid).toEqual(10)
  })
})
