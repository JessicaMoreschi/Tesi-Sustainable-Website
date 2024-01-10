const root = document.querySelector(':root');


function changeNav(section){
    document.getElementsByClassName('nav-active')[0].className='nav'
    document.getElementById('nav-'+section).className='nav nav-active'
}

function changeSection(section){
    window.scrollTo({
        top: section*window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
}


window.onresize = function(){
    root.style.setProperty('--VPheight', window.innerHeight+"px");
    let color = getComputedStyle(root).getPropertyValue('--VPheight')
    console.log(color)
}

