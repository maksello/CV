function spoiler() {
  var ele = document.getElementById('content');
  var text = document.getElementById('link');
  if (ele.style.display == 'block') {
    ele.style.display = 'none';
    text.innerHTML = 'Show';
  } else {
    ele.style.display = 'block';
    text.innerHTML = 'Hide';
  }
}
