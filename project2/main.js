const input = document.getElementById("username_input");
const button = document.querySelector("#btn");
const givenUser = document.querySelector(".user");

async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    givenUser.innerHTML = `
    <img src="${data.avatar_url}" alt="">
<p>Joined ${data.created_at}</p>
<p>followers: ${data.followers}</p>
<p>following: ${data.following}</p>
<p>login: ${data.login}</p>
<p>name: ${data.name}</p>
<p>Repos:${data.public_repos}</p>
<p>URL: ${data.url}</p>
    `;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  const username = input.value.trim();
  getUser(username);
});
