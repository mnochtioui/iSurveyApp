import { SurveyData } from "../SurveyData"

const initialState={"currentQuestionIndex": 0,
    "resultat" : [],
    "title": SurveyData.title,
    "questions": [...SurveyData.questions] , 

};

 
const reducer=(state=initialState, {type, payload})=>{
    let resultat= [...state.resultat]
    let ind=-1;
    switch(type){
        case "ADD_REP": 
        return {
            ...state,
            "resultat" :  [...state.resultat, payload]
                        
        };

        case "ADD_REP1": 
        //console.log(payload)
        ind=(resultat.length>0)?resultat.findIndex((res)=> res.q===payload.q):-1;
        state.resultat=(ind>=0)? 
        state.resultat.map((res, index)=>(index===ind)?res=payload:res) 
                        :
                        state.resultat=[...state.resultat, payload]  ;
        return {
            ...state 
                        
        };
        // case "ADD_REP2": 
        
        // let ind1=(state.resultat.length>0)?state.resultat.findIndex((res)=> res.q===payload.q && res.r.length>0  && res.r.includes(payload.r[0])): -1;
        // //console.log("ind1 >> "+ind1)
        // ind=(state.resultat.length>0)?state.resultat.findIndex((res)=> res.q===payload.q ):-1;
        // //console.log("ind >> "+ind)
        // if(ind1===-1){
        //     if(ind>=0){
        //         state.resultat=state.resultat.map((res, index)=>{
        //             return (index===ind)? res.r.push(payload.r[0]) : res
        //         })
            
        //     // (index===ind)?res=payload:res);
        //     //     let {qid, q, r}=state.resultat[ind];
        //     //     //resultat[ind].r.push(payload.r )
        //     //     let ii=r.findIndex((rr)=>rr===payload.r);
        //     //     if(ii===-1){
        //     //         r.push(payload.r);
        //     //     }
        //     //     state.resultat=
        //     // {"qid":payload.qid, "q" : payload.q, "r" : [payload.r]}

        //     }else{
        //         console.log("payload >> "+payload.qid)
        //         console.log("resultat.length >> "+state.resultat.length)
        //        state={...state, resultat: [...state.resultat, payload]} 
               
        //        console.log("resultat.length >> "+state.resultat.length)
        //     }
                                
            

        // }   
        //return         state    ;

        case "ADD_REP3": 
        return {
            ...state,
            resultat : [...state.resultat, payload]
                        
        };
        
        case "NEXTQ": 
        return {
            ...state,
            currentQuestionIndex : state.currentQuestionIndex+1
        };
        
        case "INIT_Q": 
        return {
            ...state,
            currentQuestionIndex : 0,
            resultat : []        
        };

        default:
            return state;
    }
}

export default reducer