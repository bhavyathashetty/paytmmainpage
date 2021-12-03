import React from "react";
import './recharge.scss'


const Rechargeitems = [['https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png', 'Recharge', 'Prepaid', 'Mobile>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/733300/1626778824903.png', 'Pay', 'Rent', 'Payment>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png', 'Pay', 'Electricity', 'Bill>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png', 'Recharge', 'DTH', 'Connection>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png', 'Book', 'Gas', 'Cylinder>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png', 'Pay', 'Credit', 'Card Bill>'],
['https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png', 'All', 'Payment', 'Services>']
]
const listitem = Rechargeitems.map((item) => <li className='tl link dim white pa4 pr5 pb0 ba br3 b--blue'>
    <img className='h3' src={item[0]} /><div>{item[1]}<div>{item[2]}</div>{item[3]}</div></li>)

const Bookitems = [
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png', 'Movie', 'Tickets>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png', 'Flight', 'Ticlets>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png', 'Bus', 'Tickets>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png', 'Train', 'Tickets>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/729998/1626259953707.png', 'Car &', 'Bikes>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png', 'International', 'Flights>'],
    ['https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png', 'Invest', 'in Stocks>']
]
const listBookItem = Bookitems.map((item) => <li className='tl link dim white pa4 pr5 pb0 ba br3 b--dark-blue'>
    <img className='h3' src={item[0]} /><div>{item[1]}<div>{item[2]}</div></div></li>)


const Recharge = () => {
    return (
        <div class='recharge'>
            <div className='pt4 pb4 bg-blue mt6 mb0 white'>
                <h1 className='tl pl5 pb0'>Recharge and Pay Bills on Paytm.</h1>
                <div className='tl pa5 pb0 pt1'>
                    <ul style={{ listStyle: "none", display: 'flex' }}>{listitem}
                    </ul>

                </div>
            </div>
            <div className='pt4 pb4 bg-dark-blue mt0 mb0 white'>
                <h1 className='tl pl5'>Book & Buy on Paytm.</h1>
                <div className='tl pa5 pb0 pt1'>
                    <ul style={{ listStyle: "none", display: 'flex' }}>{listBookItem}
                    </ul>

                </div>
            </div>
        </div>


    )

}
export default Recharge;