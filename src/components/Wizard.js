import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = { 
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleChange = (e) => {
        let {name, value}=e.target
        this.setState ({[name]: value})
    }

    addHouse = ( ) => {
        let {name, address, city, state, zip}= this.state
        console.log(name, address, city, state, zip)

        axios.post ('/api/houses', {name, address, city, state, zip})
        .then(res => {
            this.props.addHouse(res.data)
        })
    }


    render() {
        return (
            
            <div className="dashboard-content">
                <header id="wizard-header"><h2>Add New Listing</h2>
                <Link to='/'><button id='cancel-button'>Cancel</button></Link></header>
                <h4>Property Name</h4>
                <input name="name" onChange={e => {this.handleChange(e)}}/>
                <h4>Address</h4>
                <input name="address" onChange={e => {this.handleChange(e)}}/>
                <div className="address-container">
                <h4>City</h4>
                <input name="city" onChange={e => {this.handleChange(e)}}/>
                <h4>State</h4>
                <input name="state" onChange={e => {this.handleChange(e)}}/>
                <h4>Zip</h4>
                <input name="zip" onChange={e => {this.handleChange(e)}} />
                </div>
                <button className='next-button' onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
        
}