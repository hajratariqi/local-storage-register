const register = () =>{
    let nameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let saveDate = localStorage.getItem('user')
    let oldUser = saveDate ? JSON.parse(saveDate) : []

    if(nameRegex.test(name) && emailRegex.test(email) && password){
        const newUser = {name: name,  email: email,  password: password};
        oldUser.push(newUser)
        localStorage.setItem("user", JSON.stringify(oldUser))
        location.href = 'login.html'
        console.log('Registerd successfully ');
    }else{
        console.log('sorry user not fount');
    }

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}