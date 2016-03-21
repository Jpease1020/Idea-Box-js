// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  getIdeas();
});

function getIdeas(){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      displayIdeas(response);
      console.log(response)
    }, error: function(xhr) {
      console.log("uhh ohh!!!")
    }
  })
}

function displayIdeas(ideas){
  ideas.forEach(function(idea){
    $('#idea-index').append(
      '<div class="panel panel-default">' +
      '<div class="panel-heading">' +
        '<h3 class="panel-title">Title: ' + idea.title + '</h3><br>' +
        '<p>Idea Quality: ' + idea.quality + '</p>' +
      '</div>' +
      '<div class="panel-body">' +
        idea.body +
      '</div>' +
    '</div>'
    )
  });
}
