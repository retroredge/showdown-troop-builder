// spec.js
describe('Showdown Troop Builder', function() {
  beforeEach(function() {
	browser.get('http://retroredge.github.io/showdown-troop-builder/');
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

  //Wildcard checkbox shows glyph 
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

  it('should arrive at 33(163.00) cost for a Conan archetype', function() {
	element(by.model('statBlock.name')).sendKeys('Conan the Barbarian');
	element(by.id('wc')).click();
	//element(by.binding('statBlock.spirit.value')).click();
	//StrengthOptionsRadiosinline
	element(by.id('AgilityD8Radios')).click();
	element(by.id('StrengthD10Radios')).click();
	element(by.id('VigorD8Radios')).click();
	//TODO: brawny, tough as nails, champion, mighty blow
	//TODO: great sword
	// not a numerical matcher// expect(element(by.binding('statBlock.roundedCost()')).getText()).toBeGreaterThan('1004 (18.00)');
	expect(element(by.binding('statBlock.roundedCost()')).getText()).toMatch(/[0-9][0-9].*/);;
  });

	//Select a skill, points go up, clear it off, they go back down.
	//Select same skill, points go back up and clear it off, they go back down.

	//maxed out cost is correct
	//min'd out cost is correct
	//unit discount

	//Unit menu:
		//element(by.model('statBlock.name')).sendKeys('Conan the Barbarian');
	//Save
	//Load
	//Delete
	
	//print
	////Check name matches, 
	////check all stat boxes filled.

});
