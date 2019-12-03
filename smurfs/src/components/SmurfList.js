import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../Actions';
import Smurf from './Smurf';
import styled from 'styled-components';

const SmurfList = props => {

    //*** STYLED COMPONENTS ***
    const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 5px 5px 5px;
    background: lightblue;
    `;

    const SmurfContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    `;

    const AddBar = styled.div`
    padding: 10px 0px 0px 0px;
    background: lightgrey;
    border: 1px solid black;
    box-shadow: 1px 1px lightgrey;
    margin-top: 10px;
    `;

    const InputHeader = styled.div`
        font-weight: bold;
        margin-bottom: 5px;
    `;

    const InputLine = styled.div`
    margin-bottom: 10px;
`;

const AddButton = styled.button`
    margin-bottom: 10px;
`;

    useEffect(() => props.fetchSmurfs(), []);

    //const [smurf, setSmurf] = useState({})
    const newSmurf = {};

    const handleNameChange = e => {

        //setSmurf({ ...smurf, name: e.target.value });
        newSmurf.name = e.target.value;
    }

    const handleAgeChange = e => {

        //setSmurf({ ...smurf, age: e.target.value });
        newSmurf.age = e.target.value;
    }

    const handleHeightChange = e => {

        //setSmurf({ ...smurf, height: e.target.value });
        newSmurf.height = e.target.value;
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('NL: SmurfList.js: postSmurf', newSmurf)
        props.addSmurf(newSmurf);
    }

    return (
        <MainContainer>
            <h1>Welcome to the Smurf Village</h1>
            <SmurfContainer>
                {props.smurfs.map(smurf => (
                    <Smurf smurf={smurf} />

                ))}
            </SmurfContainer>
            <AddBar>
                <InputHeader>Name:</InputHeader>
                <InputLine><input type='text' onChange={handleNameChange} /></InputLine>
                <InputHeader>Age:</InputHeader>
                <InputLine><input type='text' onChange={handleAgeChange} /></InputLine>
                <InputHeader>Height</InputHeader>
                <InputLine><input type='text' onChange={handleHeightChange} /></InputLine>

                <AddButton>
                    <button onClick={handleSubmit}>Add Smurf</button>
                </AddButton>
            </AddBar>
        </MainContainer>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps, { fetchSmurfs, addSmurf })(SmurfList);