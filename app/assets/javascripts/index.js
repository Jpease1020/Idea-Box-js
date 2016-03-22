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
