function crop() {
  let url = document.getElementById("url").value;
  let H = document.getElementById("H").value;
  let W = document.getElementById("W").value;

  let lastindex = url.lastIndexOf("/");
  let lastpart = url.substring(lastindex);
  let new_url = "https://source.unsplash.com" + lastpart + "/" + H + "x" + W;

  alert(new_url);
}
