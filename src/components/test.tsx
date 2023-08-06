import React, { useState } from 'react'
import reactLogo from './assets/react.svg'

function TestView() {
  
  const selectItems = [
    {
      title: "Gus"
    },
    {
      title: "Hank"
    },
    {
      title: "Walter"
    },
    {
      title: "Jessie"
    },
    {
      title: "Mike"
    },
  ]



  return (
    <div className="">
      
      <div className="">
        { 
          selectItems.map((item, index) => {
            return <div key={index}>{ item.title }</div>
          })
        }
      </div>

    </div>
  )
}

export default TestView
