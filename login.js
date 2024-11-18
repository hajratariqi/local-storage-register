const email = document.getElementById('email');
const password = document.getElementById('password');

const matchUser = () => {
    let getUser = JSON.parse(localStorage.getItem('user'))
    if(email.value && password.value){
        for(let key in getUser){
            if(email.value === getUser[key].email){
                if(password.value === getUser[key].password){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }else{
        alert('Please fill all fields')
    }
}


const Login = () => {
    if(matchUser()){
        console.log('User found');
        location.href = 'index.html'
      }else{
        console.log("User not found or incorrect credentials.");
      }
}