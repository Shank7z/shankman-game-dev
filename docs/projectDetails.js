document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);

    const projectID = params.get("project");

    const project = projects[projectID];

    // Makes sure project exists
    if (!project) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        return;
    }

    document.getElementById("projectTitle").textContent = project.title;

    document.getElementById("projectDescription").textContent = project.description;

    document.getElementById("projectImage").src = project.image;

    document.getElementById("projectImage").alt = project.title;

    document.getElementById("projectContent").innerHTML = project.content;

});



const projects = {

    "temp": {

        title: "Incomplete Page",

        description: "This project's page has not been set up yet",

        image: "assets/images/temp.png",

        content: `
            <h2>Overview</h2>
            <p>This is where the project overview will go.</p>

            <h2>Development</h2>
            <p>This is where the development process will go.</p>

            <h2>Takeaways</h2>
            <p>This is where skills learned and used will go.</p>
        `

    },

    "portfolio-site": {

        title: "Portfolio Website",

        description: "This site itself",

        image: "assets/images/Dreamweaver.png",

        content: `
            <h2>Overview</h2>
            <p>I programmed this whole site from scratch in Dreamweaver using HTML, CSS, and JavaScript. The site is deployed through Github Pages.</p>

            <h2>Takeaways</h2>
            <p>
				Making this site helped me learn a ton about web design. Not only did I have to learn how to program in HTML/CSS/JS, but I also had to do a ton of research into
				what makes a website feel modern and stylish.
			</p>
        `

    }

};

