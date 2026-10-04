document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.pathname.split("/").pop();

    var homeClass = "clickable-block";
    var projectsClass = "clickable-block";
    var extrasClass = "clickable-block";
    var aboutClass = "clickable-block";
    var contactClass = "clickable-block";

    if (currentPage == "index.html" || currentPage == "") {
        homeClass = "clickable-block-selected";
    }
    else if (currentPage == "projects.html") {
        projectsClass = "clickable-block-selected";
    }
    else if (currentPage == "extras.html") {
        extrasClass = "clickable-block-selected";
    }
    else if (currentPage == "about.html") {
        aboutClass = "clickable-block-selected";
    }
    else if (currentPage == "contact.html") {
        contactClass = "clickable-block-selected";
    }

    document.getElementById("navbar").innerHTML =
    '<div class="nav-bar">' +

        '<div class="nav-left">' +
            '<p>Shankman Game Dev</p>' +
        '</div>' +

        '<div class="nav-center">' +
            '<a href="index.html"><div class="' + homeClass + '"><h1>Home</h1></div></a>' +
            '<a href="projects.html"><div class="' + projectsClass + '"><h1>Projects</h1></div></a>' +
            '<a href="extras.html"><div class="' + extrasClass + '"><h1>Extras</h1></div></a>' +
            '<a href="about.html"><div class="' + aboutClass + '"><h1>About</h1></div></a>' +
            '<a href="contact.html"><div class="' + contactClass + '"><h1>Contact</h1></div></a>' +
        '</div>' +

        '<div class="nav-right">' +
        '</div>' +

    '</div>';

});