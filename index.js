function createPost() {
  var postTitle = document.getElementById('postTitle').value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById('postBody').value;

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
}

function postComment() {
  let comment = document.getElementById('commentBody').value;
  let commenter = document.getElementById('commentAuthor').value;
  let allComments = document.getElementById('comments');

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
}
