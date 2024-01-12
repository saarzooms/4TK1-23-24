//post array
var posts = [];
// to handle add post button click
function addPost() {
  // fetch all details and store in variables
  var title = document.getElementById("txtTitle").value;
  var author = document.getElementById("txtAuthor").value;
  var img = document.getElementById("txtImage").value;
  var description = document.getElementById("txtDescription").value;

  // clear data of textfields
  document.getElementById("txtTitle").value = "";
  document.getElementById("txtAuthor").value = "";
  document.getElementById("txtImage").value = "";
  document.getElementById("txtDescription").value = "";

  posts = [{ title, author, img, description }, ...posts];
  var html = "";
  posts.forEach((post) => {
    html =
      '<div class="title">' +
      post.title +
      "</div>" +
      '<div class="author">' +
      post.author +
      "</div>" +
      "<img src = " +
      post.img +
      ' alt="post image" height="100px"/>' +
      '<div class="description">' +
      post.description +
      "</div>" +
      html;
  });
  document.getElementById("post_container").innerHTML = html;
}
