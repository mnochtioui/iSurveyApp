import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  nextQuestion, initQuestion} from '../Redux1/action'
import Question from './Question'
//import Resultat from './Resultat'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
 //addRep,

const SurveyApp = () => {
//, useDispatch
    const title=useSelector((state)=>state.reducer.title);
    const survey=useSelector((state)=>state.reducer.questions);
    const qi = useSelector((state) => state.reducer.currentQuestionIndex);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const currentQ=survey[qi];
    //console.log("currentQ >> "+survey.length);

    const HandleNextQ=()=>{
      //dispatch(addRep());
      //e.preventDefault();
      
      dispatch(nextQuestion());
    }

    const handleINIT = () => {
         
      dispatch(initQuestion());
    };

  return (
    <div>
    <h1>{title} ({        survey.length    })</h1><hr />
    <Form >
    
    {(currentQ)?
    <><Question id={qi}  q={currentQ} />
    <Button id="btn_next" variant="primary"  onClick={()=>HandleNextQ()} >Next</Button> </>
    :
    <Button onClick={()=>{navigate("/result")}} >voir le resultat</Button> 
    }
    
    <Button variant="secondary" onClick={()=>handleINIT()} >Reinitialiser</Button>
    <Button variant="info" onClick={()=>navigate("/")} >Sortir</Button>
    
    </Form>
    </div>
  )
}

export default SurveyApp