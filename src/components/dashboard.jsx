import 'react-router-dom';
import React, { useRef, useState } from "react";
import styled from "styled-components";
import AlgoModal from "./Algo-Payment-Modal/AlgoModal";
import Modal from "./Payment-Modal/Modal";
import StripePay from "./StripeCheckout";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'

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
    const { user, logout } = useAuth()
    const [error, setError] = useState('');
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate()
    const verbose = true;
    console.log('Am in dashboard')

    const orderRef = useRef();
    const [showAlgoModal, setShowAlgoModal] = useState(false);
    const [buttonText, setButtonText] = useState(true);
    const [buttonText1, setButtonText1] = useState(true);

    console.log(showAlgoModal)

    const openAlgoModal = () => {
        setShowAlgoModal((prev) => !prev);
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    function handleLogout() {
        setWaiting(true)
        try {
            logout()
            navigate('/login')
        } catch (err) {
            setError(verbose ? err.message : 'Failed created the account')
        }
        setWaiting(false)


    }

    return (
        <div >
            <div className="dashboard">
                <div className="heading">
                    <h3>Welcome back : {user.username}</h3>
                    <Button className="logout_btn" variant='link' disabled={waiting} onClick={handleLogout}>Log out</Button>
                </div>
                <div>
                    <div class="square">
                        {buttonText === true ? 'Product 1 \n 30 days subscriptions' : 'Active Subscription'}
                    </div>
                    <br></br>
                    <div >
                        <button onClick={() => setButtonText(!buttonText)} class="square_1">{buttonText === true ? 'Order' : 'Days untill manual renewal'}</button>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div>
                    <div class="square">
                        {buttonText1 === true ? 'Product 2 \n 60 days subscriptions' : 'Active Subscription'}
                    </div>
                    <br></br>
                    <div >
                        <button onClick={() => setButtonText1(!buttonText1)} class="square_1">{buttonText1 === true ? 'Order' : 'Days untill manual renewal'}</button>
                    </div>
                    <br></br>
                </div>
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