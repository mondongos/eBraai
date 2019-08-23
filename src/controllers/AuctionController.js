(function(exports){
class AuctionController {
  constructor() {
    this._auctionModel = new Auction()
  }

  setEventListeners() {
    document.getElementById("make-bid-button").addEventListener("click", this.newBid.bind(this))
  }

  newBid() {
    let bidValue = document.getElementById("make-bid-input").value
    let result = this._auctionModel.makeBid(bidValue)
    console.log(result)
  }
}
exports.AuctionController = AuctionController;
})(this);



// All auctions have an ID. Each ID corresponds to certain page.
