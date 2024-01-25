const root = document.querySelector(':root');


function changeSection(section) {
    window.scrollTo({
        top: section * window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
}

let headerHeight = 82 //qua fai una query che cambia con il mobile

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if ((Math.floor((scroll / window.innerHeight) - 0.5)) >= 0 && (Math.floor((scroll / window.innerHeight) - 0.5)) < 6) {

        document.getElementsByClassName('nav-active')[0].className = 'nav'
        document.getElementById('nav-' + (Math.floor((scroll / window.innerHeight) - 0.5))).className = 'nav nav-active'

        if ((Math.floor(((scroll + headerHeight) / window.innerHeight))) == 1
            || (Math.floor(((scroll + headerHeight) / window.innerHeight))) == 2) {
            document.getElementsByClassName('header')[0].className = 'header light';
            document.getElementsByClassName('nav-container')[0].className = 'nav-container light'
        } else if ((Math.floor(((scroll + headerHeight) / window.innerHeight))) == 0) {
            document.getElementsByClassName('nav-container')[0].className = 'nav-container nav-container-ghost'
        }
        else {
            document.getElementsByClassName('header')[0].className = 'header dark';
            document.getElementsByClassName('nav-container')[0].className = 'nav-container dark'
        }
    } else {document.getElementsByClassName('header')[0].className = 'header dark';}
});





window.onresize = function () {
    root.style.setProperty('--VPheight', window.innerHeight + "px");
    let color = getComputedStyle(root).getPropertyValue('--VPheight')
}