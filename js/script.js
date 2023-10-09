'use strict'
const projects = [
	{
		title: "E-Commerce Website",
		brief: "An online store for selling products.",
		details_link: "https://example.com/e-commerce",
		github_link: "https://github.com/example/e-commerce",
		image: "images/1-e-commerce.jpg",
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
		image: "images/2-weather-app.jpg",
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
		image: "images/3-to-do-app.jpg",
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
		image: "images/4-quiz-app.jpg",
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
		image: "images/5-freelancing.jpg",
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
	
	{
		title: "Geolocation App",
		brief:
			"A geo location app that shows direction and allows users to navigate within the communities they wish to visit.",
		details_link: "https://example.com/geolocation-app",
		github_link: "https://github.com/example/geolocation-app",
		image: "images/6-geolocation.jpg",
		comments: [
			{
				username: "victoria",
				comment:
					"The location app has really helped me and my family to navigate through the most remote areas we've ever visited.",
			},
			{
				username: "samson",
				comment:
					"Lovely geolocation app; smooth interface and great user experience.",
			},
			{
				username: "loveth",
				comment: "Overall, good work!",
			},
		],
	},
];

//Function For Html Page Structure 
function generateProjectList(project) {
  return `
    <li class="items">
        <div class="items-container">
            
        <div class="number">${projects.indexOf(project) + 1}</div>
     
       
      <div class="details">
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.brief}</p>
        
        <div>
          <a class="view-demo" href="${project.details_link}">View Project</a>
          <a href="${project.github_link}">GitHub Repository</a>
        </div>
        
        
        <div class="comment">
          <h2>Comments:</h2>
          
          <ul>
            ${project.comments.map(comment => `
              <li>
                <strong>${comment.username}:</strong> ${comment.comment}
              </li>
            `).join(",")}
          </ul>
        </div>
        
      </div>
      
     </div>
    </li>
  `;
}

//Function To Iterate Through Projects Array
function displayProjectList() {
  const projectList = document.querySelector(".project-list");
  projects.forEach(project => {
    const cardHtml = generateProjectList(project);
    projectList.innerHTML += cardHtml;
  });
}

//Display On Page Load
window.addEventListener('DOMContentLoaded', displayProjectList);
