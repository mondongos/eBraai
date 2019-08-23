(function(exports){
class Auction {
  constructor(startBid, minBid, auctionLen) {
    this._startingBid = Number(startBid)
    this._minBid = Number(minBid)
    this._auctionLen = Number(auctionLen)
    this._currentBid = this._startingBid
  }

  makeBid(bid) {
    if (this._minBid > bid) {
      throw new Error("Error - bid lower than minimum allowed")
    } else {
      this._currentBid += Number(bid)
      let date = new Date
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
