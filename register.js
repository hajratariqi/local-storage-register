// const register = () =>{
//     let nameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     let isChecked = false
//     let radioBox = document.getElementById('radioBox')
//     let radioaBtn = radioBox.querySelectorAll('input');

//     for(var key of radioaBtn){
//         if(key.checked){
//             isChecked = true
//         }
//     }

//     if(isChecked){
//         console.log('thanks for selecting');
//     }else{
//         console.log('please select input');
//     }


//     let saveDate = localStorage.getItem('user')
//     let oldUser = saveDate ? JSON.parse(saveDate) : []

//     if(nameRegex.test(name) && emailRegex.test(email) && password){
//         const newUser = {name: name,  email: email,  password: password};
//         oldUser.push(newUser)
//         localStorage.setItem("user", JSON.stringify(oldUser))
//         // location.href = 'login.html'
//         console.log('Registerd successfully ');
//     }else{
//         console.log('sorry user not fount');
//     }

//     document.getElementById('name').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('password').value = "";
// }

const register = () =>{
    try{
        let nameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        let isChecked = false
        let radioBox = document.getElementById('radioBox')
        let radioaBtn = radioBox.querySelectorAll('input');
        for(var key of radioaBtn){
            if(key.checked){
                isChecked = true
            }
        }
        if (!isChecked) throw "Please select an option.";

        let saveDate = localStorage.getItem('user')
        let oldUser = saveDate ? JSON.parse(saveDate) : []
    
        if(nameRegex.test(name) && emailRegex.test(email) && password.length > 5){
            const newUser = {name: name,  email: email,  password: password};
            oldUser.push(newUser)
            localStorage.setItem("user", JSON.stringify(oldUser))
            location.href = 'login.html'
            console.log('Registerd successfully ');
        }  
    } catch(error){
        console.error("Registration Error:", error);
    }finally{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
}