	const ROOT = "";
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
            '<a href="' + ROOT + 'index.html"><div class="' + homeClass + '"><h1>Home</h1></div></a>' +
            '<a href="' + ROOT + 'projects.html"><div class="' + projectsClass + '"><h1>Projects</h1></div></a>' +
            '<a href="' + ROOT + 'extras.html"><div class="' + extrasClass + '"><h1>Extras</h1></div></a>' +
            '<a href="' + ROOT + 'about.html"><div class="' + aboutClass + '"><h1>About</h1></div></a>' +
            '<a href="' + ROOT + 'contact.html"><div class="' + contactClass + '"><h1>Contact</h1></div></a>' +
        '</div>' +

        '<div class="nav-right">' +
        '</div>' +

    '</div>';

	// Sorts the individual project cards on the Projects page
	updateProjectDates();
	const projectGrid = document.getElementById("projectGrid");

	if (projectGrid) 
	{
    	sortProjects("newest");
	}
	

});

// Finds the grid, grabs each project, sorts them by date, and then re-adds them to grid
function sortProjects(order = "newest") {

    const grid = document.getElementById("projectGrid");
    const projects = Array.from(grid.children);

    projects.sort((a, b) => {

        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);

        if (order === "newest") {
            return dateB - dateA;
        }
        else {
            return dateA - dateB;
        }

    });

    projects.forEach(project => {
        grid.appendChild(project);
    });

}

function updateProjectDates() {

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {

        const date = new Date(project.dataset.date + "T00:00:00");

        const status = project.dataset.status;

        const formattedDate = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        });

        const dateElement = project.querySelector(".project-date");

        dateElement.textContent = status + ": " + formattedDate;

    });

}