import React from 'react'
import Card from './Card' 
import data from './FeaturesAPI.js' 
import "./Features.css"

const Features = () => {
  return (
    <>
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Features</h4>
                    <h1>MY SKILLS THAT I AM WORKING ON</h1>
                </div>
                <div className='content grid'>
                    {data.map((val,index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} link={val.link}/>
                    })}
                    
                </div>
            </div>
        </section> 
        <h1></h1>
    </>
  )
}

export default Features
