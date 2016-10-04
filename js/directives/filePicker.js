//Supporting AngularJS components for the TroopBuilder Single-Page-Application

app.directive('filePicker', function() {
  //client-side only consumption of local files. Particularly Unit export files.
  //Solution adapted from one provided by sqren via http://stackoverflow.com/a/19647381/537243
  //IE9 does not support FormData so you cannot really get the file object from the change event.
  //Also, the label's automatically click-listening is from https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
  return {
    restrict: 'E',
    template: '<span> <input type="file" id="{{id}}picker" accept="{{extensionFilter}}" style="display:none;"/> <label for="{{id}}picker">{{labelText}}</label> </span>', //invisi-display the input and proxy-push the button via events? or CSS style the button to seem like a menu entry?
    replace: true,
    scope: {
        labelText: '@labelText',
        extensionFilter: '@extensionFilter',
        onChangeHandler: '@onChangeHandler',
        id: '@id'
    },
    link: function (scope,element,attrs) {
      var onChangeHandler = scope.$parent.$eval(attrs.onChangeHandler);
      element.find("input").bind('change', onChangeHandler);
    }
  };
});

