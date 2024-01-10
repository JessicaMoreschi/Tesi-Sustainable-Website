const root = document.querySelector(':root');


function changeNav(section) {
    // document.getElementsByClassName('nav-active')[0].className='nav'
    // document.getElementById('nav-'+section).className='nav nav-active'
}

function changeSection(section) {
    window.scrollTo({
        top: section * window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
}



window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if ((Math.floor((scroll / window.innerHeight) + 0.5)) >= 0 && (Math.floor((scroll / window.innerHeight) + 0.5)) < 5) {
        document.getElementsByClassName('nav-active')[0].className = 'nav'
        document.getElementById('nav-' + (Math.floor((scroll / window.innerHeight) + 0.5))).className = 'nav nav-active'
    }
    if ((Math.floor(((scroll + 82) / window.innerHeight))) == 1 
    || (Math.floor(((scroll + 82) / window.innerHeight))) == 2) {
        document.getElementsByClassName('header')[0].className = 'header light';
        document.getElementsByClassName('nav-container')[0].className = 'nav-container light'
    } else { document.getElementsByClassName('header')[0].className = 'header dark';
    document.getElementsByClassName('nav-container')[0].className = 'nav-container dark' }
});





window.onresize = function () {
    root.style.setProperty('--VPheight', window.innerHeight + "px");
    let color = getComputedStyle(root).getPropertyValue('--VPheight')
}