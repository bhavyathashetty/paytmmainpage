import React from "react";
import './Navbar.scss'
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navigation = () => {
    // const [show, setShow] = useState(false);
    // const show1Dropdown = (e) => {
    //     setShow(!show);
    // }
    // const hide1Dropdown = e => {
    //     setShow(false);
    // }
    // const showDropdown = (e) => {
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showPopup: false
    //     };
    // }
    // togglePopup() {
    //     this.setState({
    //         showPopup: !this.state.showPopup
    //     });
    // }


    // handledropdown() {
    //     return (
    //         <div>
    //             j
    //         </div>
    //     )
    // }



    return (

        <nav style={{ display: "flex" }} className='ph3'>

            <img src="//assetscdn1.paytm.com/frontendcommonweb/11272962.svg" className="dib pa3 pl5" alt='logo' />
            <div className='ph2'>
                <ul style={{ listStyle: "none", display: "flex" }} >

                    {/* <li className='di pa3 fw6 f4 '>
                        <NavDropdown title="Paytm For Customer" cssClass='e-caret-hide'>
                            <NavDropdown.Item href="#/action-1">Payments</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-2">Commerce</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-3">Financial Services</NavDropdown.Item>
                        </NavDropdown>

                    </li> */}
                    
                <li className='di pa3 fw6 f4'><a href='#' className='no-underline near-black'>Paytm For Customer</a>
             
                    </li>
                    <li className='di pa3 fw6 f4'><a href='#' className='no-underline near-black'>Paytm For Business</a>
                    </li>
                    <li className='di pa3 fw6 f4'><a href='#' className='no-underline near-black'>Company</a>
                    </li>
                    <li className='di pa3 fw6 f4'><a href='#' className='no-underline near-black'>Investor Relations</a></li>
                    <li className='di pa3 fw6 f4'><a href='#' className='no-underline near-black'>Career</a></li>
                    <li className='di pa3 fw6 f4'>
                        {/* <input type='button' className='bg-blue br4 pa2 no-underline white'
                                onClick={this.togglePopup} value='SignIn'/> */}
                        {/* <img src='https://assetscdn1.paytm.com/frontendcommonweb/9fd9626b.svg' className='h1 pl2' alt='signin' /> */}
                        <button class='signin' >SignIn
                            <img src='https://assetscdn1.paytm.com/frontendcommonweb/9fd9626b.svg' className='h1 pl2' alt='signin' />
                        </button>
                        {/* {this.state.showPopup ?
                                <Popup
                                    text='To Login into your Paytm Web account

                                    1.
                                    Open Paytm App
                                    2.
                                    Tap Scanoption available at the bottom
                                    3.
                                    Point Paytm Scan at QR Code to login'
                                    closePopup={this.togglePopup.bind(this)}
                                />
                                : null
                            }  */}

                    </li>
                </ul>
            </div>


        </nav>
    );


}





export default Navigation;