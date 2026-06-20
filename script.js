```javascript
// ==========================================
// INITIALIZE AFTER PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ==========================================
    // SMOOTH NAVIGATION
    // ==========================================

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    e.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });

    });

    // ==========================================
    // PUBLICATION SEARCH
    // ==========================================

    const searchBox =
        document.getElementById("publicationSearch");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            const filter =
                this.value.toLowerCase();

            const papers =
                document.querySelectorAll(
                    ".publications-list li"
                );

            papers.forEach(paper => {

                const text =
                    paper.textContent.toLowerCase();

                paper.style.display =
                    text.includes(filter)
                        ? ""
                        : "none";

            });

        });

    }

    // ==========================================
    // DARK MODE
    // ==========================================

    const themeBtn =
        document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle(
                "dark-mode"
            );

            const currentTheme =
                document.body.classList.contains(
                    "dark-mode"
                )
                    ? "dark"
                    : "light";

            localStorage.setItem(
                "theme",
                currentTheme
            );

        });

    }

    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================

    const topBtn =
        document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display =
                window.scrollY > 400
                    ? "block"
                    : "none";

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ==========================================
    // COPY CITATION BUTTONS
    // ==========================================

    document
        .querySelectorAll(
            ".publications-list li"
        )
        .forEach(publication => {

            const btn =
                document.createElement("button");

            btn.textContent =
                "Copy Citation";

            btn.style.marginLeft = "10px";

            btn.addEventListener(
                "click",
                async () => {

                    try {

                        await navigator.clipboard.writeText(
                            publication.innerText
                        );

                        alert(
                            "Citation copied!"
                        );

                    } catch (error) {

                        console.error(
                            "Copy failed:",
                            error
                        );

                        alert(
                            "Unable to copy citation."
                        );

                    }

                }
            );

            publication.appendChild(btn);

        });

    // ==========================================
    // ACTIVE MENU HIGHLIGHT
    // ==========================================

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll("nav a");

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >= sectionTop
                ) {
                    current =
                        section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {
                    link.classList.add(
                        "active"
                    );
                }

            });

        }
    );

});
```
