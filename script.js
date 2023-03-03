// TODO: add code here
window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            json.sort(function(a,b) {
                return a.hoursInSpace - b.hoursInSpace;
            });
            const astronaut = document.getElementById("container")
            for (let i = 0; i < json.length; i++) {
                astronaut.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>${json[i].hoursInSpace}</li>
                                <li>${json[i].active}</li>
                                <li>${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `;
            }
       });
    });
 });