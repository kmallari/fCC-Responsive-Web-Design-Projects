function openNav() {
    document.getElementById("my-sidebar").style.width = "26em";
}

function closeNav() {
    document.getElementById("my-sidebar").style.width = "0";
}

$(window).resize(function() {
    //resize just happened, pixels changed
    if (window.screen.width > 1200) {
        openNav();
        console.log('sup')
    }
  });