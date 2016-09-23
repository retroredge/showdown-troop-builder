app.controller('mainController', function($scope) {

    $scope.statBlock = {
        name: '',
        wildCard: false,
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
        }

    };

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

});
