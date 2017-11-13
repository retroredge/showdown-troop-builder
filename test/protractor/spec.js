// spec.js
describe('Showdown Troop Builder', function() {
  beforeEach(function() {
	browser.get('http://127.0.0.1:8080/');
	//browser.get('http://retroredge.github.io/showdown-troop-builder/');
  });

  it('should have a title of "Showdown Troop Builder"', function() {
	expect(browser.getTitle()).toEqual('Showdown Troop Builder');
  });

  it('should have a box called Attributes with default values of d6', function() {
	//collapseStats contains Attributes which should default to d6
	element.all(by.id("collapseStats")).all(by.css("input[type='radio']:checked")).each(function(radio,idx){
		expect(radio.getAttribute('value')).toEqual('6');
	});
  });

  it('should have a checkbox called "Wild Card" which shows a glyphicon when checked', function() {
	element(by.id('wc')).click();
	expect($('[ng-show="statBlock.wildCard"]').isDisplayed()).toBeTruthy();
  });

  it('should have a stat display for cost which increases when checkbox called "Wild Card" is checked', function() {
	var oldCost = '';
	element(by.binding('statBlock.roundedCost()')).getText().then(function(text){
		console.log('cost at first: '+text);
		oldCost = text;
	});
	element(by.id('wc')).click();
	expect(element(by.binding('statBlock.roundedCost()')).getText()).toBeGreaterThan('4 (18.00)','default of 4 should increase because wildcards are hardier and luckier.');
  });

  it('should arrive at 37(163.00) cost for a Conan archetype', function() {
	element(by.model('statBlock.name')).sendKeys('Conan the Barbarian');
	element(by.id('wc')).click();
	//element(by.binding('statBlock.spirit.value')).click();
	element(by.id('AgilityD8Radios')).click();
	element(by.id('StrengthD10Radios')).click();
	element(by.id('VigorD8Radios')).click();

	element.all(by.css("a[href='#collapseSkills']")).click();
	element(by.id('FightingD10Radios')).click();
	element(by.id('ThrowingD6Radios')).click();

	//TODO: brawny, combat reflexes, tough as nails, hard to kill, mighty blow, nerves of steel
	element.all(by.css("a[href='#collapseEdges']")).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Brawny';
		});
	}).get(0).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Combat Reflexes';
		});
	}).get(0).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Hard to Kill';
		});
	}).get(0).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Tough as Nails';
		});
	}).get(0).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Mighty Blow';
		});
	}).get(0).click();
	element.all(by.repeater('edge in edges')).filter(function(edge){
		return edge.getText().then(function(lbl){
			return lbl==='Nerves of Steel';
		});
	}).get(0).click();
		
	element.all(by.css("a[href='#collapseHandWeapons']")).click();
	element.all(by.repeater('handWeapon in handWeapons')).filter(function(weapon){
		return weapon.getText().then(function(lbl){
			return lbl.substr(0,11) == 'Great Sword';
		});
	}).get(0).click();

	// not a numerical matcher// expect(element(by.binding('statBlock.roundedCost()')).getText()).toBeGreaterThan('1004 (18.00)');
	element(by.binding('statBlock.roundedCost()')).getText().then(function(text){
		console.log('Cost after Conanification: '+text);
	});
	expect(element(by.binding('statBlock.roundedCost()')).getText()).toMatch(/37/);
  });

	//Select a skill, points go up, clear it off, they go back down.
	//Select same skill, points go back up and clear it off, they go back down.

	//maxed out cost is correct
	//min'd out cost is correct
	//unit discount

	//Unit menu:
		//element(by.model('statBlock.name')).sendKeys('Conan the Barbarian');
	//Save
		//confirm name shows up AND localstorage has a new entry
	//Load
	//Delete
	
	//print
	////Check name matches, 
	////check all stat boxes filled.

});
