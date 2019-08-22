class Controller {
  constructor()  {
    this._auctionModel = new Auction()
  }

  setEventListeners() {
    document.getElementById("make-bid-button")
    .addEventListener("click", this.newBid.bind(this))
  }

  newBid() {
    let bidValue = document.getElementById('square-input').value
    let result =
  }
}


// All auctions have an ID. Each ID corresponds to certain page.
