import React, {Component} from 'react'


export default class House extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    
    render() {
        const {name, address, city, state, zip}= this.props
        return (
            <div className="house-container">
                <h3>Property Name: {name}</h3>
                <h3>Address: {address}</h3>
                <h3>City: {city}</h3>
                <h3>State: {state}</h3>
                <h3>Zip: {zip}</h3>
                
            </div>
        )

        
        
    }
        
}