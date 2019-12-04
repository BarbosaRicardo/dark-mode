import React, { useState } from 'react'

//the key should have a value of dark mode
//InitialValue should have a value of boolean 

const useLocalStorage = (key, initialValue) => {
   const [darkMode, setDarkMode] = useState(() => {
      const boolFromLocal = localStorage.getItem(key)

      return boolFromLocal ? JSON.parse(boolFromLocal) : initialValue
   })

   const setterFunction = param => {
      localStorage.setItem('dark-mode', JSON.stringify(param))
      setDarkMode(param)
   }
   return [darkMode, setterFunction]
}

export default useLocalStorage 