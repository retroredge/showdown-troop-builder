app.controller('mainController', function($scope) {

    $scope.statBlock = {
        name: '',
        wildCard: false,
        wildCardIconIndex: 0,
        agility: { name: 'Agility', value: '6'},
        smarts: { name: 'Smarts', value: '6'},
        spirit: { name: 'Spirit', value: '6'},
        strength: { name: 'Strength', value: '6'},
        vigor: { name: 'Vigor', value: '6'},

        skills: [
            {name: 'Arcane', value: ''},
            {name: 'Boating', value: ''},
            {name: 'Climbing', value: ''},
            {name: 'Driving', value: ''},
            {name: 'Fighting', value: ''},
            {name: 'Intimidation', value: ''},
            {name: 'Piloting', value: ''},
            {name: 'Notice', value: ''},
            {name: 'Riding', value: ''},
            {name: 'Shooting', value: ''},
            {name: 'Swimming', value: ''},
            {name: 'Taunt', value: ''},
            {name: 'Throwing', value: ''}
        ],

        strengthBonus: 0,
        pace: 6,

        paceTotal: function() {
            return this.pace +
                   this.abilityAdditions(this.edges, 'pace') +
                   this.abilityAdditions(this.specialAbilities, 'pace');
        },

        parry: function() {
            var fightingSkillIndex = 4;
            return (this.skills[fightingSkillIndex].value / 2) + 2 +
                    this.abilityAdditions(this.edges, 'parry');
        },

        size: 0,

        toughnessTotal: function() {
            return (this.vigor.value / 2) + 2 +
                    this.armor() +
                    this.size +
                    this.abilityAdditions(this.edges, 'toughness') +
                    this.abilityAdditions(this.specialAbilities, 'toughness');
        },

        abilityAdditions: function(abilities, affectedStat) {
            var edgeAdditions = 0;
            abilities.forEach(function(edge) {
                var edge = angular.fromJson(edge);
                if (edge.affectedStat === affectedStat) {
                    edgeAdditions += edge.affectValue;
                }
            });
            return edgeAdditions;
        },

        armor: function() {
            var armorTotal = 0;
            this.armors.forEach(function(itemString) {
                var item = angular.fromJson(itemString);
                armorTotal = armorTotal + item.armor;
            });
            return armorTotal;
        },

        roundedCost : function() {
            return Math.round(this.cost() / 5);
        },

        cost: function() {
            return (((this.agility.value - 4) +
                     (this.smarts.value - 4) +
                     (this.spirit.value - 2) +
                     (this.strength.value - 2) +
                     (this.strengthBonus) +
                     (((this.vigor.value / 2) - 1) * 3) +
                     (this.pace - 6) +
                     this.costOfSkills() +
                     this.costOf(this.edges) +
                     this.costOf(this.specialAbilities) +
                     this.costOf(this.miscAbilities) +
                     (this.costOf(this.armors) * 5) +
                     this.costOfWeapons(this.handWeapons.concat(this.rangedWeapons)) +
                     (this.size * 10))
                    * (this.wildCard ? 2:1)).toFixed(2);
        },

        costOf: function(items) {
            var sum = 0;
            items.forEach(function(itemString) {
              var item = angular.fromJson(itemString);
              sum = sum + item.cost;
            });

            return sum;
        },

        costOfWeapons: function(items) {
            var first = true;
            var sum = 0;
            items.forEach(function(itemString) {
              var item = angular.fromJson(itemString);
              if (first) {
                first = false;
                sum = sum + item.cost;
              } else {
                sum = sum + (item.cost/3);
              }
            });

            return sum;
        },

        costOfSkills: function() {
            var first = true;
            var sum = 0;
            this.skills.forEach(function(itemString) {
              var item = angular.fromJson(itemString);
              if (item.value != "") {
                  if (first) {
                    first = false;
                    sum = sum + (((item.value / 2) -1) * 3);
                  } else {
                    sum = sum + (((item.value / 2) -1) * 3) / 2;
                  }
              }
            });

            return sum;
        },

        edges : [],
        specialAbilities : [],
        miscAbilities : [],
        armors: [],
        handWeapons: [],
        rangedWeapons: [],

        getObjectFromJsonString: function(itemString) {
            var item = angular.fromJson(itemString);
            return item;
        },


        datakeyName: function() {
            //This defines the keynames as they appear in localStorage, so you only have to change it 
            //in one place. Note that changing the prefix would make stored characters "disappear".
            //Might be used in multiple places. At least localStorage keys and download filename hints.
            return 'ShowdownTroopBuilder.Unit.' + (this.name ? this.name.replace(/\W/g,'') : 'Unnamed');
        }

    };

    $scope.wcGlyphiconSet = [
      'asterisk','plus','cloud','heart','star','star-empty','th','remove','off','cog','flag','book','bookmark','tint','move','plus-sign','remove-sign','screenshot','remove-circle','leaf','fire','eye-open','plane','bell','certificate','wrench','fullscreen','heart-empty','link','unchecked','flash','record','send','tower'
		/* Apparently not available in currently utilzed version of Boostrap:
		 ,'conifer','cd','alert','king','queen','pawn','bishop','knight','apple','hourglass','grain','triangle-top' */
    ];

    $scope.exportUri = '';
    $scope.unitListing = [];

    // Reference Data
    $scope.edges = EDGES;
    $scope.specialAbilities = SPECIAL_ABILITIES;
    $scope.armors = ARMORS;
    $scope.handWeapons = HAND_WEAPONS;
    $scope.rangedWeapons = RANGED_WEAPONS;
    $scope.miscAbilities = MISC_ABILITIES;

    $scope.itemHasValue = function( ) {
      return function( item ) {
        return item.value != '';
      };
    };

    //Apparently even a shallow watch on arrays is not the default. Nothing additional to do (hence the empty function body).
    //We just want Angular to watch it so that we get the dynamic binding reacting automagically for unitListing & modal too.
    $scope.$watchCollection('unitListing',function(newList,oldList){   }); 
      
    $scope.wildcardIconCycle = function() {
        //Just cycle to the next icon. The icons are the "built-in" Bootstrap icons, selected for proper flavor.
        this.statBlock.wildCardIconIndex = (this.statBlock.wildCardIconIndex + 1) % this.wcGlyphiconSet.length;
    };

    $scope.persist = function () {
		localStorage[$scope.statBlock.datakeyName()] = angular.toJson($scope.statBlock);
	};

    $scope.listPersistent = function () {
        //Warning: do not make this a source of an ng-repeat binding directly. Since it is "dynamic", Angular will helpfully rerere(etc)-evaluate
        var unitList = [];
        for (var i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).match(/^ShowdownTroopBuilder\.Unit\./i)) {
				var unitStatBlock = angular.fromJson(localStorage.getItem(localStorage.key(i)));
				unitList.push({name:unitStatBlock.name,datakeyName:localStorage.key(i)});
			}
        }
        return unitList;
	};

    $scope.loadUnit = function (datakeyName) {
        var unitStatBlock = angular.fromJson(localStorage.getItem(datakeyName));
        unitStatBlock && Object.assign($scope.statBlock, unitStatBlock); 
	};

    $scope.deleteUnit = function (datakeyName) {
        localStorage.removeItem(datakeyName);
		for(var i = 0; i < $scope.unitListing.length; i++) {
            if ($scope.unitListing[i].datakeyName == datakeyName) {
               $scope.unitListing.splice(i,1);
            }
        }
	};

    $scope.generateExport = function () {
		$scope.exportUri = 'data:application/json,' +  angular.toJson($scope.statBlock);
	};

    $scope.importUnit = function (pickerEvent) {  //Meant to be bound to a file input control change event.
        console.log(pickerEvent.target.files[0]);
        var fImportFile = new FileReader();
        if (!fImportFile) {
            console.log("Sorry, cannot detect the needed FileReader object. Disabling import options.");
            ///TODO: disable the menu entry.
        } else {
            ///TODO: filetype checks
            fImportFile.onload = function(evt){
                ///TODO: sanity check (regex, length)
                var unitStatBlock = angular.fromJson(evt.target.result);
                ///TODO: more sanity checks on the instantiated object?
                unitStatBlock && Object.assign($scope.statBlock, unitStatBlock); 
                //Since FileAPI is sufficiently nonstandard, and thus not very included in Angular core, we have some manual duties here.
                $scope.$apply();  //Just to get view to refresh after "non-standard" activity.
            };
            fImportFile.readAsText(pickerEvent.target.files[0]);
        }
    };

});
