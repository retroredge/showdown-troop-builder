var HINDRANCES = [
	{name: 'All Thumbs', cost: -1, desc: '-2 Repair; a trait roll of 1 when using any sort of device causes a malfunction (or loss of action if no malfunction result is specified)'},
	{name: 'Anemic', cost: -1, desc: '-2 Vigor to resist sickness, disease, poison, environment'},
	{name: 'Bad Eyes', cost: -1, desc: '-2 to attack or notice something more than 5" distant'},
	{name: 'Bad Luck', cost: -1, desc: 'The Wild Card starts play with only one dedicated benny rather than two'},
	{name: 'Blind', cost: -1, desc: '-6 to all actions that rely on vision'},
	{name: 'Doubting Thomas', cost: -1, desc: 'Character does not believe in the supernatural; -2 to Fear tests'},
	{name: 'Lame', cost: -1, desc: '-2 Pace and running die is a d4', affectedStat: 'pace', affectValue: -2},
	{name: 'Obese', cost: -1, desc: '+1 Toughness, -1 Pace, d4 running die', affectedStat: 'pace', affectValue: -1},
	{name: 'One Arm', cost: -1, desc: '-4 to tasks requiring two arms, such as Fighting'},
	{name: 'One Eye', cost: -1, desc: '-2 to Shooting and Throwing rolls (assuming the fiure has a ranged attack)'},
	{name: 'One Leg', cost: -1, desc: 'Pace -2, d4 running die, -2 to rolls requiring mobility, -2 to swimming', affectedStat: 'pace', affectValue: -2},
	{name: 'Phobia', cost: -1, desc: '-2 to all Trait tests when within 6" of the source of the phobia, but only if the source is present in a particular game'},
	{name: 'Small', cost: -1, desc: '-1 Toughness', affectedStat: 'toughness', affectValue: -1},
	{name: 'Yellow', cost: -1, desc: 'The character is cowardly and suffers -2 to Fear checks'}
];

