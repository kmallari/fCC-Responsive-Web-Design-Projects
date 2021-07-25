function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}