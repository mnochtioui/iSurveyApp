import React from 'react'
import {Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addRep3 } from '../Redux1/action';

const LongText = (props) => {
   
    const dispatch=useDispatch()

    const handleChange=(x)=>{
        //alert(x)
        const rep={
            "qid": props.qid,
          "q": props.name,
          "r" : [x]
        }
        dispatch(addRep3(rep));
      }


  return (
     
    <Form.Control  name={props.name}  as="textarea" rows={3}  onBlur={(e)=>handleChange(e.target.value)} /> 
  )
}

export default LongText