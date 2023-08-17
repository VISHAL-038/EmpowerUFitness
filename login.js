document.getElementById('loginButton').addEventListener("click",function
(){
    const user_email=document.getElementById("email").value;
    const user_password=document.getElementById("password").value;
  
    console.log(user_email)
    console.log(user_password);
    // localStorage.setItem("myvariable","ollo")

    window.localStorage.setItem("myemail",user_email)
    

    const xhr= new XMLHttpRequest();
    xhr.open("GET","http://localhost:8083/users")
    xhr.setRequestHeader('Content-Type', 'application/json')
    //xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

   

    xhr.onreadystatechange=() => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            res=JSON.parse(xhr.responseText)
            console.log(res);
            for(let i=0;i<res.length;i++)
            {
                if(res[i].email==user_email && res[i].password==user_password)
                {
                    document.getElementById('messages').innerHTML="success";
                    window.location.href = "http://localhost:5502/exercises.html";
                    break;
                }
                if(res[i].email!=user_email && res[i].password!=user_password)
                {
                    document.getElementById('messages').innerHTML="incorrect";
                    break;
                }
            }
        }
    }
    xhr.send();
})