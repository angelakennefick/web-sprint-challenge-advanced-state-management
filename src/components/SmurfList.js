import React from 'react';
import Smurf from './Smurf';

import {connect} from 'react-redux';

 const SmurfList = (props)=> {
    const {isLoading, smurfs} = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((smurf) => (
        <Smurf smurf={smurf} key={smurf.id}/>
        ))}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
};

export default connect(mapStateToProps)(SmurfList);


