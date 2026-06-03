// ============================
// CURSOR GLOW
// ============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ============================
// SCROLL REVEAL
// ============================

const revealElements = document.querySelectorAll(
".project-card, .about-card, .stack-item, .section-title"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach((el)=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// ============================
// NAVBAR SCROLL EFFECT
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,5,7,.92)";

        navbar.style.borderBottom =
        "1px solid rgba(255,255,255,.08)";

    }

    else{

        navbar.style.background =
        "rgba(5,5,7,.65)";

        navbar.style.borderBottom =
        "1px solid rgba(255,255,255,.05)";

    }

});

// ============================
// PROJECT CARD TILT
// ============================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
        ((y / rect.height) - 0.5) * -8;

        const rotateY =
        ((x / rect.width) - 0.5) * 8;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        `;

    });

});

// ============================
// TYPING EFFECT
// ============================

const typingElement =
document.querySelector(".typing-text");

const phrases = [

"Building privacy-first apps.",
"Creating chat platforms.",
"Designing digital experiences.",
"Turning ideas into products."

];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current =
    phrases[phraseIndex];

    if(!deleting){

        typingElement.textContent =
        current.substring(0,charIndex);

        charIndex++;

        if(charIndex >
        current.length){

            deleting = true;

            setTimeout(type,1500);

            return;
        }

    }

    else{

        typingElement.textContent =
        current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            phraseIndex++;

            if(
            phraseIndex >=
            phrases.length
            ){

                phraseIndex = 0;
            }

        }

    }

    setTimeout(
    type,
    deleting ? 35 : 70
    );

}

type();

// ============================
// SCROLL PROGRESS BAR
// ============================

const progress =
document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "3px";
progress.style.width = "0%";
progress.style.zIndex = "99999";

progress.style.background =
"linear-gradient(90deg,#a855f7,#c084fc)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scrollTop =
    window.scrollY;

    const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const percent =
    (scrollTop / docHeight) * 100;

    progress.style.width =
    percent + "%";

});

// ============================
// FLOATING TECH STACK
// ============================

const stackItems =
document.querySelectorAll(".stack-item");

stackItems.forEach((item,index)=>{

    item.style.animation =
    `floatTech 4s ease-in-out ${index*0.15}s infinite`;

});

// Inject animation

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatTech{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-6px);
}

100%{
transform:translateY(0px);
}

}

`;

document.head.appendChild(style);