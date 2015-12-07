var HAND_WEAPONS = [

    {name: 'Dagger / Knife',      damage: 'Str+d4',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 3},
    {name: 'Rapier',              damage: 'Str+d4',    ap: 0,  reach: 0, parry: '+1', twoHanded: false, cost: 6},
    {name: 'Short Sword',         damage: 'Str+d6',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 6},
    {name: 'Long Sword',          damage: 'Str+d8',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 9},
    {name: 'Katana',              damage: 'Str+d8',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 9},
    {name: 'Great Sword',         damage: 'Str+d10',   ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 12},
    {name: 'Two Handed Sword',    damage: 'Str+d12',   ap: 1,  reach: 0, parry: '-1', twoHanded: true,  cost: 14},
    {name: 'Axe',                 damage: 'Str+d6',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 6},
    {name: 'Battle Axe',          damage: 'Str+d8',    ap: 0,  reach: 0, parry: '',   twoHanded: true,  cost: 9},
    {name: 'Great Axe',           damage: 'Str+d10',   ap: 1,  reach: 0, parry: '-1', twoHanded: true,  cost: 11},
    {name: 'Club',                damage: 'Str+d4',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 3},
    {name: 'Large Club',          damage: 'Str+d6',    ap: 0,  reach: 0, parry: '',   twoHanded: false, cost: 6},
    {name: 'Warhammer',           damage: 'Str+d6',    ap: 1,  reach: 0, parry: '-1', twoHanded: true,  cost: 5},
    {name: 'Flail',               damage: 'Str+d6',    ap: 0,  reach: 0, parry: '',   twoHanded: true,  cost: 9,  notes: 'Ignores Shield Parry bonus'},
    {name: 'Maul',                damage: 'Str+d6',    ap: 2,  reach: 0, parry: '-1', twoHanded: true,  cost: 7},
    {name: 'Halberd',             damage: 'Str+d8',    ap: 0,  reach: 1, parry: '',   twoHanded: true,  cost: 11},
    {name: 'Mounted Lance',       damage: 'Str+d8',    ap: 2,  reach: 2, parry: '',   twoHanded: true,  cost: 14, notes: 'AP 2 if charge >= 4”'},
    {name: 'Pike',                damage: 'Str+d8',    ap: 0,  reach: 2, parry: '',   twoHanded: true,  cost: 13},
    {name: 'Staff',               damage: 'Str+d4',    ap: 0,  reach: 1, parry: '+1', twoHanded: true,  cost: 8},
    {name: 'Spear',               damage: 'Str+d6',    ap: 0,  reach: 1, parry: '+1', twoHanded: true,  cost: 11},

    {name: 'Shield, Small',	      damage: 'Str+1',     ap: 0,  reach: 0, parry: '+1',  twoHanded: false, cost: 3},
    {name: 'Shield, Medium',      damage: 'Str+2',     ap: 0,  reach: 0, parry: '+1',  twoHanded: false, cost: 5, notes: 'Armor +2 against ranged shots that hit'},
    {name: 'Shield, Large',       damage: 'Str+3',     ap: 0,  reach: 0, parry: '+2',  twoHanded: false, cost: 8, notes: 'Armor +2 against ranged shots that hit'},

    {name: 'Bayonet',             damage: 'Str+d6',    ap: 1,  reach: 0, parry: '-1', twoHanded: true,  cost: 5,  notes : 'Fitted to rifle'},
    {name: 'Chainsaw',            damage: 'Str+2d6+4', ap: 0,  reach: 0, parry: '',  twoHanded: false, cost: 22,  notes: '1 on the Fighting die hits wielder'},
    {name: 'Molecular knife',     damage: 'Str+2d4+2', ap: 2,  reach: 0, parry: '',  twoHanded: false, cost: 13},
    {name: 'Molecular sword',     damage: 'Str+2d8+2', ap: 4,  reach: 0, parry: '',  twoHanded: false, cost: 23},
    {name: 'Laser sword',         damage: 'Str+2d6+8', ap: 12, reach: 0, parry: '',  twoHanded: false, cost: 54},
    {name: 'Donga’s Tree Club',   damage: 'Str+d10',   ap: 0,  reach: 3, parry: '',  twoHanded: false, cost: 33}
];