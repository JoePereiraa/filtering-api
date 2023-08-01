// fetching users from a REST API

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => showUsers(users));

function showUsers(users) {
    const UL = document.createElement("ul");
    for(let user of users) {
        const LI = document.createElement("li")
        LI.innerText = user.name;
        UL.appendChild(LI);
    }
    result.appendChild(UL);
    //Filter Users list
    textBox.oninput = filterUsers;
    function filterUsers() {
        const LI_ELEMENTS = document.querySelectorAll("li")
        for (let li of LI_ELEMENTS) {
            const CURRENT_NAME = li.innerText.toLocaleLowerCase();
            const SEARCH_TEXT = this.value.toLocaleLowerCase();
            if(!CURRENT_NAME.includes(SEARCH_TEXT))
                li.setAttribute('hidden', true);
            else li.removeAttribute('hidden');
        }
    }
}    