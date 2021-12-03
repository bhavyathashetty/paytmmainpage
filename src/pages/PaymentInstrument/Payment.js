import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import gplay from './gg.svg';
import appleplay from './apple.svg';
import './payment.scss'


// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'


import SwiperCore, {
    Navigation, Scrollbar
} from 'swiper';
SwiperCore.use([Navigation, Scrollbar]);


const items = [
    ['https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png', 'POS Billing', 'Software', 'Say Hello to Smart Retail',
        'Business Management', '', 'Learn More'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png', 'Paytm for', 'Business App', 'Everything you need to'
        , 'manage your business', 'on your phone', 'Learn More'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/854036/1626342444992.png', 'Advertise on', 'Paytm', 'Grow your business by',
        'advertising on India’s', 'largest mobile business', 'Learn More'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png', 'Business', 'Khata', 'Managing Khata made',
        'easy', '', 'Learn More']
]

const listitem = items.map((item) => <li className='tl pa4 pr5 pb0 br3'>
    <img src={item[0]} /><div className='b f3 pt4'>{item[1]}</div>
    <div className='b f3'>{item[2]}</div>
    <div className='pt3'>{item[3]}</div>
    <div>{item[4]}</div><div>{item[5]}</div>
    <button className='b mt3 ba b--white'>{item[6]}</button>
</li>)



const paytmmoney = [
    ['https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png', 'Invest in', 'Stocks'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png', 'Apply for IPO', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png', 'Invest in', 'ITFs'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png', 'Buy Gold', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/728899/1618576408440.png', 'Invest in', 'Mutual Funds']
]
const moneyitem = paytmmoney.map((item) => <li>
    <button className='bg-blue pb3 white h5 ma3 br4 ph2'>
        <img src={item[0]} />
        <div className='pt2'>{item[1]}</div>
        <div>{item[2]}</div>
    </button>

</li>)

const paytmtravel = [
    ['https://assetscdn1.paytm.com/images/catalog/view_item/863734/1627552693557.png', 'Flat 12%', 'Cashback', 'with code', 'WELCOMEFLIGHT'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/864144/1627566096011.png', '100% Refund', 'With Cancellation', 'Protect Fund', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/864145/1627566172335.png', 'Flat 10%', 'Cashback', 'With Code HAPPYBUS', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/864151/1627567062180.png', 'Sanitized Bus', 'Options With', 'Travelsafe+', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/864152/1627566492097.png', 'Hassle Free', 'Train Ticket', 'Bookings', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/864153/1627566396231.png', 'PNR Status', 'Check in Few', 'Simple Clicks', '']
]
const travelitem = paytmtravel.map((item) => <li>
    <button className='bg-blue pb3 white h5 ma3 br4 ph2'>
        <img className='h4' src={item[0]} />
        <div className='pt2'>{item[1]}</div>
        <div>{item[2]}</div>
        <div>{item[3]}</div>
        <div>{item[4]}</div>
    </button>

</li>)

const mallitems = [
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733105/1613626295379.png', 'Gadget', 'Store'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733106/1613626309566.png', 'Electronics', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733107/1613626462197.png', 'Mobiles', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733108/1613626507866.png', 'Laptop', ''],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733109/1613626417641.png', 'Mens', 'Fashion'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733110/1613626430778.png', 'Womens', 'Fashion'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733111/1613626550388.png', 'Beauty &', 'Grooming'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733112/1613626459518.png', 'Health &', 'Grocery']

]
const mallitem = mallitems.map((item) => <li>
    <a className='pt4 black h5 br4 ph2 ba b--white'>
        <img src={item[0]} />
        <div className='pt2'>{item[1]}</div>

    </a>

</li>
)

