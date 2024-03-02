function handleFormSubmit(event) {

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const userDetails = {
        name: name,
        email: email,
        number:number
    }
    axios.post('http://localhost:5000/add-user', userDetails)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => { console.log(err) });

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:5000/get-user')
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.user.length; i++) {
                showUser(response.data.user[i]);
            }
        })
        .catch((err) => { console.log(err) });
})
function showUser(user) {
    document.getElementById('username').value;
    document.getElementById('email').value;
    document.getElementById('number').value;
    const parent = document.getElementById('listofitems');
    const child = document.createElement('li');
    child.id = `${user.id}`;
    child.textContent = `${user.name}-${user.email}-${user.number}`
    const DelButton = document.createElement('button');
    DelButton.textContent = 'Delete'
    DelButton.className = 'delete'
    //parent.innerHTML = parent.innerHTML + child;
    parent.appendChild(child);
    child.appendChild(DelButton);

    DelButton.addEventListener('click', function Deleteuser() {
        console.log(child.id);
        axios.delete(`http://localhost:5000/delete-user/${child.id}`)
            .then((response) => {
                // console.log(userId.config)
                removeUSerFromScreen(child.id)
                console.log(response);
            })

    })
    function removeUSerFromScreen(userId) {
        const parentNode = document.getElementById('listofitems');
        const childNodeTOBeDeleted = document.getElementById(userId);
        if (childNodeTOBeDeleted) {
            parentNode.removeChild(childNodeTOBeDeleted);
        }
    }
}





