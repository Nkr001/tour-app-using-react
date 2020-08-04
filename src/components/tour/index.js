import React, { Component } from 'react';
import {tourData} from '../../tourData'
import Tourlist from '../tourlist'

class index extends Component {
    state =  {
        tours:tourData
    };
    removeTour = id =>{
        const {tours} =this.state;
        const sortedTours =tours.filter(tour => tour.id !==id);
        this.setState({
            tours:sortedTours
        })
    }
    
    render() {
        const {tours} = this.state;
        return (
            <div>
               {
                   tours.map( tour => (<Tourlist key={tour.id} tour={tour} removeTour={this.removeTour} />)
                   )
               }
            </div>
        );
    }
}

export default index;