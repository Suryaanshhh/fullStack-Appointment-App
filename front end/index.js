function handleFormSubmit(event) {
    
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userDetails = {
        name: name,
        email: email,
        phone: phone
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
    document.getElementById('phone').value;
    const parent = document.getElementById('listofitems');
    const child = `<li id=${user.id}>- ${user.name}-${user.email}-${user.number}
                        <button onclick=Deleteuser('${user.id}')> DELETE </button>
                        </li>`
    parent.innerHTML = parent.innerHTML + child;
}

function Deleteuser (userId){
    axios.delete(`http://localhost:5000/delete-user/${userId}`)
    .then((response)=>{ console.log(response)
        removeUSerFromScreen(userId)})

}

function removeUSerFromScreen(userId){
    const parentNode=document.getElementById('listofitems');
    const childNodeTOBeDeleted=document.getElementById(userId);
    if(childNodeTOBeDeleted){
        parentNode.removeChild(childNodeTOBeDeleted);
    }
}