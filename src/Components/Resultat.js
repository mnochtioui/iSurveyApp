import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Excel2Export from './Excel2Export';

const Resultat = () => {
    let resultat = useSelector((state) => state.reducer.resultat);
   //console.log(resultat);
    const navigate=useNavigate();
    resultat=(resultat.length>0)?resultat.filter((rs)=>{return rs.q!=="" || rs.r.length!==0}):[];
    let resultat2=resultat.map((res)=>{
      //let rr=res.r.map((ri, index)=>{return {`r_${index}` : ri}});
      let rr2=res.r.reduce((result, item, index)=>{
        result["r_"+index] = item; //a, b, c
        return result;
      }, {});
      return {"qid": (res.qid+1), "q": res.q, ...rr2}
        }
      )
      //console.log(resultat2);
    let getDateTime = () => {
      let today = new Date();
      let date_raw = today.getDate();
      let month_raw = today.getMonth() + 1;
      //let year = today.getFullYear();
      let day, month
  
      if (date_raw<10)  {  day ="0"+date_raw.toString()} else {  day =date_raw.toString()}
      if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}

      // console.log(today.getFullYear()); 
      // console.log((today.getMonth() + 1)); 
      // console.log(today.getDate());
      // console.log(today.getHours());  
      // console.log(today.getMinutes()); 
      // console.log(today.getSeconds());
      return today.getFullYear() +""+ month  +""+  day +""+today.getHours()  +""+  today.getMinutes()  +""+  today.getSeconds();
    };
    
  return (
    <div><h2>Resultat</h2><hr />
<Excel2Export excelData={resultat2} fileName={"ISurveyReport_"+getDateTime()} />
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