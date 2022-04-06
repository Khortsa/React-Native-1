import React, {useState, useEffect} from "react";
import {FlatList, Text} from "react-native";


export default function App(){
  const [countries, setCountries] = useState([]);


  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(
      (result) =>{
     setCountries(result);
      }
    )
  },[],)
  
  return(
    // <FlatList>
      <Text>Buzzer</Text>
    // </FlatList>
  )
}
