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
    $('#idea-index').append(ideaHtml(idea))
  });
}
