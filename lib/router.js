Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('Report');}
});

Router.route('/', function () {
  this.render('ReportList');
});


Router.route('/Reporte', {
  name: 'NewReport'
});

