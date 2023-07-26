export const addRep = (r) => {
    return {
      type: "ADD_REP",
      payload: r,
    };
  };

  export const addRep1 = (r) => {
    return {
      type: "ADD_REP1",
      payload: r,
    };
  };

  export const addRep2 = (r) => {
    return {
      type: "ADD_REP2",
      payload: r,
    };
  };

  export const addRep3 = (r) => {
    return {
      type: "ADD_REP3",
      payload: r,
    };
  };

  
 

  export const nextQuestion = () => {
    return {
      type: "NEXTQ",
      
    };
  };
  
  export const initQuestion = () => {
    return {
      type: "INIT_Q",
      payload: {
        currentQuestionIndex:0,
        resultat:[]
      }
      
    };
  };