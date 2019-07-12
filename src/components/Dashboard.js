import React, {Component} from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor (props){
        super (props)
        this.state = {
            houses: [], 
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    componentDidMount () {
        axios.get('/api/houses' )
        .then(res => {
            console.log('got houses', res)
            this.setState({houses: res.data})
        })
        .catch(err => console.log(err))

    }
// render () {
    
//     let houseDisplay=this.state.houses.map(house => {
//         return (
        
//             <div className="house-container">  
//             <House 
//             key={house.id}
//             id= {house.id} 
//             name={house.name}
//             address={house.address} 
//             city={house.city}
//             state={house.state}
//             zip={house.zip}
//             />
//             </div>
//     )})
        
//     return (
//     <div id="houseDisplay">
//         {houseDisplay}
//     </div>
// )
// }
// }     








render() {
        
        let displayHouses = this.state.houses.map(house => {
            return (
                <div>
                <House />
                {displayHouses}</div>
            )
                
        })
        return (
            
            <div className = "dashboard-content">
                    <header id="houses-header"><h1 >Dashboard</h1>
                    <Link to='/wizard' >
                        <button >Add New Property</button></Link></header>
                    <hr></hr>
                    <h3>Home Listings</h3>
                    <House/>
                    </div>
        )
    }
        
}

