import { useState } from 'react';
import style from './style.css';
function App_country_form() {
    
    const [countriesList,setCountriesList] = useState([]);
    const [capitalsList,setCapitalsList] = useState([]);
    const [populationsList,setPopulationsList] = useState([]);
    const [countryName, setCountryName] = useState();
    const [countryCapital, setCountryCapital] = useState();
    const [countryPopulation, setCountryPopulation] = useState(0);
    
    

    const [countryValid, setCountryValid] = useState(false);
    const [capitalValid, setCapitalValid] = useState(false);
    const [populationValid, setPopulationValid] = useState(false);
    
    /*
    console.log("Maa: " + countryValid);
    console.log("Pääkaupunki: " + capitalValid);
    console.log("Asukasluku: " + populationValid);
    */
    
    const[masterTable, setMasterTable] = useState("");
    
    
    const countryNameChanged = (event) => {
            setCountryValid(false);
            
            let i = event.target.value;
            
            console.log("Teksti:" + i);
            i.length > 4 || !i=="" ? setCountryValid(true) : setCountryValid(false)
            setCountryName(event.target.value);

        }

    
    
    const countryCapitalChanged = (event) => {
        setCapitalValid(false);
        
        let i = event.target.value;
        
        console.log("Teksti:" + i);
        i.length > 4 || !i=="" ? setCapitalValid(true) : setCapitalValid(false);
        setCountryCapital(event.target.value);
        

    }
    const countryPopulationChanged = (event) => {
        setPopulationValid(false);
        
        var i = event.target.value;
        console.log("Teksti:" + i);
        if(i > 25) {
            console.log("Populaatio on suurempi kuin 25 miljoonaa");
        }
        else {
            console.log("Populaatio on pienempi kuin 25 miljoonaa")
        }
        i > 1 && i < 25 && !i==0 ? setPopulationValid(true) : setPopulationValid(false);
        setCountryPopulation(event.target.value);
    }
    
    const addCountry = () => {
            //addCountry()
            countriesList.length == 0 ? setCountriesList([countryName]) : setCountriesList([...countriesList,countryName]);
            let countryname_length = countryName.length < 3;
            if(countryname_length < 6) {
                setCountryValid(false);
            }
            else {
                setCountryValid(true);
            }
            console.log("Countries list:n pituus: " + countriesList.length)
            console.log("Added " + [countryName] + " to countries list");
            console.log('countries list: ' + countriesList);
    }

    const addCountryCapital = () => {
        //addCountryCapital();
        let cap_length = countryCapital.length;
        console.log("Merkkijonon  " + countryCapital + " pituus on " + cap_length);
        if(cap_length <= 0) {
            console.log("syötetyn pääkaupunkimerkkijononpituus: " + [countryCapital.length] );
            setCapitalValid(false);
        }
        else {
            setCapitalValid(true);
        }
        capitalsList.length == 0 ? setCapitalsList([countryCapital]) : setCapitalsList([...capitalsList,countryCapital]);

        console.log("Added " + [countryCapital] + " to capitals list");
        console.log('Capitals list: ' + capitalsList);
    }

    const addCountryPopulation = () => {
        //addCountryPopulation();
        if([countryPopulation] <= 0 || [countryPopulation] > 25 || [countryPopulation] == " " || [countryPopulation] == "") {
            console.log("verrattava country population on " + [countryPopulation]);
            setPopulationValid(false);
        }
        else {
            console.log("verrattava country population on " + [countryPopulation]);
            setPopulationValid(true);
        }
        populationsList.length == 0 ? setPopulationsList([countryPopulation]) : setPopulationsList([...populationsList, countryPopulation]);

        console.log("Added " + [countryPopulation] + " to populations list");
        console.log('Populations list: ' + populationsList);    
        
    }

    const handleSubmit = (event) => {
        setCountryValid(false);
        setCapitalValid(false);
        setPopulationValid(false);

        console.log("Painettiin Tallenna");
        if(countryValid, capitalValid, populationValid) {
            

            console.log("TARKISTETAAN ONKO KAIKKI KUNNOSSA?");
            console.log("Maa lisäyksen jälkeen: " + countryValid + " , Maa oli: " + countryName);
            console.log("Pääkaupunki lisäyksen jälkeen: " + capitalValid + " , Pääkaupunki oli: " + countryCapital);
            console.log("Asukasluku lisäyksen jälkeen: " + populationValid + " , Asukasluku oli: " + countryPopulation);
            
            
            if(cap_length < 6) {
                console.log("syötetyn pääkaupunkimerkkijononpituus: " + [countryCapital.length] );
                setCapitalValid(false);
            }
            else {
                setCapitalValid(true);
            }
        
            //addCountryPopulation();
            if(countryPopulation < 0 || countryPopulation > 25 || countryPopulation == " " || countryPopulation == "") {
                console.log("verrattava country population on " + [countryPopulation]);
                setPopulationValid(false);
            }
            else {
                console.log("verrattava country population on " + [countryPopulation]);
                setPopulationValid(true);
            }
            
        }
        if(!countryValid) {
            alert("Country still not valid.");
        }
        if(!capitalValid) {
            alert("Capital still not valid.");
        }
        if(!populationValid) {
            alert("Population still not valid.");
        }
        
            
        
            event.preventDefault();
    }
    const handleClearSubmit = (event) => {
        
        
        setCountryName("");
        setCountryCapital("");
        setCountryPopulation("");
        setCountriesList([]);
        setCapitalsList([]);
        setPopulationsList([]);
        setMasterTable("");
        event.preventDefault();

    }
    
    const clearAll = () => {
        console.log("clear all painettu");
        setMasterTable("");
        setCountryValid(false);
        setCapitalValid(false);
        setPopulationValid(false);

    }
    return(
        <div>
            
            <form onSubmit={(evt) => handleSubmit(evt)}>
            
                
                <label>
                    Type country, capital and population to add a country and its information
                    <br>
                    </br>
                    <input 
                        placeholder="Country..."
                        type="text" 
                        value={countryName} 
                        name="country" 
                        onChange={(evt) => countryNameChanged(evt)}/>
                        

                    <input  
                        placeholder="Capital..."
                        type="text"  
                        value={countryCapital} 
                        name="capital" 
                        onChange={(evt) => countryCapitalChanged(evt)}/>
                        
                    <input  
                        placeholder="Population in millions..."
                          
                        value={countryPopulation} 
                        name="population" 
                        onChange={(evt) => countryPopulationChanged(evt)}/>
                        

                    <input type="submit" value="Tallenna" 
                    />
                    
                    
                </label>
                
                    
            </form>
            <form onSubmit={(evt) => handleClearSubmit(evt)}>
            <input type="submit" 
                    value="Clear all"
                    onClick={clearAll} />
            </form>
            <label for="countries">Table of countries added:</label>
            <table>
        <th>Country</th>
                        
                        <td>   
                    {countriesList.map((value,index) => {
                        
                        return <option>{countriesList[index].toUpperCase()}</option>
                    })}
                    </td>
    
                        <th>Capital</th>
                        <td>
                        
                    {capitalsList.map((value,index) => {
                        return <option>{capitalsList[index].toUpperCase()}</option>
                    })}
                   </td>
                    
                        <th>Population (millions)</th>
                        
                    <td>    
                    {populationsList.map((value,index) => {
                        return <option>{populationsList[index]}</option>
                    })}
                    </td>
                    </table>;
            
        </div>
    )
}
export default App_country_form;
