document.getElementById("signupButton").addEventListener("click", function() {
    const user_name = document.getElementById("username").value;
    const user_email = document.getElementById("email").value;
    const user_password = document.getElementById("password").value;
    const user_gender = document.getElementById("gender").value;
    const user_dob = document.getElementById("dob").value;

    
    //datbasecolumanname : text box value
    const user = {
      username: user_name,
      email: user_email,
      password: user_password,
      gender:user_gender,
      dob:user_dob
    }
    console.log(user)

    window.localStorage.setItem("myemail",user_email)
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8083/users");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

  

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText)
      }
    }

    xhr.send( JSON.stringify(user) );
    window.location.href = "http://localhost:5502/exercises.html";
  })