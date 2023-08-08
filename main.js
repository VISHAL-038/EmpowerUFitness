const xhr = new XMLHttpRequest();
var res;
xhr.open('GET', 'https://musclewiki.p.rapidapi.com/exercises');
xhr.setRequestHeader('X-RapidAPI-Key','69b5c25eecmsh72d9f07fc3dfc60p148098jsn8c6634af6304');
xhr.setRequestHeader('X-RapidAPI-Host','musclewiki.p.rapidapi.com');
xhr.onreadystatechange = () => {
	if(xhr.readyState == 4 && xhr.status == 200) {
		const response = JSON.parse(xhr.responseText)
		res = response
		// console.log(response)
	}	
}
xhr.send();
const div = document.getElementById('my-div');
var addhtml;

document.getElementById('search-btn').addEventListener("click",function(e){
	e.preventDefault();
	const str = document.getElementById('search-text').value;
	if(str !== ""){
		let res2 = res.filter(o => o.Category === str);
		if(res2.length > 0){
			console.log('results found');
			// console.log(res2.length);
			div.innerHTML = "";
			addhtml = "";
			for(var i = 0;i<res2.length;i++){
				addhtml = addhtml + '<div class="col-lg-3"><div class="card-header"><h2>Category:'+ res2[i].Category+'</h2></div><div class="card-body"><p>Difficulty : '+ res2[i].Difficulty+'</p> <p>Force : '+ res2[i].Force+'</p> <p>Details : '+ res2[i].details+'</p> <p>exercise_name : '+ res2[i].exercise_name+'</p> <p>steps : '+ res2[i].steps+'</p> <video  width="320" height="240" src=' + res2[i].videoURL + ' controls autoplay></video></div></div>'
			}
			
			div.innerHTML = addhtml;
		}else{
			alert("exercise not found");
		}
	}else{
		alert("Please input string");
	}
});