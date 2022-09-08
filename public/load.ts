
let flash = new Flash()
let currentSuits = null;

function loadCards() {
 let suits = flash.dealCards(3) 

 currentSuits = suits


 //cards attach with html dom
 let cardImg = document.querySelector(".cards")

 let img1 = cardImg.children[0].children[0]
 let img2 = cardImg.children[0].children[1]
 let img3 = cardImg.children[0].children[2]

 let img4 = cardImg.children[1].children[0]
 let img5 = cardImg.children[1].children[1]
 let img6 = cardImg.children[1].children[2]

 let img7 = cardImg.children[2].children[0]
 let img8 = cardImg.children[2].children[1]
 let img9 = cardImg.children[2].children[2]



 let imgSrcUrl = "/resource/image/" + suits[0][0].suit + 's-' + suits[0][0].value + '.png'
 let imgSrcUrl2 = "/resource/image/" + suits[0][1].suit + 's-' + suits[0][1].value + '.png'
 let imgSrcUrl3 = "/resource/image/" + suits[0][2].suit + 's-' + suits[0][2].value + '.png'

 let imgSrcUr4 = "/resource/image/" + suits[1][0].suit + 's-' + suits[1][0].value + '.png'
 let imgSrcUrl5 = "/resource/image/" + suits[1][1].suit + 's-' + suits[1][1].value + '.png'
 let imgSrcUrl6 = "/resource/image/" + suits[1][2].suit + 's-' + suits[1][2].value + '.png'

 let imgSrcUr7 = "/resource/image/" + suits[2][0].suit + 's-' + suits[2][0].value + '.png'
 let imgSrcUrl8 = "/resource/image/" + suits[2][1].suit + 's-' + suits[2][1].value + '.png'
 let imgSrcUrl9 = "/resource/image/" + suits[2][2].suit + 's-' + suits[2][2].value + '.png'


  img1.setAttribute("src", imgSrcUrl)
  img2.setAttribute("src", imgSrcUrl2)
  img3.setAttribute("src", imgSrcUrl3)

  img4.setAttribute("src", imgSrcUr4)
  img5.setAttribute("src", imgSrcUrl5)
  img6.setAttribute("src", imgSrcUrl6)

  img7.setAttribute("src", imgSrcUr7)
  img8.setAttribute("src", imgSrcUrl8)
  img9.setAttribute("src", imgSrcUrl9)

  let checkCards = flash.checkCards(suits[0])
  let checkCards1 = flash.checkCards(suits[1])
  let checkCards2 = flash.checkCards(suits[2])

  let btn = document.querySelector("#btn2") as HTMLButtonElement
  btn.setAttribute("data-btn2", "on")
}

