class Auction {
  constructor(startBid, minBid, auctionLen) {
    this._startingBid = startBid
    this._minBid = minBid
    this._auctionLen = auctionLen
    this._currentBid = this._startingBid
    this._auctionRecords = []
  }

  makeBid(bid) {
    if (this._minBid > bid) {
      throw new Error("Error - bid lower than minimum allowed")
    } else {
      this._currentBid += bid
      let date = new Date
      this._auctionRecords.push({amount: bid, date: date.getDate(), user: "Halsey Meem"})
    }
  }


}
