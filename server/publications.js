Meteor.publish('Reports', function() {
          return Report.find({});
});