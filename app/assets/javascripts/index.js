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
      '<div class="panel panel-default idea" data-id="'+ idea.id +'">' +
        '<div class="panel-heading">' +
          '<div class="container">' +
            '<div class="row">' +
              '<h3 class="panel-title">Title: ' + idea.title + '</h3><br>' +
            '</div>' +
          '</div>' +
          '<div class="container">' +
            '<div class="row">' +
              '<div class="col-sm-2 col-md-2 col-lg-2>">' +
                '<p>Idea Quality: ' + idea.quality + '</p>' +
              '</div>' +
              '<div class="col-sm-1 col-md-1 col-lg-1">' +
                '<button type="button" class="btn btn-default btn-sm thumbs-up-button">' +
                  '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Star' +
                '</button>' +
              '</div>' +
              '<div class="col-sm-1 col-md-1 col-lg-1">' +
                '<button type="button" class="btn btn-default btn-sm thumbs-down-button">' +
                  '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Star' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="panel-body">' +
          '<div class="container">' +
            '<div class="row">' +
              idea.body +
            '</div><br>' +
            '<div class="row">' +
              '<div class container col-sm-3 col-md-3 col-lg-3>' +
                '<button type="button" class="btn btn-primary btn-sm delete-button">' +
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
