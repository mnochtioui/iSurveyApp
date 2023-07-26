import React  from 'react'
import Option from './Option'
//import { useDispatch, useSelector } from 'react-redux';
import CheckBox from './Check';
 
//import { ListGroup } from 'react-bootstrap';
import LongText from './LongText';
 

const Question = (props) => {
    
     //onChange={(e)=>setNewTxt(e.target.value)}, {useState}
    //console.log(props.id); //<Option key={index}  rep={r} />
    const  {question, responseType, options} =props.q;
    //console.log(question+"*"+responseType+"*"+options.length);

     const randy=Math.random();//console.log("randy >> "+randy);

     const affichQs=()=>{
        switch(responseType){
            case "singleChoice" : 
                return <Option key={randy} qid={props.id} name={question} rep={options}  /> 
                // options.map((o, index)=>{return <ListGroup.Item><Option key={(index+1)*randy} name={question} rep={o} type={responseType} /></ListGroup.Item>})
            case "multipleChoice" : 
                return <CheckBox key={randy} qid={props.id} name={question} rep={options}  />
                // options.map((o, index)=>{return <ListGroup.Item><CheckBox key={(index+1)*randy} name={question} rep={o} type={responseType} /></ListGroup.Item>})
            case "longText" : 
                return <LongText qid={props.id} name={question} />
                // <Form.Control key={randy*randy}  as="textarea" rows={3} onChange={(e)=>setNewTxt(e.target.value)} />
            default : 
                return <>!!!</>
        }
     }
//({responseType})
  return (
     <>
        <h4>{props.id+1}/ {question} </h4>
       
            {affichQs()}
           
        {/*  <ListGroup variant="flush" ></ListGroup>{ 
            (options.length)?
                options.map((o, index)=>{return <><Option key={(index+1)*randy} name={question} rep={o} type={responseType} /><br /></>})
           :
           <Option key={randy*randy} name={question}  type={responseType} />
//  <Form.Control key={randy*randy} name={question} as="textarea" rows={3} onChange={(e)=>setNewTxt(e.target.value)} />
          
        } */}
                
          
        
       
     
  
         
         
         
        <hr />
         
        </>
        )
}

export default Question