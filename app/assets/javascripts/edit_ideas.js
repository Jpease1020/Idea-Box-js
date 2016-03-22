function editIdeas(){
  $('#idea-index').delegate('.edit-idea', 'blur', function(){
    var $ideaDataId = $(this).children('span').attr('data-id')
    var $ideaId = $(this).closest('.idea').attr('data-id')
    var $ideaNewData = $(this).children('span').text()
debugger
    if($ideaDataId == "title"){
      ideaParams = { 'title': $ideaNewData }
    } else if(ideaDataId == "body"){
      ideaParams = { 'body': $ideaNewData }
    }
    $.ajax({
      url: 'api/v1/ideas/' + $ideaId,
      type: 'PUT',
      data: ideaParams,
      success: function(response){
        console.log('good')
      }, error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
}
