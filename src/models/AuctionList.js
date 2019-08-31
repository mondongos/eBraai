(function(exports) {
class AuctionList {
    constructor() {
        this._auctions = []
    }

    addAnAuction(auction) {
        this._auctions.push(auction)
    }

    viewAll() {
        for(var i = 0; i < this._auctions.length; ++i) {
            return this._auctions[i]
        }
    }
}
exports.AuctionList = AuctionList;    
})(this)