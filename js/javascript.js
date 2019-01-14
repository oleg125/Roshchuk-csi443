
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