const laptopslist = [
    ['https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPLENOVO-IDEAPLOWE541476D8169B3D/1634639394665_0.jpg', 'Lenovo IdeaPad Slim 3 Thin & ',
        'Light Laptop (Intel Core i3-',
        'From', '₹39990'],
    ['https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-MACBOOCOMP11704896B676790/1633609452212_0.jpg', 'Apple MacBook Pro with',
        'Touch Bar (Intel Core i7-', 'From', '₹2059000'],
    ['https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPASUS-VIVOBOOASUS20915B341A2E9/1630063382091_0..jpg', 'Apple MacBook Pro with',
        'Touch Bar (Intel Core i7-', 'From', '₹620000'],
    [' https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPLENOVO-IDEAPLOWE5414767C2C4B91/1633094878335_0..jpg', 'Apple MacBook Pro with',
        'Touch Bar (Intel Core i7-', 'From', '₹279900'],



]
const laptops = laptopslist.map((item) => <li>
    <a className='black h5 br4 ph4 ba b--white'>
        <img style={{
            width: "459px",
            height: "115px"
        }} src={item[0]} className='mr4' />
        <div className='pt2'>{item[1]}</div>
        <div className='f6 lh-copy'>{item[2]}</div>
        <div className='f6 lh-copy'>{item[3]}</div>
        <div className='f6 lh-copy'>{item[4]}</div>
    </a>

</li>)





