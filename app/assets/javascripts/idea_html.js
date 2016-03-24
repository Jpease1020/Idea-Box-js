function ideaHtml(idea){
  var html = (
    '<div class="panel panel-default idea" data-id="'+ idea.id +'">' +
      '<div class="panel-heading">' +
        '<div class="container">' +
          '<div class="row">' +
            '<h3 class="panel-title edit-idea">Title: ' +
              '<span contenteditable="true" class="title" data-id="title">' +
                idea.title +
              '</span>' + '</h3><br>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="row">' +
            '<div class="col-sm-2 col-md-2 col-lg-2">' +
              '<p class=' + idea.quality + '>Idea Quality: ' + idea.quality + '</p>' +
            '</div>' +
            '<div class="col-sm-1 col-md-1 col-lg-1">' +
              '<button type="button" class="btn btn-default btn-sm thumbs-up-button">' +
                '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Star' +
              '</button>' +
            '</div>' +
            '<div class="col-sm-1 col-md-1 col-lg-1">' +
              '<button type="button" class="btn btn-default btn-sm thumbs-down-button">' +
                '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Star' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="panel-body">' +
        '<div class="container">' +
          '<div class="row edit-idea">' +
            '<span contenteditable="true" class="body" data-id="body">' +
              idea.body +
            '</span>' +
          '</div><br>' +
          '<div class="row">' +
            '<div class container col-sm-3 col-md-3 col-lg-3>' +
              '<button type="button" class="btn btn-primary btn-sm delete-button">' +
                'Delete Idea' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>');
  return html
}
