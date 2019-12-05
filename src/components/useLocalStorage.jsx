import React, { useState } from 'react'

//the key should have a value of dark mode
//InitialValue should have a value of boolean 

/**
 * Manages useLocalStorage
 * @param {*} key 
 * @param {*} initialValue 
 * returns custom hook (function that holds a hook
 * inside) 
 * @return [darkMode, setterFunction]
 */

 //localStorage in general is key:value pairs
 //darkMode :L
const useLocalStorage = (key, initialValue) => {

   //invoking the useState function to return a value for darkMode
   //through React. 
   //darkMode will receive it's value from the argument passed into useState 
   const [darkMode, setDarkMode] = useState(() => {
      //useState passes a function as a value using the ES6 anonymous 
      //arrow function notation (anonymous: empty ())


       //conditional to check and see if something is in darkMode 
       //there is nothing in darkMode at the beginning
       //window is not necessary in window.localStorage 
       //recall that 'key' = darkMode 
      const boolFromLocal = localStorage.getItem(key)

      //local is either T or F
      //does local have a value? then return local. else return 
      //initialValue (which is false)
      //checks to see if key in localStorage exists
      return boolFromLocal ? JSON.parse(boolFromLocal) : initialValue
   })
   
   //function that will change what is in the custom hook 
   //returns a hook 
   //only one parameter is passed since setDarkMode only has one argument
   const setterFunction = param => {
      localStorage.setItem('dark-mode', JSON.stringify(param))
      setDarkMode(param)
   }
   return [darkMode, setterFunction]
}

export default useLocalStorage;