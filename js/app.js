const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const img = document.querySelector(".image")

const client_id = "Iv1.2540cfc833084753";
const client_secret = "bb4360ee52d86c34f2840ed6a69cba9e572138c0";


// fetch users from github.

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    // convert api data into json
    const data = await api_call.json();
    return { data }
};

// display 

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Public Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `Profile ULR: <span class="main__profile-value">${res.data.html_url}</span>`;
        // img.innerHTML = `Profile Image: <img src="  ${res.data.avatar_url} "></img> `;
    })
}

searchButton.addEventListener("click", () => {

    showData();

})