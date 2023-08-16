const xhr = new XMLHttpRequest();
var res;
xhr.open('GET', 'https://exercisedb.p.rapidapi.com/exercises');
xhr.setRequestHeader('X-RapidAPI-Key','69b5c25eecmsh72d9f07fc3dfc60p148098jsn8c6634af6304');
xhr.setRequestHeader('X-RapidAPI-Host','exercisedb.p.rapidapi.com');
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
		let res2 = res.filter(o => o.target === str);
		if(res2.length > 0){
			console.log('results found');
			// console.log(res2.length);
			div.innerHTML = "";
			addhtml = "";
			for(var i = 0;i<res2.length;i++){
				addhtml += '<div class="col-lg-1 border rounded p-3" style="border: 10px>' +
                           '<div class="card-header"><h2>' + res2[i].name + '</h2></div>' +
                           '<div class="card-body">' +
                           '<p>Muscle: ' + res2[i].target + '</p>' +
                           '<p>Body Part: ' + res2[i].bodyPart + '</p>' +
                           '<p>Equipment: ' + res2[i].equipment + '</p>' +
                            '<img src='+res2[i].gifUrl+'/>'
                            
            }
            
			div.innerHTML = addhtml;
		}else{
			alert("exercise not found");
		}
	}else{
		alert("Please input string");
	}
});