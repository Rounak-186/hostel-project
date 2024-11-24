import React from 'react'

export const WithdrawalPage = () => {
    return (
        <div>
            <div>
                <div><button>back button</button></div>
                <div><h5>Withdrawal Page</h5></div>
            </div>
            <div>
                <strong>Wallet Balance :</strong>
                <span>TotalAmt</span>
            </div>
            <div>
                <input type="number" placeholder='Select Amount'/>
            </div>
            <div>
                <input type="text" placeholder='UPI Id' />
            </div>
            <div>
                <button>Withdraw</button>
            </div>
        </div>
    )
}
