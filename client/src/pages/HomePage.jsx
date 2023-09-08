import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from '../components/Card'
import "./HomePage.css"

function HomePage() {
    const [phones, setPhones] = useState([]);

    async  function getAllPhones () {
        try {
            const response = await axios.get(`api/phones`);
            console.log(response)
    
            
            setPhones(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }


    async  function handleClick () {
        try {
            const response = await axios.get(`/phones`);
            console.log(response)
    
            
            setPhones(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

useEffect(() => {
   getAllPhones();
  }, []);


  if (!phones) return <div className="Loading"> Loading..</div>;


  return (
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            {phones.map((phone) => {
                return (
                  <Card key={phone._id} phone={phone}/>
                )
              }
            )}
      
          </ul>
        </div>
      </div>
  )
}

export default HomePage
