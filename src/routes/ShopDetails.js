import React from 'react'

function ShopDetails({shopObj,paymentObj}) {
    return (
        <div>
          <p>{paymentObj.limit}</p>
          <p>{paymentObj.paidMember}</p>
          <p>{paymentObj.registrationDate}</p>
        </div>
    )
}

export default ShopDetails
