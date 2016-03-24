function searchIdeas(){
  $('#idea-searcher').on('keyup', function(){
    var inputText = $(this).children('input').val().toLowerCase();
    var ideaElements = $('.idea')
    var hideIdeas = ideaElements.filter(function(){
      ideaBodyAndText = $(this).find(".title").text().toLowerCase() +
          $(this).find(".body").text().toLowerCase()
      return !(ideaBodyAndText.includes(inputText))
    })
    // $('.idea').addClass('hidden')
    hideIdeas.addClass('hidden')
  })
}
