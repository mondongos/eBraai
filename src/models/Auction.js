(function(exports){
class Auction {
  constructor() {
    this._auctionDetails = {

    }
    this._currentBid = 0
    this._allBids = []
  }

  createAuction(title, startBid, minBid, auctionLen) {
    this._auctionDetails.title = title
    this._auctionDetails.startBid = startBid
    this._auctionDetails.minBid = minBid
    this._auctionDetails.auctionLen = auctionLen
    this._currentBid = startBid
  }

  makeBid(bid) {
    if (this._auctionDetails.minBid > bid) {
      throw new Error("Error - bid lower than minimum allowed")
    } else {
      this._currentBid += Number(bid)
      let date = new Date
      this._allBids.push({
        amount: bid,
        date: date.getDate(),
        user: "Halsey Meem"
      })
      return {
        amount: bid,
        date: date.getDate(),
        user: "Halsey Meem"
      }
    }
  }
}
exports.Auction = Auction;
})(this);

// Create auction method next along with form
