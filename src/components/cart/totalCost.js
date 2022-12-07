import React, { Component } from "react";
import styled from 'styled-components'; 

const TotalCost = (props) => {
    return (
        <Wrapper>
            <h3 className="total">Total: ${props.total} </h3>
        </Wrapper>
    )
    
}
const Wrapper = styled.div`
 
      h3 {
        color: var(--clr-grey-5);
        font-weight: 400;
        text-align: right;
      }
   
  
`

export default TotalCost;