// select winner
function winner() {
  let cards1 = flash.checkCards(currentSuits[0])
  let cards2 = flash.checkCards(currentSuits[1])
  let cards3 = flash.checkCards(currentSuits[2])

  let cardValue1 = currentSuits[0][0].value + currentSuits[0][1].value + currentSuits[0][2].value
  let cardValue2 = currentSuits[1][0].value + currentSuits[1][1].value + currentSuits[1][2].value
  let cardValue3 = currentSuits[2][0].value + currentSuits[2][1].value + currentSuits[2][2].value


  let card = document.querySelectorAll(".card") 
  
 

  let cardSuit = [cards1,cards2,cards3] as any

  if (cardSuit.includes('Trail')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'Trail' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('Trail card 1') 
      arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      console.log('Trail card 2+') 

      let cards_list = []
      arr.forEach((val) => {
        let cards_val = []
        let suit = currentSuits[val]
        cards_val.push(suit[0].value + suit[1].value + suit[2].value)
        cards_list.push(cards_val)
      })

      if(cards_list[0][0] > cards_list[1][0]) {
        console.log("0 index trail win")
        card[arr[0]].setAttribute('data-card', 'on')
      } else if(cards_list[1][0] > cards_list[0][0]) {
        console.log("1 index trail win")
        card[arr[1]].setAttribute('data-card', 'on')
      } else {
        console.log('match draw')
      }
    }
  } else if(cardSuit.includes('Pure Sequence')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'Pure Sequence' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('Pure Sequence card 1') 
      arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      console.log('Pure Sequence card 2+') 

      let cards_list = []
      arr.forEach((val) => {
        let cards_val = []
        let suit = currentSuits[val]
        cards_val.push(suit[0].value + suit[1].value + suit[2].value)
        cards_list.push(cards_val)
        
      })

      if(cards_list[0][0] > cards_list[1][0]) {
        console.log("0 index pSequence win")
        card[arr[0]].setAttribute('data-card', 'on')
      } else if(cards_list[1][0] > cards_list[0][0]) {
        console.log("1 index pSequence win")
        card[arr[1]].setAttribute('data-card', 'on')
      } else {
        console.log('match draw')
      }
    }
  } else if(cardSuit.includes('Run')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'Run' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('Run card 1') 
      //arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      console.log('Run card 2+') 

      let cards_list = []
      arr.forEach((val) => {
        let cards_val = []
        let suit = currentSuits[val]
        cards_val.push(suit[0].value + suit[1].value + suit[2].value)
        cards_list.push(cards_val)
      })

      if(cards_list[0][0] > cards_list[1][0]) {
        console.log("0 index run win")
        card[arr[0]].setAttribute('data-card', 'on')
      } else if(cards_list[1][0] > cards_list[0][0]) {
        console.log("1 index run win")
        card[arr[1]].setAttribute('data-card', 'on')
      } else {
        console.log('match draw')
      }
    }
  } else if(cardSuit.includes('Colored')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'Colored' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('Colored card 1') 
     // arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      console.log('Colored card 2+') 

      let cards_list = []
      arr.forEach((val) => {
        let cards_val = []
        let suit = currentSuits[val]
        cards_val.push(suit[0].value + suit[1].value + suit[2].value)
        cards_list.push(cards_val)
      })

      if(cards_list[0][0] > cards_list[1][0]) {
        console.log("0 index Colored win")
        card[arr[0]].setAttribute('data-card', 'on')
      } else if(cards_list[1][0] > cards_list[0][0]) {
        console.log("1 index Colored win")
        card[arr[1]].setAttribute('data-card', 'on')
      } else {
        console.log('match draw')
      }
    }
  } else if(cardSuit.includes('Pair')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'Pair' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('Pair card 1') 
      
     // arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      console.log('Pair card 2+') 
      let cards_list = []
      
      arr.forEach((val) => {
        let cards_val = []
        let suit = currentSuits[val]
        cards_val.push(suit[0].value + suit[1].value + suit[2].value)
        cards_list.push(cards_val)
      })
      
      if(cards_list[0][0] > cards_list[1][0]) {
        console.log("0 index pair win")

        card[arr[0]].setAttribute('data-card', 'on')
      } else if(cards_list[1][0] > cards_list[0][0]) {
        console.log("1 index pair win")
        card[arr[1]].setAttribute('data-card', 'on')
      } else {
        console.log('match draw')
      }
    }
  } else if(cardSuit.includes('High Card')) {
    let arr = []
    cardSuit.forEach((card, index) => card === 'High Card' ? arr.push(index) : null)
    if(arr.length === 1) {
      console.log('high card 1') 
      //arr.forEach((indx) => card[indx].setAttribute('data-card', 'on'))
    } else {
      if(cardValue1 > cardValue2 && cardValue1 > cardValue3) {
        console.log("hi crd 1 big")
         //card[0].setAttribute('data-card', 'on')
      } else if(cardValue2 > cardValue1 && cardValue2 > cardValue3) {
        console.log("hi crd 2 big")
         //card[1].setAttribute('data-card', 'on')
      } else if(cardValue3 > cardValue1 && cardValue3 > cardValue2) {
        console.log("hi crd 3 big")
       // card[2].setAttribute('data-card', 'on')
      } else {
        console.log("Match draw")
      }
    }
  }
}

