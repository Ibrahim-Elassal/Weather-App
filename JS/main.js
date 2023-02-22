var items = [];
// var myInput = document.getElementById('input');
var imgContainer = document.querySelector('.hero') ;

async function getWeather(countryName) {
    var myResponse  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${countryName}&days=3`);
    var finalResulte = await myResponse.json();
    items = finalResulte ;
    displayTodayWeather(countryName); 
}

// get SecondDay

const today = new Date()
let tomorrow =(new Date(today)) 
tomorrow.setDate(tomorrow.getDate() + 1)
var date1 = tomorrow.toLocaleDateString('en-us', { weekday:"long"});
console.log(date1);
// get ThirdDay

tomorrow.setDate(tomorrow.getDate() +1)
var date2 = tomorrow.toLocaleDateString('en-us', { weekday:"long"});
console.log(date2);


function displayTodayWeather(countryName){

    var catroona = ``;
        catroona += ` <div class="col-12 col-lg-4">
        <div class="today forecast">
          <div class="forecast-header  d-flex justify-content-between" id="today">
            <div class="day">${new Date().toLocaleDateString('en-us', { weekday:"long"})}</div>
            <div class="date">${new Date().toLocaleDateString('en-us', { day:"numeric" , month:"long" }).split(' ').reverse().join('')}</div>
          </div>
          <div class="forecast-content ms-4 py-4" id="current">
            <div class="location">${items.location.name}</div>
            <div class="degree d-flex  ">
              <div class="num ">${items.current.temp_c}<sup>o</sup>C </div>
              <div class="forecast-icon    d-flex align-items-center">
                <img class="w-100 " src="${items.current.condition.icon}" alt="">
              </div>
            </div>
            <div class="custom mb-4 ">${items.current.condition.text}</div>
            <span class="me-3">
              <img src="imgs/icon-umberella.png" alt="umberella">  20%
            </span>
            <span class="me-3">
              <img src="imgs/icon-wind.png" alt="wind"> 18km/h
            </span>
            <span>
              <img src="imgs/icon-compass.png" alt="compass">  East
            </span>
          </div>
        </div>
      </div>


      <div class="col-12 col-lg-4">
              <div class="forecast text-center"  >
                <div class= "forecast-header">
                  <div class="day " id="day2"> 
                   ${date1}
                  </div>
                </div>
                <div class="forecast-content py-5 mt-4">
                  <div class="forecast-icon mb-5">
                    <img src="${items.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
                  </div>
                  <div class="degree">
                    ${items.forecast.forecastday[1].day.maxtemp_c}<Sup>o</Sup>C
                  </div>
                  <small>
                    ${items.forecast.forecastday[1].day.mintemp_c}<Sup>o</Sup>
                  </small>
                  <div class="custom mt-3">
                    ${items.forecast.forecastday[1].day.condition.text}
                  </div>
                </div>
              </div>
            </div>


            <div class="col-12 col-lg-4">
            <div class="forecast text-center"  >
              <div class= "forecast-header">
                <div class="day ">
                  ${date2}
                </div>
              </div>
              <div class="forecast-content py-5 mt-4">
                <div class="forecast-icon mb-5">
                  <img src="${items.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
                </div>
                <div class="degree">
                ${items.forecast.forecastday[2].day.maxtemp_c}<Sup>o</Sup>C
                </div>
                <small>
                ${items.forecast.forecastday[2].day.mintemp_c}<Sup>o</Sup>
                </small>
                <div class="custom mt-3">
                ${items.forecast.forecastday[2].day.condition.text}
                </div>
              </div>
            </div>
          </div>
          
        `
        imgContainer.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + countryName + "')";
        document.getElementById('forecast').innerHTML = catroona ;
   
}


// // __________________

// var monthName ;
// var Fulldate =(items.forecast.forecastday[0].date);
// var monthNumber = Fulldate.split('-').splice(1,1).join();
// console.log(monthNumber)
// var dayNum = Fulldate.split('-').splice(2,1).join();

// function getDate(monthNumber) {
//     const month = new Date();
//     month.setMonth(monthNumber - 1);
//      monthName = `${dayNum}${month.toLocaleString('en-US', {  month: 'long',  })}`;
//      console.log(monthName) ;
//   }
  
//   console.log();

// __________________

// var myResponse  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${countryName}&days=3`);
    // var finalResulte = await myResponse.json();
    // items = finalResulte ;
    // displayTodayWeather(); 
    // console.log(finalResulte);


    // __________________________-


    // myInput.addEventListener('input' ,   function(eventInfo){
    //   let inputValue ;
    //   inputValue = eventInfo.target.value ;
    //   async function getWeather(inputValue){
    //     console.log(inputValue)
    //     if(inputValue == ' ' || inputValue == null){
    //       console.log('false');
    //       var myResponse  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo&days=3`);
    //       var finalResulte = await myResponse.json();
    //       items = finalResulte ;
    //       displayTodayWeather(); 
    //     }
    //     else {
    //       console.log(inputValue);
    //       var myResponse  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${inputValue}&days=3`);
    //       var finalResulte = await myResponse.json();
    //       items = finalResulte ;
    //       displayTodayWeather(); 
    //       }
    //     }
    // getWeather();
    
    // })