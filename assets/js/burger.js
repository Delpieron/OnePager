const menu = document.getElementsByTagName("nav")[0];
    const body = document.getElementsByTagName('body')[0];

    window.addEventListener('resize', () => {
        if (window.matchMedia("(min-width: 800px)").matches) {
            menu.style.display = "block";
            body.style.overflow = "auto";
        } else {
            menu.style.display ="none";
        }
    });

            document.getElementById("burger").addEventListener("click", () => {
                if (menu.style.display === "block" && window.matchMedia("(max-width: 900px)").matches){
                    menu.style.display = "none";
                    body.style.overflow = "auto";
                }
                else{
                    menu.style.display = "block";
                    body.style.overflow = "hidden";
                }
            });

            document.querySelectorAll('.navbar-btn').forEach(target => {
                target.addEventListener("click", () => {
                    if (window.matchMedia("(max-width: 900px)").matches) {
                        menu.style.display = "none";
                        body.style.overflow = "auto";
                    }
                })
            })