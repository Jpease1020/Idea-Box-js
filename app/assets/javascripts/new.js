function saveNewIdea(){
  $('#submit-new-idea').on('click', function(){
    var ideaTitle = $('#new-idea-title').val();
    var ideaBody  = $('#new-idea-body').val();
    $.ajax({
      url: '/api/v1/ideas',
      type: 'POST',
      data: {
        'ideaTitle': ideaTitle,
        'ideaBody': ideaBody
      },
      success: function(response){
        displayNewIdea(response);
        console.log("you got a new one pal")
      }, error: function(xhr) {
        console.log("new idea was not created")
      }
    })
  })
}

function displayNewIdea(data){
  var idea = data
  $('#idea-index').prepend('<div class="panel panel-default">' +
  '<div class="panel-heading">' +
    '<h3 class="panel-title">Title: ' + idea.title + '</h3><br>' +
    '<p>Idea Quality: ' + idea.quality + '</p>' +
  '</div>' +
  '<div class="panel-body">' +
    idea.body +
  '</div>' +
'</div>')
}
