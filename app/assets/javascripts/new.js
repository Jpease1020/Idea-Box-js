function saveNewIdea(){
  $('#submit-new-idea').on('click', function(){
    var ideaTitle = $('#new-idea-title').val();
    var ideaBody  = $('#new-idea-body').val();
    var tags = $('.tagger input').val()
    $.ajax({
      url: '/api/v1/ideas',
      type: 'POST',
      data: {
        'title': ideaTitle,
        'body': ideaBody,
        'tags': tags
      },
      success: function(response){
        $('#new-idea-title').val("");
        $('#new-idea-body').val("");
        $('.tagger input').val("")
        displayNewIdea(response);
      }, error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
}

function displayNewIdea(idea){
  idea.body = truncateIdeaBody(idea)
  $('#idea-index').prepend(ideaHtml(idea))
}
