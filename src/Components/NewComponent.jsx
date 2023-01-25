import React from 'react'

function NewComponent({formData}) {
    // const [toggle,setToggle] = useState(true);
  return (
    <div><div className='list'>
    {formData.myEmployees.map((value,index)=> {
    
      return (
    
          <div key={index} className='wholeDiv' >
        
         
           Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
    
    
    
    
        </div> 
        
      )
    })}
          </div>
        
          </div>
  )
}

export default NewComponent