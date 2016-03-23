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
    // debugger
    // if(idea.body){
    //   idea.body = truncateIdeaBody(idea)
    //   return idea
    // } else {
    //   idea.body = ""
    //   return idea
    // }
    $('#idea-index').append(ideaHtml(idea))
  });
}

//this method below called truncateIdeaBody is what truncates the body of the idea.....it was working just fine.
//i tried to push to heroku and it broke with an infinate loop somewhere
// I though i needed to account for the title or body of an idea being present and started to impliment that
// in the displayIdeas method above but adding the if statement but when I uncomment out the if statement then
// nothing gets displayed at all
// the idea comes to the displayIdeas funtion from the successfull response which comes back from the controller

// function truncateIdeaBody(idea){
//   var choppedBody = idea.body.slice(0,101);
//   for (i = choppedBody.length - 1; choppedBody[i] != " "; i--){
//         choppedBody = choppedBody.slice(0, i)
//   }
//   return choppedBody.slice(0, -1) + "..."
// }
