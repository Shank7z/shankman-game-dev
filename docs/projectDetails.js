document.addEventListener("DOMContentLoaded", function() {

    // Get project ID from URL
    const params = new URLSearchParams(window.location.search);

    const projectID = params.get("project");

    // Find corresponding project
    const project = projects[projectID];

    // Check if project exists
    if (!project) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        return;
    }

    // Populate HTML
    document.getElementById("projectTitle").textContent = project.title;

    document.getElementById("projectDescription").textContent = project.description;

    document.getElementById("projectImage").src = project.image;

    document.getElementById("projectImage").alt = project.title;

    document.getElementById("projectContent").innerHTML = project.content;

});



const projects = {

    "temp": {

        title: "Temp Title",

        description: "Environment made exclusively with self-made models",

        image: "assets/images/temp.png",

        content: `
            <h2>Overview</h2>
            <p>This is where the project overview goes.</p>

            <h2>Development</h2>
            <p>This is where the development process goes.</p>

            <h2>What I Learned</h2>
            <p>This is where you discuss what you learned.</p>
        `

    },

    "bleak-reactor": {

        title: "Bleak Reactor",

        description: "Third person weapon-focused roguelike",

        image: "assets/images/temp.png",

        content: `
            <h2>Overview</h2>
            <p>Bleak Reactor project overview.</p>

            <h2>Gameplay Systems</h2>
            <p>Discuss the gameplay systems here.</p>
        `

    }

};

