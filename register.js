const register = () =>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let saveDate = localStorage.getItem('user')
    let oldUser

    if(name && email && password){
        if(saveDate){
            oldUser = JSON.parse(saveDate)
            console.log(oldUser);
        }else{
            
        }

        const user = [
            {name: name,  email: email,  password: password}]
        
        user.push(oldUser)
        localStorage.setItem("user", JSON.stringify(user))

    }else{
        console.log('sorry user not fount');
    }
}