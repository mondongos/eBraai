(function(exports) {
  class AuctionView {
    constructor() {

    }

    buildCurrentBid(currentBid) {
      return "<h2>Current Bid: " + currentBid + "</h2>"
    }
  }

exports.AuctionView = AuctionView
})(this)
