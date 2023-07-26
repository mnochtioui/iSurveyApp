import React from 'react'
import {Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRep1 } from '../Redux1/action';

const Option = (enonce) => {
 
  const dispatch=useDispatch();
  //console.log("enonce >> "+enonce);
   let randy=Math.random();
  

  let {qid, name, rep}=enonce;
   //console.log("name >> "+name);
   //console.log("rep >> "+rep);

  const handleClick1=(e)=>{
     //console.log("e >> "+e.id);
    //console.log("e >> "+e.r);
      
     dispatch(addRep1(e))
  }


  return    (<Form.Group>{rep.map((o, index)=>
     <div key={(index+1)*randy} >
        <Form.Check id={(index+1)*randy} type="radio" name={name} label={o}   onChange={()=>handleClick1({"qid" : qid,"q" : name, "r": [o]})}  />
        </div>)}</Form.Group>) 
        
   
}
 
export default Option ;

