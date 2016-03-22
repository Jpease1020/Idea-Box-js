function editIdeas(){
  $('#idea-index').delegate('.idea-body', 'blur', function(){
    alert("This input field has lost its focus.");
    });
}
