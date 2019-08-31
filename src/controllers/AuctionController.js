(function(exports){
class AuctionController {
  constructor() {
    this._auctionModel = new Auction()
    this._auctionModel.createAuction("No more dry meat",3,1,10)
    this._auctionView = new AuctionView()
  }

  createNewAuction() {
    
  }

  setEventListeners() {
    document.getElementById("make-bid-button")
    .addEventListener("click", this.newBid.bind(this))
    document.getElementById("current-bid-amount")
    .innerHTML = this._auctionView.buildCurrentBid(this._auctionModel._currentBid)
    document.getElementById("auction-title")
    .innerHTML = this._auctionModel._auctionDetails.title
  }

  newBid() {
    let bidValue = document.getElementById("make-bid-input").value
    let result = this._auctionModel.makeBid(bidValue)
    console.log(this._auctionModel._currentBid)
    this.displayResult(this._auctionModel._currentBid)
  }

  displayResult(currentBidAmount) {
    document.getElementById('current-bid-amount')
    .innerHTML = this._auctionView.buildCurrentBid(currentBidAmount)
  }
}
exports.AuctionController = AuctionController;
})(this);



// All auctions have an ID. Each ID corresponds to certain page. Need session ID and auction ID
