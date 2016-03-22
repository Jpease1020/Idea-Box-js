function deleteIdea(){
  $('#idea-index').delegate('.delete-button', 'click', function() {
    var ideaId = $(this).closest('.idea').attr('data-id')
    var ideaElement = $(this).closest('.idea')
    $.ajax({
      url: '/api/v1/ideas/' + ideaId,
      type: 'DELETE',
      data: { 'id': ideaId },
      success: function(response){
        removeIdea(ideaElement)
      }, error: function(xhr) {
      }
    })
  })
}

function removeIdea(idea){
  idea.remove()
}
