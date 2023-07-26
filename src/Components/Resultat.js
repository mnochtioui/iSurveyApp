import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Resultat = () => {
    let resultat = useSelector((state) => state.reducer.resultat);
    //console.log(resultat.length);
    const navigate=useNavigate();
    resultat=(resultat.length>0)?resultat.filter((rs)=>{return rs.q!=="" || rs.r.length!==0}):[];
    
  return (
    <div><h2>Resultat</h2><hr />

        {
        ((resultat.length>0))?
           resultat=resultat.map((rs2, index)=><div key={index} >{rs2.qid+1} /<strong>{rs2.q}</strong> 
           
           <br />
            {(rs2.r)?rs2.r.map((rr)=><>{rr}<br /></>):rs2.r}
           </div>)
             //console.log(resultat) .map((x)=><><i>{x}</i><br /></>)
        :
        <div className="alert alert-warning" >No results!</div>  
        }
          <hr />
          <Button onClick={()=>navigate("/survey")} >Retour</Button> 
    </div>
  )
}

export default Resultat