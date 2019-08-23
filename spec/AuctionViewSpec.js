describe("Auctions Views", function() {
  var view
  beforeEach(function() {
    view = new AuctionView()
  })

  it("should generate a view for the current bid", function() {
    expect(view.buildCurrentBid(10)).toEqual("<h2>10</h2>")
  })
})
