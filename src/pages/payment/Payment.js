import React,{useState,useEffect} from 'react'
import { validatePayment,getPaymentHistory } from '../../actions/action';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'
import Footer from '../../components/Footer';

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
    const [finalAmount,setfinalAmount] = useState(1000);
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
        <div>
          <div
            container
            style={{
              minHeight: '250px',
              background: 'linear-gradient(to right, #00147B, #050041)',
            }}
          >
            <div
              item
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '50px',
                fontFamily: 'Dongle',
                paddingTop: '20px',
              }}
            >
              Payment
            </div>
            <div
              item
              style={{
                textAlign: 'center',
                color: '#E2E2E2',
                fontSize: '40px',
                fontFamily: 'Dongle',
                paddingTop: '30px',
                transform: 'translate(0,-45px)',
              }}
            >
              To book a ride, please pay the amount!
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem auto',
            }}
          >
            <form
              onSubmit={handlePayment}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '2rem auto',
              }}
            >
              
              <button
                onClick={displayRazorpay}
                style={{
					width:'150px',
                  borderRadius: '5px',
                  backgroundColor: '#00147B',
                  color: 'white',
                  fontSize: '30px',
                  fontFamily: 'Dongle',
                  marginTop: '10px',
                }}
                type='submit'
              >
                Pay Now
              </button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    );
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
