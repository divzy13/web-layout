import 'react-router-dom';
import React, { useState } from "react";
import styled from "styled-components";
import AlgoModal from "./Algo-Payment-Modal/AlgoModal";
import Modal from "./Payment-Modal/Modal";
import StripePay from "./StripeCheckout";

const Button = styled.button`
  min-width: 300px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: var(--form-press);
  color: var(--coin);
  border : solid 1px lightblue;
  text-transform: none;
  cursor: pointer;
  font-weight: bold;

  @media screen and (min-width: 995px) and (max-width: 1200px){
    padding: 5px;
  }
 @media screen and (min-width: 800px) and (max-width: 994px) {
   font-size : 10px;
   padding : 0px;
 }
`;

function Dashboard({ total }) {
    const [showAlgoModal, setShowAlgoModal] = useState(false);
    const [buttonText, setButtonText] = useState(true);
    console.log(showAlgoModal)

    const openAlgoModal = () => {
        setShowAlgoModal((prev) => !prev);
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className="dashboard">
            <div>
                <div class="square">
                    {buttonText === true ? 'Product 1 \n 30 days subscriptions': 'Active Subscription'}
                </div>
                <br></br>
                <div >
                    <button onClick={() => setButtonText(!buttonText)} class="square_1">{buttonText === true ? 'Order': 'Days untill manual renewal'}</button>
                </div>
                <br></br>
            </div>
            <div className="checkout-page">
                <div className="payment">
                    <br></br>
                    <br></br>
                    <Button onClick={openAlgoModal}> Pay with Algo</Button>
                    <AlgoModal
                        showAlgoModal={showAlgoModal}
                        setShowAlgoModal={setShowAlgoModal}
                        price={total}
                    />

                    <Button onClick={openModal}>Pay with Choice Coin</Button>
                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        price={total}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard