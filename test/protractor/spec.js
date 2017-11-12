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
	element.all(by.id("collapseStats").element(by.css("input[type='radio']:checked")).each(function(radio,idx){
		expect(radio.getAttribute('value')).toEqual('6');
	});
  });

	//Wildcard checkbox shows glyph 
  it('should have a checkbox called "Wild Card" which shows a glyphicon when checked', function() {
    element(by.id('wc')).click();
    expect($('[ng-show=statBlock.wildCard]').isDisplayed()).toBeTruthy();
  });

	//Wildcard checkbox adjusts cost
  it('should have a checkbox called "Wild Card" which adjusts cost when checked', function() {
    element(by.id('wc')).click();
    expect($('[ng-show=statBlock.roundedCost()]').toEqual('4 (18.00)');
  });

	//Select a skill, points go up, clear it off, they go back down.
	//Select same skill, points go back up and clear it off, they go back down.

	//maxed out cost is correct
	//min'd out cost is correct
	//unit discount

	//Unit menu:
	//Save
	//Load
	//Delete
	
    //print
	////Check name matches, 
	////check all stat boxes filled.

});
