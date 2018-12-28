function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var postTitle = document.getElementById('postTitle').value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById('postBody').value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comment = document.getElementById('commentBody').value;
  var commenter = document.getElementById('commentAuthor').value;
  var commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText});
}
