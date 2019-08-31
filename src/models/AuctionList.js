(function(exports) {
class AuctionList {
    constructor() {
        this._auctions = []
    }

    addAnAuction(auction) {
        this._auctions.push(auction)
    }
}
exports.AuctionList = AuctionList;    
})(this)