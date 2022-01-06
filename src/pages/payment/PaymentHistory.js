import React,{useEffect,useState} from 'react'
import { validatePayment,getPaymentHistory } from '../../actions/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const PaymentHistory = (props) => {
	const [paymentHistory, setPaymentHistory] = useState([]);
    useEffect(async () => {
		const res = await props.getPaymentHistory();
		setPaymentHistory(res.data);
	}, [])
    return (
        <div>
            <h3>Payment History</h3>
			{paymentHistory.map((item)=>{
				return(
					<div key={item.id}><Link to = "/purchase/ticket" state={{payment_id:item.payment_id}}>{item.payment_id} - {item.amount/100}</Link></div>
				)
			})}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
		getPaymentHistory: () => getPaymentHistory(dispatch),
        validatePayment: (paymentData) => validatePayment(paymentData, dispatch),
    }
}

export default connect(mapDispatchToProps)(PaymentHistory)
