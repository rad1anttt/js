//Задание 1
var randomBodyParts = ["волосы", "зубы", "уши"];
var randomAdjectives = ["лысая","тупая","вонючая"];
var randomWords = ["обезьяна","крыса","овца"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() *3)];
var randomWord = randomWords[Math.floor(Math.random() *3)];
var randomInsult = "1)У тебя " + randomBodyPart + " словно " + 
randomAdjective + " " + randomWord + "!!!";
document.write(randomInsult);

//Задание 2
var randomBodyParts = ["волосы", "зубы", "уши"];
var randomAdjectives = ["лысые","тупые","вонючие"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() *3)];
var randomBodyPartsAnimal = ["нос","подмышка","башка"];
var randomAnimals = ["макаки", "выдры", "крысы"]
var randomBodyPartAnimal = randomBodyPartsAnimal[Math.floor(Math.random() *3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() *3)];
var randomCoolInsult = " 2)У тебя " + randomBodyPart + " еще более " + randomAdjective + " , чем " + randomBodyPartAnimal + " у " + randomAnimal;
document.write(randomCoolInsult);

//Задание 3
var joinrandomInsult = [" 3)У тебя", randomBodyPart, "еще более", randomAdjective,",чем", randomBodyPartAnimal, "у", randomAnimal].join(" ");
document.write(joinrandomInsult)

//Задание 4 
var joinmassive = [3, 2, 1]
var string = [" 4)", joinmassive[0], "больше, чем ", joinmassive[1], " больше, чем ", joinmassive[2] ].join(" ")
document.write(string)