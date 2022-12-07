import React, {Component} from "react";
import styled from 'styled-components'; 
import TotalCost from "./totalCost";

const CheckoutForm = (props) => {
    return (
        <Wrapper>
            <div className="column submit-form">
                            <div id="total">
                                <TotalCost total ={props.total} />    
                            </div>
                            <div className="field is-grouped">
                                    <p className="control">
                                        <button className="button is-dark" >
                                            Back to shop
                                        </button>                                        
                                    </p>
                                    <p className="control">
                                        <button className="button is-link" href="#">
                                            Continue to checkout
                                        </button>
                                    </p>
                            </div>
                </div>
        </Wrapper>
        
    )
}
                
const Wrapper = styled.div`
 
      .column submit-form {
        margin-left: auto; 
        margin-right: 0;
      }
   
  
`                




export default CheckoutForm;