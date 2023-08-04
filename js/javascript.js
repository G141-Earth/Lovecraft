function setActiveStyleSheet(title) {
  var i, a, inv = (title == 'normal' ? 'wcag' : 'normal');
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
  document.getElementById(inv).style.display='list-item';
  document.getElementById(title).style.display='none';
}

function bluring(obj)
{
	obj.style.filter="none";
}