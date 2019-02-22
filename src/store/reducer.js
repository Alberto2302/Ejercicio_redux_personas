import person from "../components/Person/Person";

//paso 2.
const initialState = {
    persons: []
}//paso 2.1

const reducer = ( state = initialState, action ) =>{ //siempre se pone "state= initialState"
    switch (action.type){
        
        case 'ADD_PERSON':
         
                    const newPerson = {
                        id: Math.random(), // not really unique but good enough here!
                        name: 'Mike',
                        age: Math.floor( Math.random() * 40 )
                    }
                    return { 
                        persons: state.persons.concat(newPerson)
                    } 
              
        case 'DELETE_PERSON':
        console.log(action.idpersona)
            return{persons:state.persons.filter(person => person.id !== action.idpersona)}
        default: 

            return state;

    }//paso 2.4 crear switch
    

}//paso 2.2

export default reducer;//paso 2.3