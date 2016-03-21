$(document).ready(function(){
  getIdeas();
});

function getIdeas(){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      console.log(response)
    }, error: function(xhr) {
      console.log("uhh ohh!!!")
    }
  })
}
