import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import SearchBar from "./components/SearchBar";

function App() {
  const [locations, setLocations] = useState([
    { city: "Tel Aviv", countryCode: "IL", key: "215854", isFavorite: true },
    { city: "Miami", countryCode: "US", key: "347936", isFavorite: true }
  ]);

  let currentDate = new Date();
  const [fiveDays, setFiveDays] = useState([
    {
      date: currentDate.setDate(currentDate.getDay() + 1),
      min: "17",
      max: "37",
      details: "sunny day"
    },
    {
      date: currentDate.setDate(currentDate.getDay() + 2),
      min: "17",
      max: "37",
      details: "rainy day"
    },
    {
      date: currentDate.setDate(currentDate.getDay() + 3),
      min: "17",
      max: "37",
      details: "rainy day"
    },
    {
      date: currentDate.setDate(currentDate.getDay() + 4),
      min: "17",
      max: "37",
      details: "windy day"
    },
    {
      date: currentDate.setDate(currentDate.getDay() + 5),
      min: "17",
      max: "37",
      details: "windy day"
    }
  ]);
  const [currentTemp, setCurrentTemp] = useState({
    temperature: "28",
    details: "cloudy day"
  });

  const currentTemperature = key => {
    if (key === "215854") {
      setCurrentTemp({ temperature: "28", details: "cloudy day" });
      return;
    }
    setCurrentTemp({ temperature: "21", details: "rainy day" });
  };

  const fiveD = key => {
    if (key === "215854") {
      setFiveDays([
        {
          date: currentDate.setDate(currentDate.getDay() + 1),
          min: "17",
          max: "37",
          details: "sunny day"
        },
        {
          date: currentDate.setDate(currentDate.getDay() + 2),
          min: "17",
          max: "37",
          details: "rainy day"
        },
        {
          date: currentDate.setDate(currentDate.getDay() + 3),
          min: "17",
          max: "37",
          details: "rainy day"
        },
        {
          date: currentDate.setDate(currentDate.getDay() + 4),
          min: "17",
          max: "37",
          details: "windy day"
        },
        {
          date: currentDate.setDate(currentDate.getDay() + 5),
          min: "17",
          max: "37",
          details: "windy day"
        }
      ]);
      return;
    }
    setFiveDays([
      {
        date: currentDate.setDate(currentDate.getDay() + 1),
        min: "15",
        max: "32",
        details: "sunny day"
      },
      {
        date: currentDate.setDate(currentDate.getDay() + 2),
        min: "17",
        max: "28",
        details: "rainy day"
      },
      {
        date: currentDate.setDate(currentDate.getDay() + 3),
        min: "17",
        max: "26",
        details: "rainy day"
      },
      {
        date: currentDate.setDate(currentDate.getDay() + 4),
        min: "15",
        max: "29",
        details: "windy day"
      },
      {
        date: currentDate.setDate(currentDate.getDay() + 5),
        min: "12",
        max: "30",
        details: "windy day"
      }
    ]);
    return;
  };

  

  async function getAutoComplete (searchQuery,apiKey) {
   
    const response = await fetch(`https://create-react-app-with-server.glitch.me/locations/v1/cities/autocomplete?q=${searchQuery}&apiKey=${apiKey}`);
    if (response.ok){
      const json=await response.json();
      console.log(json);
      return json;
    }
    
    alert ('error')    
  
  }

  let apiKey="abbabcb1122111111";
  let searchQuery="tel aviv"
 debugger
getAutoComplete(searchQuery,apiKey)



  const pickCity = name => {
    let cityKey = locations.find(
      cn => cn.city.toLowerCase() === name.toLowerCase()
    );

    currentTemperature(cityKey.key);
    fiveD(cityKey.key);
    changeTitle(cityKey.city);
  };

  const [title, setTitle] = useState("Tel-Aviv");

  const changeTitle = newTitle => {
    setTitle(newTitle);
  };

  //https://www.w3schools.com/jsref/jsref_tolocalestring.asp    get time 19.2.2020, 16:30:42

  // style={{textAlign:"center"}}
  return (
    <div className="container-md " >

      <Router>
       
        <NavBar />
        
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return ( <div className="justify-center">
                <Home
                  title={title}
                  fiveDays={fiveDays}
                  currentTemp={currentTemp}
                  currentDate={currentDate}
                  pickCity={pickCity}
                />
                </div>
              );
            }}
          />
          

          <Route
            exact
            path="/favorites"
            component={() => {
              return <Favorites />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
