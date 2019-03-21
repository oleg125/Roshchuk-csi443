
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var greeting = null;
    if (h < 12) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Good Afternoon!';
    }
    document.getElementById('txtGreeting').innerHTML = greeting;
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i;}
    return i;
}
//open Modal
function openModal(mM, moImg, captionTxt, _src, _alt) {
    var modal = document.getElementById(mM);
    var modalImg = document.getElementById(moImg);
    var captionText = document.getElementById(captionTxt);
    modal.style.display = "block";
    modalImg.src = _src;
    captionText.innerHTML = _alt;
}
//close Modal
function closeModal(myM) {
    var modal = document.getElementById(myM);
    modal.style.display = "none";
}
//display size of Windows
function resultSize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("result").innerHTML = txt;
}
function stopV(element) {
    var video = document.getElementById(element);
    video.src = '#';
}
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });