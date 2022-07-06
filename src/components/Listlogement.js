import React, { Component } from "react";
import  "react-router-dom";
import Logement from "./Logement";


class Listlogement extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
            logements:[ 
                {
                    nom:'logement1',
                    type:'studio',
                    id:1
                },
                {
                    nom:'logement2',
                    type:'appartement',
                    id:2   
                },
                {
                    nom:'logement3',
                    type:'villa',
                    id:3,    
                }
            ]
        }
    }

    render() {
        return (
            
            <div>
                {
                    this.state.logements.map((el, index) => (
                        <Logement value={el} key={index} />
                    ))
                }
            </div>

        )
    }

}
export default Listlogement