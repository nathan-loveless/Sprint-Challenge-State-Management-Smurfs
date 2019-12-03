import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../Actions';

const SmurfList = props => {
    //const addSmurf = e => {
        //e.preventDefault();
        props.addSmurf();

        //};
    return (
        <>
        <div>
            <h1>Welcome to the Smurf Village</h1>
            <div>
                {props.smurfs.map(smurf => (
                     <p>{smurf.name}</p>
                     //<p>{smurf.age}</p>
                    // <span>{smurf.height}</span>
                ))}
            </div>
        </div>
</>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});


export default connect(
    mapStateToProps, {addSmurf})(SmurfList);