function sortByQuality(){
  $('.sorter').click(function(){
    $('.sort').append("<p class='counter'></p>")
    var counter = $('.counter').size()
    var geniusIdeas = $('.genius').closest('.idea')
    var plausibleIdeas = $('.plausible').closest('.idea')
    var swillIdeas = $('.swill').closest('.idea')
    debugger
    if(counter % 2 == 0){
      $('.idea').remove()
      $('#idea-index').append([geniusIdeas, plausibleIdeas, swillIdeas])
    } else if(counter % 2 != 0){
      $('.idea').remove()
      $('#idea-index').append([swillIdeas, plausibleIdeas, geniusIdeas])
    }
  })
}
