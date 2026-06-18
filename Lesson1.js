// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
new Date().getFullYear();


// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll("nav a")
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});


// =========================
// PUBLICATION SEARCH
// =========================

const searchBox =
document.getElementById("publicationSearch");

if(searchBox){

searchBox.addEventListener("keyup", function(){

    const filter =
    this.value.toLowerCase();

    const papers =
    document.querySelectorAll(
        ".publications-list li"
    );

    papers.forEach(paper => {

        if(
            paper.textContent
            .toLowerCase()
            .includes(filter)
        ){
            paper.style.display = "";
        }
        else{
            paper.style.display = "none";
        }

    });

});

}


// =========================
// DARK MODE
// =========================

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){
        localStorage.setItem(
            "theme",
            "dark"
        );
    }
    else{
        localStorage.setItem(
            "theme",
            "light"
        );
    }

});


window.addEventListener("load", () => {

    if(
        localStorage.getItem("theme")
        === "dark"
    ){
        document.body.classList.add(
            "dark-mode"
        );
    }

});


// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display =
        "block";

    }
    else{

        topBtn.style.display =
        "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// =========================
// COPY CITATION BUTTONS
// =========================

document
.querySelectorAll(
".publications-list li"
)
.forEach(publication => {

    const btn =
    document.createElement(
        "button"
    );

    btn.innerText =
    "Copy Citation";

    btn.style.marginLeft =
    "10px";

    btn.addEventListener(
    "click",
    () => {

        navigator.clipboard.writeText(
            publication.innerText
        );

        alert(
        "Citation copied!"
        );

    });

    publication.appendChild(btn);

});


// =========================
// ACTIVE MENU
// =========================

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
"nav a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(
    section => {

        const sectionTop =
        section.offsetTop - 150;

        if(
        scrollY >= sectionTop
        ){
            current =
            section.getAttribute(
            "id"
            );
        }

    });

    navLinks.forEach(
    link => {

        link.classList.remove(
        "active"
        );

        if(
        link.getAttribute(
        "href"
        ) === "#" + current
        ){
            link.classList.add(
            "active"
            );
        }

    });

});