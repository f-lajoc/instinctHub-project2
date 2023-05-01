const container = document.getElementById("project");

projects.forEach((project) => {
	const projectElement = document.createElement("div");
	projectElement.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.brief}</p>
    <a href="${project.details_link}">View Project</a>
    <a href="${project.github_link}">View on GitHub</a>
  `;

	const commentsElement = document.createElement("div");
	project.comments.forEach((comment) => {
		commentsElement.innerHTML += `
      <p>${comment.username}: ${comment.comment}</p>
    `;
	});
	projectElement.appendChild(commentsElement);

	container.appendChild(projectElement);
});
