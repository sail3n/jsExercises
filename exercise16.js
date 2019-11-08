function fetchData(){
   fetch(`https://api.github.com/users/rakimsth`)
   .then(response => response.json())
   .then(json => console.log(json.company))
}

fetchData();