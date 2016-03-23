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
    idea.body = truncateIdeaBody(idea)
    $('#idea-index').append(ideaHtml(idea))
  });
}

function truncateIdeaBody(idea){
  var choppedBody = idea.body.slice(0,101);
  for (i = choppedBody.length - 1; choppedBody[i] != " "; i--){
        choppedBody = choppedBody.slice(0, i)
  }
  return choppedBody
}
