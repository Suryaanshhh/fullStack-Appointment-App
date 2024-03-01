function handleFormSubmit(event) {
    event.preventDefault()

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userDetails = {
        name:name,
        email: email,
        phone: phone
    }
    axios.post('http://localhost:5000/add-user', userDetails)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => { console.log(err) });

}

