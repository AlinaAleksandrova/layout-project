document.addEventListener("DOMContentLoaded", function() {
    // Toggle overlay menu
    document.getElementById("toggle").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("overlay").classList.toggle("open");
    });

    // Toggle menu text and class
    document.querySelector(".menu-cont").addEventListener("click", function() {
        var menuTxtElem = document.querySelector(".menu-txt");
        var menu = menuTxtElem.textContent;
        var close = menuTxtElem.getAttribute("data-text");

        document.querySelector(".menu").classList.toggle("active");

        if (menuTxtElem.textContent === menu) {
            menuTxtElem.textContent = close;
        } else {
            menuTxtElem.textContent = menu;
        }

        menuTxtElem.setAttribute("data-text", menu);
    });

    // Center elements vertically
    var findNCenter = function() {
        var elems = document.querySelectorAll(".center-vertical");

        elems.forEach(function(elem) {
            elem.style.marginTop =
                (elem.parentNode.offsetHeight - elem.offsetHeight) / 2 + "px";
        });
    };

    findNCenter();
    window.addEventListener("resize", findNCenter);

    // Automatic text scroll effect
    var count = document.querySelectorAll("#inner p").length;
    var i = 1;

    setInterval(function() {
        if (i < count) {
            document.getElementById("inner").style.transform = "translate3d(0,-" + i + "00%,0)";
            i++;
        }
    }, 800);
});