const Payment = () => {
    const [setSwiperRef] = useState(null);


    return (
        <div class='pay'>
            <div className='bg-light-gray'>
                <h1 className='f1 tl pt6 pl5'>Paytm Payment Instruments</h1>
                <div className='ma5 bg-white pa5 br4 w-400' >
                    <div style={{ display: 'flex' }} className='pt5'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png' alt='logo'
                            className="di h3" /> <div className='pt3 f5 b'>Paytm<br></br>Wallet</div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>The Fastest Way to <br></br>Pay In-store & Online.</h1>
                            <div className='f4 pb3'>
                                Load up your Paytm Wallet for free and make payments,
                                <br></br>in a jiffy at over 21 million stores, websites and apps.
                            </div>
                            <button class='download'>Download Paytm App
                                <a href='https://apps.apple.com/in/app/mobile-recharge-bill-payments/id473941634'
                                    className='pa2'><img className='h1 white' src={appleplay} /></a>
                                <a href='https://play.google.com/store/apps/details?id=net.one97.paytm'
                                    className='pa2'><img className='h1 white' src={gplay} /></a>
                            </button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png" alt='paytm'
                            className='pb3 mt5' class='size'


                        />
                    </div>
                </div>
                <div className='ma5 bg-white pa5 br4'>
                    <div style={{ display: 'flex' }} className='pt5'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png' alt='logo'
                            className="di h3" /> <div className='pt3 f5 b tl'>UPI Money<br></br>Transfer</div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>Pay anyone directly
                                <br></br>from your bank <br></br>account.</h1>
                            <div className='f4 pb3'>
                                Pay anyone, everywhere. Make contactless & secure
                                <br></br>payments in-stores or online using Paytm Wallet or
                                <br></br>Directly from your Bank Account. Plus, send & receive
                                <br></br>money from anyone.
                            </div>
                            <button class='download'>Download Paytm App
                                <a href='https://apps.apple.com/in/app/mobile-recharge-bill-payments/id473941634'
                                    className='pa2'><img className='h1 white' src={appleplay} /></a>
                                <a href='https://play.google.com/store/apps/details?id=net.one97.paytm'
                                    className='pa2'><img className='h1 white' src={gplay} /></a>
                            </button>
                        </div>
                        <img class='full' src="https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png" alt='paytm'
                            className='pb3 mt5'
                            style={{
                                height: "500px",
                                width: "550px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div className='ma5 bg-white pa5 br4'>
                    <div style={{ display: 'flex' }} className='pt5'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png' alt='logo'
                            className="di h3" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>Want it?
                                <br></br>No more waiting for it.</h1>
                            <div className='f4 pb3'>
                                With Paytm Postpaid, your wishlist doesn't have to be
                                <br></br>on the waitlist. Shop for the things you want today and
                                <br></br>pay for them next month.
                            </div>
                            <button class='learnmore'>Learn More</button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png" alt='paytm'
                            className='pb3 mt5'
                            style={{
                                height: "500px",
                                width: "450px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='ma5 bg-white pa5 w-60 br4'>
                        <div style={{ display: 'flex' }} className='pt5'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/853975/1626156250659.png' alt='logo'
                                className="di h3"
                            /> <div className='pt3 f5 b'></div>
                        </div>
                        <div>
                            <div className='tl pa3'>
                                <h1 className='pb3 f1 lh-title tl'>Buy Big, <br></br>Pay Small</h1>
                                <div className='f4 pb3'>
                                    Pay for what you buy in easy EMIs
                                </div>
                            </div>
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1626342263540.png" alt='paytm'
                                className='pb3 mt5 pt0'
                                style={{
                                    height: "400px",
                                    width: "400px",
                                    top: '500px',
                                    right: "0"
                                }} />
                        </div>
                    </div>
                    <div className='ma5 bg-white pa5 w-60 br4'>
                        <div style={{ display: 'flex' }} className='pt5'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626156271432.png' alt='logo'
                                className="di h1" /> <div className='pt3 f5 b'></div>
                        </div>
                        <div>
                            <div className='tl pa3'>
                                <h1 className='pb3 f1 lh-title tl'>India’s Most<br></br>Sincere Credit Card</h1>
                                <div className='f4 pb3'>
                                    Paytm SBI Card SELECT - With Intelligent
                                    <br></br>Features & Great Rewards that Never Expire
                                </div>
                            </div>
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png" alt='paytm'
                                className='pb3 mt5 pt0'
                                style={{
                                    height: "400px",
                                    width: "400px",
                                    top: '500px',
                                    right: "0"
                                }} />
                        </div>
                    </div>
                </div>
                <div className='bg-white pa5'>
                    <h1 className='f1 tl pt3 pl3'>Financial Services by Paytm</h1>
                    <div className='pt5'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png'
                         alt='logo'
                            className="di h2 pa3"/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>India's most sincere<br></br>bank.</h1>
                            <div className='f4 pb3'>
                                Paytm Payments Bank offers secure, transparent and
                                <br></br>risk-free banking at your fingertips. With instant
                                <br></br>account opening, virtual debit card and zero balance
                                <br></br>requirements, experience the future of banking today.
                            </div>
                            <button class='learnmore'>Learn More</button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png" alt='paytm'
                            className='pb3 mt5 ml5'
                            style={{
                                height: "600px",
                                width: "500px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div className='pa5 pt0 bg-washed-yellow'
                    style={{ backgroundImage: `url("https://assetscdn1.paytm.com/frontendcommonweb/69678bc5.png")`, display: 'flex' }}>
                    <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png" alt='paytm'
                        className='pb3 pt5'
                        style={{
                            height: "600px",
                            width: "500px",
                            top: '500px',
                            right: "0"
                        }} />
                    <div className='pa5'>

                        <img src='https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png'
                            alt='logo' className="h2 pl0 pr7" />

                        <div style={{ display: 'flex' }}>
                            <div className='tl pa3 pl5'>
                                <h1 className='pb3 f1 lh-title tl'>Build Long-term
                                    <br></br>Wealth & Achieve
                                    <br></br> your Goals.</h1>
                                <div className='f4 pb3'>
                                    Investing on Paytm Money is transparent, low-cost and
                                    <br></br>commission-free. Buy stocks & mutual funds that can
                                    <br></br>help you create wealth & realise your dreams.
                                </div>
                                <button class='learnmore'>Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg-white pa5'>
                    <div style={{ display: 'flex' }} className='pt5'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/308775/1617870866597.png' alt='logo'
                            className="di h3" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>Insurance made easy.</h1>
                            <div className='f4 pb3'>
                                Buying insurance does not have to be tedious, time-
                                <br></br>consuming & confusing. Paytm Insurance removes the
                                <br></br>worry of getting insured by making it simple,
                                <br></br>convenient & easy-to-understand.
                            </div>
                            <button class='learnmore'
                            >Learn More</button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1626076605479.png" alt='paytm'
                            className='pb3 ml5 mb5 mt1'
                            style={{
                                height: "500px",
                                width: "600px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div className='bg-light-gray pa5'>

                    <div style={{ display: 'flex' }} className='pt5'>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1626076435155.png" alt='paytm'
                            className='pb3 mt5'
                            style={{
                                height: "500px",
                                width: "550px",
                                top: '500px',
                                right: "0"
                            }} />

                        <div className='tl pl5'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png' alt='logo'
                                className="di h3 pa3" />
                            <div className='tl pa3'>
                                <h1 className='pb3 f1 lh-title tl'>Get a Personal Loan in
                                    <br></br>2 Minutes.</h1>
                                <div className='f4 pb3'>
                                    Paytm offers India's quickest multi-purpose, hassle-free loan. It
                                    <br></br>is 100% digital, transparent and paperless.
                                </div>
                                <button class='learnmore'>Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
            <div className='bg-white'>
                <h1 className='f1 tl pt6 pl5'>Business Services by Paytm</h1>
                <div className='ma5 bg-light-gray pa5 br4'>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>Accept payments<br></br>online with ease</h1>
                            <div className='f4 pb3'>
                                Grow your business with the payment gateway that
                                <br></br>powers India’s largest brands and even the Paytm App
                            </div>
                            <button class='learnmore'>Learn More</button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png" alt='paytm'
                            className='mr0 mt0'
                            style={{
                                height: "500px",
                                width: "500px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div className='ma5 bg-light-gray pa5 br4'>
                    <div style={{ display: 'flex' }}>
                        <div className='tl pa3'>
                            <h1 className='pb3 f1 lh-title tl'>In-shop payments<br></br>powered by Paytm.</h1>
                            <div className='f4 pb3'>
                                Millions of small & big businesses use Paytm to accept
                                <br></br>payments anywhere any time with a wide range of
                                <br></br>solutions for all kind of merchants
                            </div>
                            <button class='learnmore'>Learn More</button>
                        </div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853880/1626077064940.png" alt='paytm'
                            className='mr0 mt0'
                            style={{
                                height: "500px",
                                width: "500px",
                                top: '500px',
                                right: "0"
                            }} />
                    </div>
                </div>
                <div>
                    <h1 className='f1 tl pt4 pl5'>Business Tools to help<br></br>your business grow</h1>
                    <div className='pb4 mt6 mb0 white pt1'>
                        <div className='tl pa5 pb0 pt1 black'>
                            <ul style={{ listStyle: "none", display: 'flex' }}>{listitem}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-light-gray pa5'>
                <div style={{
                    backgroundImage:
                        `url("https://assetscdn1.paytm.com/images/catalog/view_item/730162/1626354057990.png")`,
                    backgroundSize: "100% 100%"

                }} className=' bg-blue br4'>


                    <div style={{ display: 'flex', position: "relative" }} className='pt5 pl7'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/307294/1614064064373.png' alt='logo'
                            className="di h3" />
                    </div>
                    <div className='tl white pl7 pb4'>
                        <h1 className='pb3 f1 lh-title tl'>Buy Big, <br></br>Pay Small</h1>
                        <div className='f4 pb3'>
                            Get up to 3x Reward<br></br>Points with Paytm SBI
                            <br></br>Select Card. Get to enjoy <br></br>
                            our Accelerated Points <br></br>
                            System. This means up to <br></br>3X of points earned with <br></br>every spend.
                        </div>
                        <button class='learnmore'>Learn More</button>
                    </div>


                </div>
            </div>

            <div className='bg-lightest-blue pa5'>
                <div className=' bg-white br4 ' style={{ display: 'flex' }}>
                    <div>
                        <div style={{ display: 'flex' }} className='pt5 pl4 pb5'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png' alt='logo'
                                className="di h3" />
                        </div>
                        <div className='tl white pl4 pb4'>

                            <div className='f5 pb3 black'>
                                Get started on wealth
                                <br></br> creation journey with Zero <br></br>
                                brokerage fee & no hidden<br></br> charges.
                            </div>
                            <button class='learnmore'>Learn More</button>

                        </div>
                    </div>

                    <Swiper onSwiper={setSwiperRef} slidesPerView={4}
                        spaceBetween={5} scrollbar={{
                            "hide": false
                        }}
                        navigation={true} className="mySwiper pt5 ml6">
                        <SwiperSlide>{moneyitem[0]}</SwiperSlide>
                        <SwiperSlide>{moneyitem[1]}</SwiperSlide>
                        <SwiperSlide>{moneyitem[2]}</SwiperSlide>
                        <SwiperSlide>{moneyitem[3]}</SwiperSlide>
                        <SwiperSlide>{moneyitem[4]}</SwiperSlide>

                    </Swiper>


                </div>

            </div>
            <div className='bg-lightest-blue pa5'>
                <div className=' bg-white br4' style={{ display: 'flex' }}>
                    <div>
                        <div style={{ display: 'flex' }} className='pt5 pl4 pb3'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view/307197/1626419838546.png' alt='logo'
                                className="di h3" />
                        </div>
                        <div className='tl white pl4 pb4'>

                            <div className='f4 pb3 black'>
                                Best travel solutions with<br></br> quick ticket bookings, great
                                <br></br> offers and easy refunds
                            </div>
                            <button class='learnmore'>Learn More</button>
                        </div>
                    </div>
                    <Swiper onSwiper={setSwiperRef} slidesPerView={4}
                        spaceBetween={1}
                        scrollbar={{
                            "hide": false
                        }}
                        navigation={true} className="mySwiper pt5 ml6">
                        <SwiperSlide>{travelitem[0]}</SwiperSlide>
                        <SwiperSlide>{travelitem[1]}</SwiperSlide>
                        <SwiperSlide>{travelitem[2]}</SwiperSlide>
                        <SwiperSlide>{travelitem[3]}</SwiperSlide>
                        <SwiperSlide>{travelitem[4]}</SwiperSlide>
                        <SwiperSlide>{travelitem[5]}</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='bg-lightest-blue pa5'>
                <div className=' bg-white br4' >
                    <div className=' bg-white br4' style={{ display: 'flex' }}>
                        <div>
                            <div style={{ display: 'flex' }} className='pt5 pl4 pb3'>
                                <img src='https://assetscdn1.paytm.com/images/catalog/view/307407/1626419863059.png' alt='logo'
                                    className="di h3" />
                            </div>
                            <div className='tl white pl4'>

                                <div className='f4 pb3 black'>
                                    The best deals in Fashion,<br></br>
                                    Tech, Groceries and Home-<br></br>
                                    care with amazing<br></br>
                                    discounts

                                </div>
                                <button class='learnmore'>Learn More</button>
                            </div>
                        </div>
                        <Swiper onSwiper={setSwiperRef} slidesPerView={5}
                            spaceBetween={4} scrollbar={{
                                "hide": false
                            }}
                            navigation={true} className="mySwiper pt6 ml7">
                            <SwiperSlide>{mallitem[0]}</SwiperSlide>
                            <SwiperSlide>{mallitem[1]}</SwiperSlide>
                            <SwiperSlide>{mallitem[2]}</SwiperSlide>
                            <SwiperSlide>{mallitem[3]}</SwiperSlide>
                            <SwiperSlide>{mallitem[4]}</SwiperSlide>
                            <SwiperSlide>{mallitem[5]}</SwiperSlide>
                        </Swiper>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='pt5'>
                            <a className='blue b tl f4 mh4'>Top Laptops</a>
                            <br></br>
                            <a className='pa2 f4 black mb4 mt4 mh4'>Fashion</a>
                        </div>
                        <Swiper onSwiper={setSwiperRef} slidesPerView={5}
                            spaceBetween={4} scrollbar={{
                                "hide": false
                            }}
                            navigation={true} className="mySwiper pt5 ml7 mb6">
                            <SwiperSlide>{laptops[0]}</SwiperSlide>
                            <SwiperSlide>{laptops[1]}</SwiperSlide>
                            <SwiperSlide>{laptops[2]}</SwiperSlide>
                            <SwiperSlide>{laptops[3]}</SwiperSlide>
                            <SwiperSlide>{laptops[4]}</SwiperSlide>
                            <SwiperSlide>{laptops[5]}</SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Payment