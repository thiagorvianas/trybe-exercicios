let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}


player['fullname'] = player.name + " " + player.lastName;

console.log("A jogadora " + player.fullname + " tem " + player.age + " anos de idade.");

console.log("A jogadora " + player.fullname + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log('A jogadora ' + player.name + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');