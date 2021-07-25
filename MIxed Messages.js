//welcome to my first coding project. I am putting together a mixed message project about Japanese culture and language.//

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

const information = {
  newWords: ["Yes はい", "No いいえ", "Hello こんにちは", "Goodbye じゃね", 'Thank you ありがとう', "I’m Sorry ごめんなさい", "Excuse me すみません"],

  facts: ['In Japan, black cats are considered good luck charms or omens of good luck.', 'In Japan, Kentucky Fried Chicken is a typical Christmas Eve feast.Madrid', 'The biggest Japanese community outside of Japan is in Brazil.', 'Japan has more than 3,000 McDonald’s restaurants, the largest number in any country outside the U.S.', ' Japan consists of over 6,800 islands.', 'The green traffic light in Japan is called ao shingō, or “blue.”',
        ],

  grammar: ['In the native tongue, it’s actually called ‘Nihongo’', 'There are no plurals in Japanese.', 'There are also no articles', 'You can make sentences using only verbs', 'Intonation does matter',],

  culture: ['Omiyage Are More Than Souvenirs', 'Christmas Is A Romantic Holiday', 'There Are Cues For Your Shoes', 'It’s Rude To Eat Or Drink While Walking', 'Baseball Is Extremely Popular', 'Chopstick Positions Have Meaning', 'The First Geisha Were Men',]
}

let randomFact = []

for(let item in information) {
  let optionIdx = generateRandomNumber(information[item].length)

  switch(item) {
    case 'newWords':
      randomFact.push(`New word- ${information[item][optionIdx]}.`)
      break
    case 'facts':
      randomFact.push(`Did you know ${information[item][optionIdx]}.`)
      break
    case 'grammar':
      randomFact.push(`Did you know ${information[item][optionIdx]}.`)
      break
      case 'culture':
        randomFact.push(`Did you knowa ${information[item][optionIdx]}.`)
        break
    default:
      nextFuture.push('Error!')
  }
}

function formatFuture(future) {

  const formatted = randomFact.join('\n')
  console.log(formatted)
}

formatFuture(randomFact);