Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.suscribe('Report');}
});

Router.route('/', {name: 'ReportList'});

Router.route('/Reporte', {
  name: 'NewReport'
});

