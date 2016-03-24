function getIdeas(){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      displayIdeas(response);
    }, error: function(xhr) {
      console.log(xhr.responseText)
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
  if (idea.body.length > 100){
    var choppedBody = " " + idea.body.slice(0,102);
    for (i = choppedBody.length - 1; choppedBody[i] != " "; i--){
        choppedBody = choppedBody.slice(0, i)
    }
    return choppedBody.slice(0, -1) + "..."
  } else {
    return idea.body
  }
}
