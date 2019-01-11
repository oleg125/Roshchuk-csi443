var imported_jquery = document.createElement('script');
imported_jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
document.head.appendChild(imported_jquery);
var imported_popper = document.createElement('script');
imported_popper.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js';
document.head.appendChild(imported_popper);
var imported_b_min = document.createElement('script');
imported_b_min.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js';
document.head.appendChild(imported_b_min);
if (!document.getElementById('id_link')) {
    var link_bootstrap = document.createElement('link');
    link_bootstrap.id = 'id_link';
    link_bootstrap.rel = 'stylesheet';
    link_bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';
    document.head.appendChild(link_bootstrap);
}
if (!document.getElementById('id_styles')) {
    var link_styles = document.createElement('link');
    link_styles.id = 'id_styles';
    link_styles.rel = 'stylesheet';
    link_styles.href = 'css/styles.css';
    document.head.appendChild(link_styles);
}
if (!document.getElementById('id_reset')) {
    var link_reset = document.createElement('link');
    link_reset.id = 'id_reset';
    link_reset.rel = 'stylesheet';
    link_reset.href = 'css/reset.css';
    document.head.appendChild(link_reset);
}
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
