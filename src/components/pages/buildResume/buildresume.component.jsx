import React from 'react';
import './buildresume.styles.css';
import fresher from '../../../assets/fresher.jpg';
import {Link} from 'react-router-dom';

class BuildResume extends React.Component{
    render(){
        return(
           
                    <div className="card" >
                <img class="card-img-top" src={fresher} alt="Card image"></img>
                <div class="card-body">
    <h4 class="card-title">Build Your Resume Here</h4>
    <Link to='/userform' class="btn btn-primary">click here </Link> 
    
  </div>
            </div>
            
        )
    }
}

export default BuildResume;