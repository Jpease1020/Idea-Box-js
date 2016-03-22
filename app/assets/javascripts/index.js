function getIdeas(){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      displayIdeas(response);
    }, error: function(xhr) {
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
          '<div class="container col-sm-12 col-md-12 col-lg-12">' +
            '<div class="container row" data-id="'+ idea.id +'">' +
              idea.body +
            '</div><br>' +
            '<div class="row">' +
              '<div class container col-sm-3 col-md-3 col-lg-3>' +
                '<button type="button" class="btn btn-primary btn-sm" id="delete-button">' +
                  'Delete Idea' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
      )
  });
}
