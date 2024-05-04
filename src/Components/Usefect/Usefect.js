import axios from "../Api/Api"
import { useState, useEffect } from "react"

export  const Usefect = (api, ...rest) => { 

    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
       axios
       .get(api)
       .then(res =>setdata(res))
       .catch(err=> console.log(err))
       .finally(()=>{setloading(false)})

    }, [...rest])
  
    return{data,loading}
}

