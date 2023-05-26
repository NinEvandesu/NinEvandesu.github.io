
window.onscroll = function () {

    // var nav = document.querySelector('#nav')
    var nav = document.getElementById('nav')

    if (window.scrollY > 0) {
        nav.className = 'navbar navbar-fixed-top active'
    } else {
        nav.className = 'navbar navbar-fixed-top'
    }
}
window.onload = function () {

    var navbtn = document.getElementById('navbtn')
    var list = document.getElementById('navbar')
    var lis = list.children;
    
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            navbtn.click()
        }
    }
}