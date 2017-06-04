
function getlink(url) {
  $.ajaxSetup ({
      cache: false
  });
  var loadUrl = "/get?urldata="+url;
    $("#result").load(loadUrl);
    document.getElementById('inputUrl').value='';
    //document.getElementById("inputUrl").innerHTML = '';
}
window.onload = function() {
  document.getElementById("inputUrl").focus();
};
