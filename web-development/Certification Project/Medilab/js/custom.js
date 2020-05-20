




(function($) {
  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);


$( document ).ready(function() {
  $('.carousel').carousel();
       google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['United States', 1576007],
            ['Russia', 308705],
            ['Spain', 278803],
            ['Brazil', 275087],
            ['United Kingdom', 248818],
            ['Italy', 226699],
            ['France', 180809],
            ['Germany', 178170],
            ['Iran', 126949],
            ['India', 111602]
          ]);

          var custitle = "Here's a look at the 10 most affected countries with highest number of COVID-19 cases";
          var options = {
            title: custitle,
            is3D: true,
            width:'100%',
            height:500,
            titleFontSize:30,
            legend: { position: "center" }
          };
          

          var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
          chart.draw(data, options);
        }
      console.log( "ready!" );
});