function validate() {
 
    let user = document.getElementById("userEmail");
    let user2 = document.getElementById("pass");
    const flags = "gm";
    const pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    const regexPattern = new RegExp(pattern, flags);
    

        
    if (user.value.match(pattern) && user2.value.match(passPattern) ) {
        alert("done");
        
    }
    else {
        user.style.border = "red solid 3px";
        user2.style.border = "red solid 3px";
    
    }
}

