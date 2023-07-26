import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addRep1 } from '../Redux1/action';

const CheckBox = (enonce) => {
     
    //consoele.log("enonce check >> "+enonce);
    let randy=Math.random();
    //let {qid, name, rep}=enonce;
    const dispatch=useDispatch()
    const [listChecked, setListChecked] = useState([]);

   

  const handleCheck = (event) => {
    var updatedList = [...listChecked];
    if (event.target.checked) {
      updatedList = [...new Set([...listChecked, event.target.value])];
       
    } else {
      updatedList.splice(listChecked.indexOf(event.target.value), 1);
    }
    setListChecked(updatedList);
    let rep={"qid": enonce.qid, "q": enonce.name, "r" : updatedList};
    //console.log("listchecked >> "+updatedList);
   
    dispatch(addRep1(rep));
  };

  return (<Form.Group>{enonce.rep.map((o, index)=>
  <div key={(index+1)*randy} >
     <Form.Check id={(index+1)*randy}  type="checkbox" name={enonce.name} label={o}   value={o} checked={(listChecked.length>0)?listChecked.indexOf(o)>=0:false} onChange={(event)=>handleCheck(event)}  />
     </div>)}</Form.Group>
    
    
  )
}

export default CheckBox