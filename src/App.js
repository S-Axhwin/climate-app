import React, { useEffect, useState } from "react";

function App() {
  let URL = "http://api.weatherapi.com/v1/current.json?key=475658d171ce4be982d163211241201&q=London&aqi=no"
  const [temp, setTemp] = useState('loading');
  useEffect(()=>{
  async function getDate(){
      let promise = await fetch(URL);
      promise.json().then((json)=>{
        console.log(json);
        setTemp(json.current.temp_f)
      })
    }
    getDate();
  }, []);
  
  return (
    <div className="App">
      {temp}&deg;F
    </div>
  );
}

export default App;
