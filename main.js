let letters = document.querySelectorAll(".p1");

letters.forEach(el => {
  el.style.strokeDasharray = el.getTotalLength(); 
  el.style.strokeDashoffset = el.getTotalLength();
});

let cont = document.querySelector(".p2");
cont.style.strokeDasharray = cont.getTotalLength(); 
cont.style.strokeDashoffset = cont.getTotalLength();
setTimeout(() => {
    imgs = document.querySelectorAll(".menuimages");
    imgs.forEach(el => {
        el.style.display="block";
    });
    setTimeout(() => {
        menu = document.getElementById("menu");
        if(menu) {
            menu.scrollIntoView({behavior:'smooth'})
        }
        setTimeout(() => {
            loadscr = document.querySelector(".loadscreen");
            loadscr.style.display="none";
        }, 1000);
    }, 1000);
},7000);