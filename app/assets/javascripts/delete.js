function deleteIdea(){
  $('#idea-index').delegate('#delete-button', 'click', function() {
    var ideaId = $(this).closest('.row').siblings('.container .row').attr('data-id')
    ideaElement = $(this).closest('.panel')
    $.ajax({
      url: '/api/v1/ideas/' + ideaId + '',
      type: 'DELETE',
      data: {
        'id': ideaId},
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
