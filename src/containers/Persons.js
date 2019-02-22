//paso 3

import React, { Component } from 'react';
import {connect} from 'react-redux';//paso 3.1
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Mike',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.crear} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.borrar(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
   
    return {
        people:state.persons
    }
}//paso 3.3 (people recibe la propiedad de initialState para el render)
 
const mapDispatchToProps=(dispatch)=>{
    return {
        crear:()=>{
            return dispatch({type:'ADD_PERSON'})
        },
        borrar:(id)=>{
            return dispatch({type:'DELETE_PERSON',idpersona:id})
        }
    }
}//paso 3.4


//3.2 
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
//export default connect ("subscripciones","acciones")("lo que se exporta a ap.js" - Funcion de alto nivel)