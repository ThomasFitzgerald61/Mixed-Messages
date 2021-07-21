//welcome to my first coding project. I am putting together a mixed message project about Japanese culture and language.

const submit = () => {
test
const word = (
    "Yes hai",
    "No iie", 
    "Hello konnichiwa", 
    "Goodbye ja ne", 
    "Thank you arigato", 
    "Im Sorry gomen nasai",
    "Excuse Me sumimasen"
)
const facts = (
    "In Japan, black cats are considered good luck charms or omens of good luck.",
    "In Japan, Kentucky Fried Chicken is a typical Christmas Eve feast.",
    "The biggest Japanese community outside of Japan is in Brazil.",
    "Japan has more than 3,000 McDonald’s restaurants, the largest number in any country outside the U.S.",
    "Japan consists of over 6,800 islands.",
    "The green traffic light in Japan is called ao shingō, or “blue.”"
)
const grammar = (
    "In the native tongue, it’s actually called ‘Nihongo’",
    "There are no plurals in Japanese",
    "There are also no articles",
    "You can make sentences using only verbs",
    "Intonation does matter"
)
const culture = (
    "Omiyage Are More Than Souvenirs",
    "Christmas is A Romantic Holiday",
    "There Are Cues For Your Shoes",
    "It's Rude To Eat Or Drink While Walking",
    "Basball Is Extremely Popular",
    "Chopstick Positions Have Meaning",
    "The First Geisha Were Men"
)
//generate a random number between 0 and number of strings
let randomIndex = Math.floor(Math.random() * word.length);
//return string of random index
return word[randomIndex];
}