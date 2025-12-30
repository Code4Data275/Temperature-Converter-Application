import { useState } from "react"

function App() {
    const [inputs, setInputs] = useState({
      currentDegree: "",
      currentType: "",
      targetDegree: "",
      targetType: ""
    });

    let [celcius, setCelcius] = useState(0);
    let [fahrenheit, setFahrenheit] = useState(0);
    let [kelvin, setKelvin] = useState(0);
    
    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setInputs((values)=>({...values, [name]:value}))
    }

    const convertTemp = () =>{
      if(inputs.currentType.toLowerCase() === "fahrenheit"){
        if(inputs.targetType.toLowerCase() === "fahrenheit"){
          alert('Please select a different degree type');
        }else if(inputs.targetType.toLowerCase() === "celcius"){
          setFahrenheit(inputs.currentDegree);
          celcius = (fahrenheit - 32) / (9/5);
          celcius = Math.ceil(celcius * 100) / 100;
          setCelcius(celcius);
          document.getElementById('display').innerText = `Result:\n${celcius}°C`
        }else if(inputs.targetType.toLowerCase() === "kelvin"){
          setFahrenheit(inputs.degree);
          kelvin = (fahrenheit + 459.67) * (5/9);
          kelvin = Math.ceil(kelvin * 100) / 100;
          setKelvin(kelvin);
          document.getElementById('display').innerText = `Result:\n${kelvin}K`
        }else{
          alert('Please select some degree type');
        }
      }

      if(inputs.currentType.toLowerCase() === "celcius"){
        if(inputs.targetType.toLowerCase() === "celcius"){
          alert('Please select a different degree type');
        }else if(inputs.targetType.toLowerCase() === "fahrenheit"){
          setCelcius(inputs.currentDegree);
          fahrenheit = (celcius * (9/5)) + 32;
          fahrenheit = Math.ceil(fahrenheit * 100) / 100;
          setFahrenheit(fahrenheit);
          document.getElementById('display').innerText = `Result:\n${fahrenheit}°F`
        }else if(inputs.targetType.toLowerCase() === "kelvin"){
          setCelcius(inputs.currentDegree);
          kelvin = Number(celcius) + 273.15;
          kelvin = Math.ceil(kelvin * 100) / 100;
          setKelvin(kelvin);
          document.getElementById('display').innerText = `Result:\n${kelvin}K`
        }else{
          alert('Please select some degree type');
        }
      }

      if(inputs.currentType.toLowerCase() === 'kelvin'){
        if(inputs.targetType.toLowerCase() === "kelvin"){
          alert('Please select a different degree type');
        }else if(inputs.targetType.toLowerCase() === "celcius"){
          setKelvin(inputs.currentDegree);
          celcius = Number(kelvin) - 273.15;
          celcius = Math.ceil(celcius * 100) / 100;
          setCelcius(celcius);
          document.getElementById('display').innerText = `Result:\n${celcius}°C`
        }else if(inputs.targetType.toLowerCase() === "fahrenheit"){
          setFahrenheit(inputs.degree);
          fahrenheit = (kelvin * (9/5)) - 459.17;
          fahrenheit = Math.ceil(fahrenheit * 100) / 100;
          setFahrenheit(fahrenheit);
          document.getElementById('display').innerText = `Result:\n${fahrenheit}°F`
        }else{
          alert('Please select some degree type');
        }
      }
    }

    return(
      <>
        <div className="bg-gray-300 h-screen pt-20">
          <div className="bg-white w-300 h-100 ml-40 mt-10 pt-10 shadow-2xl rounded-2xl">
            <h2 className="p-15 font-mono text-2xl">Temperature Converter</h2>
            <div className="flex gap-30 pl-10">
                <div>
                  <p id="unit">Current Degree</p>
                  <input type="text" name="currentDegree" value={inputs.currentDegree} className="border border-gray-400 w-50 h-9 mt-4 p-5" onChange={handleChange}/>
                </div>
                <div>
                  <p id="type">Current Type</p>
                  <select name="currentType" value={inputs.currentType} className="border border-gray-400 w-50 h-9 pl-5 mt-4" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="celcius">Celcius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                  </select>
                </div>
                <div>
                  <p id="type">Target Type</p>
                  <select name="targetType" value={inputs.targetType} className="border border-gray-400 w-50 h-9 pl-5 mt-4" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="celcius">Celcius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                  </select>
                </div>
                <div>
                  <button className="text-white bg-blue-500 w-35 h-10 rounded mt-9" onClick={convertTemp}>Convert</button>
                </div>
            </div>
            <div id='display' className="text-2xl mt-10 ml-10"></div>
          </div>
        </div>
      </>
    )
}

export default App
