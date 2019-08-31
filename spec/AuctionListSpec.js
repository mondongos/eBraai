describe("Auction List", function() {
    var auctionList
    var auction

    beforeEach(function() {
        auction = new Auction()
        auctionList = new AuctionList()
    })

    it("should save auction to an array", function() {
        auctionList.addAnAuction(auction)
        expect(auctionList._auctions[0]).toEqual(auction)
    })

    it("should display a list of auctions", function() {
        auctionList.addAnAuction(auction)
        expect(auctionList.viewAll()).toEqual(auction)
    })
})