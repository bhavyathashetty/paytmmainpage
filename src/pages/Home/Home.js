import React from "react";
import Recharge from "../Recharge/Recharge";
import Payment from "../PaymentInstrument/Payment";
import appsvg from './gg.svg'
import applesvg from './apple.svg'
import './Home.scss'


const Home = () => {
   
    return (
        <div className='pb4' class='home'>
            <div className='bg-light-gray pa3'>
                <span class='kyc'><b>No Wallet KYC Required</b> 😊 to pay using Paytm. </span>
                <a href='' className='no-underline black'><b>Learn More.</b></a>
            </div>
            <div style={{ display: 'flex' }} className='pt5'>
                <img src='https://assetscdn1.paytm.com/images/catalog/view/310944/1626342046207.png' alt='logo'
                    className="dib pa4 h3" />
            </div>
            <div style={{ display: 'flex' }}>


                <div className='tl pa3 pl4 pt5'>
                    <h1 className='pb3 ma0 f1 lh-title tl'>India's Most-loved <br></br> Payments App</h1>
                    <div className='f4 pb3'>

                        Recharge & pay bills, book flights & movie tickets,<br></br> open a savings account,
                        invest in stocks & mutual <br></br> funds, and do a lot more.
                    </div>
                    <button class='sigin'
                    >Download Paytm App
                        <a href='https://apps.apple.com/in/app/mobile-recharge-bill-payments/id473941634' 
                        className='pa2'><img  className='h1' src={applesvg}/></a>
                        <a href='https://play.google.com/store/apps/details?id=net.one97.paytm' 
                        className='pa2'><img className='h1' src={appsvg}/></a>

                        </button>
                
                </div>

                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1626096258626.png" alt='paytm'
                    style={{
                        width: "528px",
                        position: "absolute",
                        right: "0",
                        top:"200px"
                    }}  className='pb3 mt3'
                    />

            </div>
            <Recharge/>
            <Payment/>




        </div>
    )

}
export default Home;