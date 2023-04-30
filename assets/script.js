const projects = [
	{
		title: "E-Commerce Website",
		brief: "An online store for selling products.",
		details_link: "https://example.com/e-commerce",
		github_link: "https://github.com/example/e-commerce",
		image: "assets/images/1-e-commerce.jpg",
		comments: [
			{ username: "eze12", comment: "Great website, I love the design!" },
			{
				username: "oghene",
				comment: "The checkout process needs improvement.",
			},
		],
	},
	{
		title: "Weather App",
		brief: "A web app that displays the current weather for a given location.",
		details_link: "https://example.com/weather-app",
		github_link: "https://github.com/example/weather-app",
		image: "assets/images/2-weather-app.jpg",
		comments: [
			{
				username: "abdul",
				comment: "This app is very helpful, thanks for sharing!",
			},
			{
				username: "titilope",
				comment: "Could you add support for more cities?",
			},
		],
	},
	{
		title: "To-Do List",
		brief: "A simple to-do list web app.",
		details_link: "https://example.com/to-do-list",
		github_link: "https://github.com/example/to-do-list",
		image: "assets/images/3-to-do-app.jpg",
		comments: [
			{
				username: "user5",
				comment: "I use this app every day, it's perfect!",
			},
			{
				username: "user6",
				comment:
					"It would be great if you could add drag and drop functionality.",
			},
		],
	},
	{
		title: "Quiz App",
		brief:
			"A quiz app that allows users to create and take quizzes on various topics.",
		details_link: "https://example.com/quiz-app",
		github_link: "https://github.com/example/quiz-app",
		image: "assets/images/4-quiz-app.jpg",
		comments: [
			{
				username: "ezekiel",
				comment:
					"I like how the app allows users to create their own quizzes. Very cool feature!",
			},
			{
				username: "emeka",
				comment: "I noticed a typo in one of the questions. Please correct it.",
			},
			{
				username: "daniel",
				comment:
					"The app is very intuitive and easy to use. I enjoyed taking quizzes on it!",
			},
		],
	},
	{
		title: "Freelancing App",
		brief:
			"A freelancing app that shows available jobs information based on user location.",
		details_link: "https://example.com/weather-app",
		github_link: "https://github.com/example/weather-app",
		image: "assets/images/5-freelancing.jpg",
		comments: [
			{
				username: "jadesola",
				comment:
					"Great app! It's really helpful to know the weather before going out.",
			},
			{
				username: "mustafa",
				comment: "The UI is very user-friendly. Good job!",
			},
			{
				username: "samsmith",
				comment:
					"I noticed that the job search sometimes takes a while to update. Overall, good work!",
			},
		],
	},
];

const projectList = document.getElementById("project");

projects.map((option, index) => {
	let item = `
    <div class="number"><span>${index + 1}</span></div>
					<div>
    <img src="${option.image}" alt="Project 1" />
    <h2>${option.title}</h2>
    <p>${option.brief}</p>
    <a href="${option.details_link}">View Project</a>
    <a href="${option.github_link}">GitHub Repository</a>
    <div class="comments">
        <h3>Comments:</h3>
        <ul>${option.comments.map((comment) => {
					return `<li>
							<strong>@${comment.username}:</strong> ${comment.comment}
						</li>`;
				})}
        </ul>
        <form>
            <h4>Add a comment:</h4>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" /><br /><br />
            <label for="comment">Comment:</label>
            <textarea
                id="comment"
                name="comment"
                rows="5"
                cols="50"
            ></textarea
            ><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
    </div>

    `;
	let li = document.createElement("LI");
	li.classList.add("items");
	li.innerHTML = item;
	projectList.append(li);
});
