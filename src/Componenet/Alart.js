import React from 'react'

const Alart = (props) => {

     const capitelige=(word)=>{
              const lower=word.toLowerCase()
              return lower.charAt(0).toUpperCase()+lower.slice(1)
     }
      
  return (
    <div style={{height:'50px'}}>
  {props.alart &&   
     <div  className={`alert alert-${props.alart.type} d-flex align-items-center `} role="alert">
        <div>
         <strong>{capitelige(props.alart.type)}: </strong> {props.alart.masg}
        </div>
      </div>
        
}
    </div>
  )
}
export default Alart;