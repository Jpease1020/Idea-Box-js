function setQuality(){
  thumbsUpIdea();
  thumbsDownIdea();
}

function thumbsUpIdea(){
  $('#idea-index').delegate('.thumbs-up-button', 'click', function() {
    var $ideaId = $(this).closest('.idea').attr('data-id')
    var $status = $(this).parents().siblings('.col-md-2').children('p')
    $.ajax({
      url: 'api/v1/ideas/' + $ideaId,
      type: 'PUT',
      data: { 'id': $ideaId,
    'thumb_action': "thumbs-up"
            },
      success: function(response){
        resetDisplayQuality(response, $status)
        console.log('good')
      }, error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
};
 function thumbsDownIdea(){
   $('#idea-index').delegate('.thumbs-down-button', 'click', function() {
     var $ideaId = $(this).closest('.idea').attr('data-id')
     var $status = $(this).parents().siblings('.col-md-2').children('p')
     $.ajax({
       url: 'api/v1/ideas/' + $ideaId,
       type: 'PUT',
       data: { 'id': $ideaId,
     'thumb_action': "thumbs-down"
             },
       success: function(response){
         resetDisplayQuality(response, $status)
         console.log('good')
       }, error: function(xhr){
         console.log(xhr.responseText)
       }
     })
   })
 }

function resetDisplayQuality(idea, status){
  status.replaceWith('<p>Idea Quality: ' + idea.quality + '</p>')
}
