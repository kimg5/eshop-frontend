import React, {Component} from "react";
import styled from 'styled-components'; 
import TotalCost from "./TotalCost";
import Button from '@mui/material/Button';

const CheckoutForm = (props) => {
    return (
        <Wrapper>
            <div >
                {/* <div className="column submit-form"> */}
                <article>
                      <div id="total">
                                <TotalCost total ={props.total} />    
                            </div>
                            <div className="field is-grouped">
                                    <p className="control">
                                        {/* <button className="button is-link" >Continue Shopping</button> */}
                                        <Button variant="contained" className="buttonCart">Continue Shopping</Button>
                                    </p>
                                    <p className="control">
                                        {/* <button className="button is-link" href="#">  Checkout </button> */}
                                        <Button variant="contained" color="success" >Checkout</Button>
                                    </p>
                      </div>
                    </article>
                </div>
        </Wrapper>
        
    )
}
                
// const Wrapper = styled.div`
 
//       .column submit-form {
//         margin-left: auto; 
//         margin-right: 0;
//       }
   
  
// `                
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  // article {
  //   // border: 1px solid var(--clr-grey-8);
  //   // border-radius: var(--radius);
  //   padding: 1.5rem 3rem;
  // }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 0rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  button.is-dark{
    background-color: #007bff; 
  }
  button.is-link{
    background-color: #007bff; 
  }
`



export default CheckoutForm;