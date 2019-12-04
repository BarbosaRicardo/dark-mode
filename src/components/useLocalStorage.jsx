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
const useLocalStorage = (key, initialValue) => {

   //invoking the useState function to return a value for darkMode
   //through React. 
   //darkMode will receive it's value from the argument passed into useState 
   const [darkMode, setDarkMode] = useState(() => {
      //useState passes a function as a value using the ES6 anonymous 
      //arrow function notation (anonymous: empty ())

      /**
       * function scope 
       * denoted by the curly brackets on line 18
       */
      
      const boolFromLocal = localStorage.getItem(key)

      return boolFromLocal ? JSON.parse(boolFromLocal) : initialValue
   })

   const setterFunction = param => {
      localStorage.setItem('dark-mode', JSON.stringify(param))
      setDarkMode(param)
   }
   return [darkMode, setterFunction]
}

export default useLocalStorage;