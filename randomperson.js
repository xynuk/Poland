http.get("https://randomuser.me/api/", function(response) {
    let data = JSON.parse(response); 
    let person = data.results[0]; 
    
    print("Name: " + person.name.first + " " + person.name.last);
    print("Email: " + person.email);
    print("Phone: " + person.phone);
    print("Address: " + person.location.street.number + " " + person.location.street.name + ", " + person.location.city + ", " + person.location.state + ", " + person.location.country);
});
