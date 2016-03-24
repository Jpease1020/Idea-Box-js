function setQuality(){
  thumbsUpIdea()
  thumbsDownIdea();
}

function qualityChange(button, action){
  $('#idea-index').delegate(button, 'click', function() {
    var $ideaId = $(this).closest('.idea').attr('data-id')
    var $status = $(this).parents().siblings('.col-md-2').children('p')
    $.ajax({
      url: 'api/v1/ideas/' + $ideaId,
      type: 'PUT',
      data: { 'id': $ideaId,
    'thumb_action': action
            },
      success: function(response){
        resetDisplayQuality(response, $status)
      }, error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
};

function thumbsUpIdea(){
  qualityChange('.thumbs-up-button', "thumbs-up")
};

 function thumbsDownIdea(){
   qualityChange('.thumbs-down-button', "thumbs-down")
 }

function resetDisplayQuality(idea, status){
  status.replaceWith('<p>Idea Quality: ' + idea.quality + '</p>')
}
