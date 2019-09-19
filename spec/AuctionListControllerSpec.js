describe("Auction list controller", function() {
    var auctionList
    var controller

    beforeEach(function() {
        auctionList = new AuctionList()
        controller = new AuctionListController(auctionList)
    })

    it("should add a new auction to list", function() {
        expect(controller.addAuctionToList(1,2,3,4)).toEqual(auctionList.createNewAuction(1,2,3,4))
    })
})