function filterByTags(){
  $('.tags').delegate('li', 'click', function(){
    var tag = ($(this).text())
    var tagParams = { 'tag': tag }
    $.ajax({
      url: 'api/v1/tags',
      type: 'GET',
      data: tagParams,
      success: function(response){
        $('.idea').remove()
        debugger
        displayIdeas(response)
      }, error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
};
