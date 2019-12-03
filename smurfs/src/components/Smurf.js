import React from 'react';
import styled from 'styled-components';

//*** STYLED COMPONENTS ***/
const SmurfCard = styled.div`
margin: 10px 10px 0px 0px;
width: 150px;
height: 100;
background: lightgreen;
box-shadow: 2px 2px gray;
`;

const SmurfTitle = styled.div`
background: grey;
padding: 5px 0px 5px 0px;
color: white;
font-weight: bold;
`;

const Smurf = props => {
    console.log(props.smurf);
    return (
        <SmurfCard>
            <SmurfTitle>{props.smurf.name}</SmurfTitle>
            <p><span>Age: {props.smurf.age}</span></p>
            <p><span>Height: {props.smurf.height}</span></p>
        </SmurfCard>
    )
}

export default Smurf;