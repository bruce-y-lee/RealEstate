import React from 'react';


// export default (props) => {
export default ({ input, label,type, options,meta:{error, touched}}) => {
    // console.log(meta);
    
    // console.log(type);

   
    const renderInput = ()=>{

        // if(type=="text"){
        //     return(
        //         <input {...input} style={{marginBottom:'5px', width:'200px',marginLeft:'30px'}} />
        //     )
        // }

        switch(type){
            case "text":
            
                return (
                    <input {...input} style={{marginBottom:'5px', width:'200px',marginLeft:'30px'}} />
                )
            case "select":
            return(
                <select {...input} style={{marginBottom:'5px', width:'200px',marginLeft:'30px'}} >
                <option></option>
                {options.map(i =>{
                    return <option key={i} value={i}>{i}</option>
                })}
                    
                </select>
            )
            case "textarea":
            return(
                <textarea {...input} style={{marginBottom:'5px', width:'500px',marginLeft:'30px'}} row='5' column='200'></textarea>
            )
          
            default:
                return null;   
        }
    } 
    return (
        <div>
            <label style={{marginLeft:'30px'}}>{label}</label>
            {/* {...input} == onBlur={input.onBlur} onChange={input.onChange}.... */}
            {renderInput()}
            <div className="red-text" style={{marginBottom: '20px',color:'red'}}>
                {touched && error}
            </div>
            
        </div>
    )
}