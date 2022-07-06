import React, { Component } from "react";
import  "react-router-dom";


class Listlogement extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        logement1: {
            Nom:'logement1',
            type:'studio',
            id:1
        },
        logement2:{
            Nom:'logement2',
            type:'appartement',
            id:2   
        },
        logement3:{
            Nom:'logement3',
            type:'villa',
            id:3,    
        }
      };
    }

    render() {
        return (
            
            <div>

            </div>

        )
    }

}
export default Listlogement