import React,{useState,useEffect} from 'react'
import { validatePayment,getPaymentHistory } from '../../actions/action';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const Payment = (props) => {

    const [orderid,setOrderid] = useState();
    const [finalAmount,setfinalAmount] = useState();
    const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}


		const options = {
			key: __DEV__ ? 'rzp_test_11LV9V2xBmW3uJ' : 'PRODUCTION_KEY',
			currency: 'INR',
			amount: finalAmount,
			order_id: orderid,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			handler: function (response) {
			},
			prefill: {
				name,
				email: 'ankit11hab@outlook.com',
				phone_number: '9378063452'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


	


    const handlePayment = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const amount = e.target.amount.value
        const res = await props.validatePayment({ 'name': name, 'amount': amount });
        console.log("res: ", res);
        setOrderid(res.data.order_id)
        setfinalAmount(res.data.amount)
    }
    return (
        <div>
            <h3>Purchase</h3>
            <form onSubmit={handlePayment}>
                <input type="text" placeholder="Enter your name" name="name"></input>
                <input type="text" placeholder="Enter amount to pay" name="amount"></input>
                <button type="submit">Submit</button>
            </form>
            <button onClick={displayRazorpay}>Pay here</button>

			
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		getPaymentHistory: () => getPaymentHistory(dispatch),
        validatePayment: (paymentData) => validatePayment(paymentData, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
