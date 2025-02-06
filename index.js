
 const apiKey = "373f642b61c8fdd53c7b5360a8c7a5c6"; 
  

  const input = document.querySelector("#searchtext");
  
  const searchButton = document.querySelector("#searchbutton");
  // let click = 1;
  searchButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    if(document.querySelector("#error"))
    { 
      document.querySelector("#error").remove();
      
    }
    
    
    const city = input.value.trim();
      console.log(city);
    // Check if the city name is not empty
    if (city) {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  
      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          console.log(data); 

          // Erasing the previous data:
          document.querySelector("#city").textContent = "";
          document.querySelector("#temp").textContent = "";
          document.querySelector("#main").textContent = "";
          document.querySelector("#humidity").textContent = "";
          document.querySelector("#windspeed").textContent = "";
          document.querySelector("#visibility").textContent = "";
            

          // Adding new data 
          let cityName = data.name;
          let temp = data.main.temp.toFixed(0);
          let wind = data.wind.speed * 3.6;
          let weather = data.weather[0].main;
          let humidity = data.main.humidity;
          let visibility = data.visibility;

          
          document.querySelector("#city").textContent = cityName;
          document.querySelector("#temp").innerHTML = `${temp} &deg;C`;
          document.querySelector("#main").textContent = weather;
          document.querySelector("#humidity").textContent = `Humidity: ${humidity}%`;
          document.querySelector("#windspeed").textContent = `Wind Speed: ${wind.toFixed(2)} Km/hr`;
          document.querySelector("#visibility").textContent =`Visibility: ${visibility/1000} Km/hr` ;
  
        })
        .catch(error => {
         
          let click = 1;
          
          if(click)
          {
           
            

             let newDiv = document.createElement("div");
             newDiv.setAttribute("id","error")
             newDiv.innerHTML = "<p>Error Occured While Fetching The Data: <br>Please Enter The Correct City  Name  </p> ",error;
             const mainHtml = document.querySelector(".maincontent");
            
             const errorDiv = document.querySelector("#errordiv");
            
             errorDiv.appendChild(newDiv);
            
            
            
          }else{
            searchButton.addEventListener("click",()=>{});
          }
          
          


        });
    } 
    else {
      alert("Please enter a city name.");
      // Erasing the previous data:
      document.querySelector("#city").textContent = "";
      document.querySelector("#temp").textContent = "";
      document.querySelector("#main").textContent = "";
      document.querySelector("#humidity").textContent = "";
      document.querySelector("#windspeed").textContent = "";
      document.querySelector("#visibility").textContent = "";
    }
  });
  
  
