class Flash {
  playingCardLimit = 3;

  getCards() {
    let cardsNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let allCards = new Array;

    if(cardsNumber[0] === 1) {
      cardsNumber[0] = 14
    }

    let cards = {
      heart: cardsNumber,
      diamond: cardsNumber,
      club: cardsNumber,
      spade: cardsNumber
    }

    
    

    for(let suit in cards) {

      for(let allSuit of cards[suit]) {
        allCards.push({
          suit: suit,
          value: allSuit
        })
      }
    }

    return allCards
  }

  //deal cards
  dealCards(numUser) {
    let cards = this.getCards()

    let genCards = new Array
    
    let suits = new Array
    for (let i = 0; i < numUser; i++) {
      let suit = new Array

      for (let j = 0; j < this.playingCardLimit; j++) {
        let randomCardIndex = this.uniqueCardIndex(genCards, cards.length)
        genCards.push(randomCardIndex)
        suit.push(cards[randomCardIndex])
      }
      
      suits.push(suit)
    }
    
    return suits
  }

  // check cards suit and value
  checkCards(suit) {
    if (this.isTrail(suit)) {
      return "Trail"
    }

    if (this.isSameSuit(suit)) {
      if (this.isSequenced(suit)) {
        return 'Pure Sequence'
      } else {
        return 'Colored'
      }
    }

    if(this.isSequenced(suit)) {
      return "Run"
    } 

    if(this.isPairCards(suit)) {
      return "Pair"
    }

    return "High Card"
  }

  //random cards
  uniqueCardIndex(genCards, cardLength) {
    
    while(true) {
      let randomCardIndex = Math.floor(Math.random() * cardLength)

      if(genCards.includes(randomCardIndex) === false) {
        return randomCardIndex
      }
    }
  }
  
  isTrail(suit) {
    let card1 = suit[0].value
    let card2 = suit[1].value
    let card3 = suit[2].value

    if (card1 === card2 && card2 === card3) { return true }
    else { return false }
  }
  
  isSameSuit(suit) {
    let card1 = suit[0].suit
    let card2 = suit[1].suit
    let card3 = suit[2].suit

    if (card1 === card2 && card2 === card3) { return true }
    else { return false }
  }
  
  isSequenced(suit) {
    let x = [suit[0].value,suit[1].value,suit[2].value]
     
    let y = x.sort().slice(1).map(function(n, i) { return n - x[i]; })

    let isDifference= y.every(value => value == 1)

    if(isDifference == true) {
      return true
    } else {
      return false
    }
  }

  isPairCards(suit) {
    let card1 = suit[0].value
    let card2 = suit[1].value
    let card3 = suit[2].value

    if(card1 === card2 || card1 === card3 || card2 === card3) {
      return true
    }
  }
}

