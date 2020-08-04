import React, { Component } from 'react';
import  './style.css'

class index extends Component {
    render() {
        const { id,city,img,name,info} =this.props.tour;
        const { removeTour} =this.props;
        return (
<section>

<div className="container">
<div className="row">
    <div className="col-md-12 text-center">
 <img src={img} className="rounded mx-auto d-block img-fluid" alt="place-heaven" />
<div className="card-body">
    <h3 className="card-title">{city}</h3>
    <h6 className="card-title">{name}</h6>
    <p className="card-text">{info}</p>
    <i className="fa fa-times-circle-o btn btn-primary fa-2x"  onClick={()=>removeTour(id)}></i>
    </div>

    </div>
</div>
</div>
    
    
   
    

    
    


</section>          
            
           
        );
    }
}

export default index;