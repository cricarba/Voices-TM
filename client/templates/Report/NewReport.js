Template.NewReport.events({
  'submit form': function(e) {
    e.preventDefault();

    var reporte = {
      Reporte: $(e.target).find('[name=Reporte]').val(),   
      Estacion : "Quirigua",
      Hora : "19:25",
    };

    Report.insert(reporte);
    Router.go('/');
  }
});