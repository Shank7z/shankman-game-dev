document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);

    const projectID = params.get("project");

    const project = projects[projectID];

    // Makes sure project exists
    if (!project) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        return;
    }
	
	const mediaContainer = document.getElementById("projectMedia");

if (project.mediaType === "image") {
    mediaContainer.innerHTML = `
        <img 
            src="${project.media}" 
            alt="${project.title}"
        >
    `;
}
else if (project.mediaType === "video") {
    mediaContainer.innerHTML = `
        <video controls>
            <source src="${project.media}" type="video/mp4">
            Your browser does not support HTML video.
        </video>
    `;
}

    document.getElementById("projectTitle").textContent = project.title;

    document.getElementById("projectDescription").textContent = project.description;

    document.getElementById("projectContent").innerHTML = project.content;

});



const projects = {

    "temp": {

        title: "Incomplete Page",

        description: "This project's page has not been set up yet",
		mediaType: "image",
        media: "assets/images/temp.png",

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

        description: "",
		mediaType: "image",
        media: "assets/images/Dreamweaver.png",

        content: `
            <h2>Overview</h2>
            <p>I programmed this whole website from scratch in Dreamweaver using HTML, CSS, and JavaScript. The site is deployed through GitHub Pages.</p>

            <h2>Takeaways</h2>
            <p>
				Making this site helped me learn a ton about web design. Not only did I have to learn how to program in HTML/CSS/JS, but I also had to do a ton of research into
				what makes a website feel modern and stylish.
			</p>
        `

    },
	
	"database": {

        title: "Relational Database",

        description: "Database made in Supabase with PostgreSQL",
		mediaType: "image",
        media: "assets/images/Database.png",

        content: `
            <h2>Overview</h2>
            <p>This database stores user and reservation information for Charm City Filmmakers. It allows them to keep track of permitted users, along with giving them access to detailed information on exactly how their studio is being used.</p>

            <h2>Takeaways</h2>
            <p>This was my first time using any kind of database, and also my first attempt at writing SQL querries. It took a while to get it working initially, especially when it came to getting it all hooked up to the Unity project where I built the UI.</p>
        `

    },
	
	"reservation-app": {

        title: "Studio Reservation App",

        description: "Unity App for Android and iOS",
		mediaType: "image",
        media: "assets/images/ReservationApp.png",

        content: `
            <h2>Overview</h2>
            <p>This app allows users to make reservations for specific rooms at the Charm City Filmmakers studio. It has a login screen, fully functional interactive calendar UI (made from scratch), daily and monthly views, "my reservations" page, and more.</p>

            <h2>Takeaways</h2>
            <p>I learned a lot about UI design from this project. I definitely improved my skills with Unity's UI and Canvas systems, but I also learned how much better other frameworks like React are for app design. </p>
        `

    },
	
	"movement-system": {

        title: "Movement and Camera System",

        description: "All encompasing character controller",
		mediaType: "video",
        media: "assets/videos/MovementSystem.mp4",

        content: `
            <h2>Overview</h2>
            <p>This movement system was built for a project with a friend. The camera transitions smoothly between first and third person, and all of the controls adjust accordingly. There are 2 different state machines to handle the character when on land and in the water.</p>

            <h2>Takeaways</h2>
            <p>I really enjoyed building this. I spent a long time making sure there were no edge cases or bugs with the state machine. Every transition is smooth and intentional. I learned a lot about making movement feel quick and responsive without feeling jittery.</p>
        `

    },
	
	"inventory-system": {

        title: "Re:Silica Inventory System",

        description: "Inventory and item system for an isometric roguelite",
		mediaType: "video",
        media: "assets/videos/ReSilica.mp4",

        content: `
            <h2>Overview</h2>
            <p>Re:Silica is an isometric roguelite twin-stick shooter made for a collegiate capstone project. I joined during the second semester of production and was tasked with revamping many of the poorly designed systems. I built this inventory system to be as efficient and optimized as possible. Almost everything is purely data driven with very few monobehaviors. All item information is easily adjustable through scriptable objects and data classes held in dictionaries. </p>

            <h2>Development</h2>
            <p>This was one of the hardest projects for me to work on due to joining the team late. I had to read through and understand the previous programmers code, which lacked comments and documentation. And then I had to decipher the structure of the entire project to understand what things needed to be completely scrapped and what could be worked with. It was frustrating at the time, but a really valuable learning experience.</p>

            <h2>Takeaways</h2>
            <p>This system forced me to improve my optimization techniques. I needed to store everything as minimally as possible to keep the game save files small. I also needed the inventory to be incredibly optimized as it gets opened and interacted with frequently and in fast-paced combat gameplay.</p>
        `

    },
	
	"ability-system": {

        title: "Ability System",

        description: "Interchangeable ability system built for customization",

        image: "assets/videos/AbilitySystem.mp4",

        content: `
            <h2>Overview</h2>
            <p>This is a system I created for a personal roguelite project. Abilities are made as scriptable objects and can be easily slotted in the player's ability slots. The system supports tap and hold functionality, recasting, cooldowns, resource costs, and up to 4 equippable abilities.</p>

            <h2>Takeaways</h2>
            <p>Building a complete system makes future development significantly easier. This system took me a fairly long time to create, but it allowed me to create abilities so much quicker. All of the back-end functionality was taken care of, so I could just focus on making cool, fun abilities.</p>
        `

    },
	
	"projectile-system": {

        title: "Projectile System",

        description: "All-encompasing projectiles",
		mediaType: "video",
        media: "assets/videos/WeaponSystem.mp4",

        content: `
            <h2>Overview</h2>
            <p>This is one of my proudest creations. This system handles almost any functionality possibly needed for projectiles while maintaining really good performance. I also ensured ease of use through some editor scripting. The system can handle multishot, spread, velocity, gravity, explosives, bounces, recoil, hitscan, terrain and enemy punchthrough, hit limits, and variable meshes/hitboxes, all while maintaining clean performance with upwards of 15,000 active projectiles. </p>
        `

    },
	
	"simulacrum": {

        title: "Warframe's Ballroom Simulacrum",

        description: "An attempt at recreating the simulacrum and all included mechanics",
		mediaType: "video",
        media: "assets/videos/Simulacrum.mp4",

        content: `
            <h2>Overview</h2>
            <p>This was a long term project where I tried to recreate as many systems as possible from Warframe, while also working in UE5, which I had very little experience in. The character model was acquired from the Warframe website. Every single other thing in this project (inlcuding the model rigging, skinning, and animating) was created by me, from scratch. I did not use a single asset from Warframe or any external developer.</p>

            <h2>Development</h2>
            <p>This project was really an excercise in the full game development process. I wanted to test my ability to build every single part of a game on my own. I spent a long time learning UE5's blueprint system and had to improve a lot of various skills I hadn't practiced like rigging. I also periodically recorded update videos documenting my progress, allowing me to look back at earlier versions, along with get feedback from other Warframe players.</p>
        `

    },

};

