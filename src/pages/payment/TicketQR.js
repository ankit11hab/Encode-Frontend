import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import QRCode from 'qrcode'

const TicketQR = () => {
    const location = useLocation()
    const [orderid,setOrderid] = useState();
    const [src,setSrc] = useState();
    useEffect(() => {
        setOrderid(location.state.payment_id)
        QRCode.toDataURL(location.state.payment_id).then((setSrc));
    }, [])
    return (
        <div>
            <img src={src} />
            <h3>{orderid}</h3>
        </div>
    )
}

export default TicketQR
