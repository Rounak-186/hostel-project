import React from 'react'

export const Profile = () => {
    return (
        <div>
            <div>
                <div><button>back button</button></div>
                <div><h5>Profile</h5></div>
            </div>
            <div>
                <img src="" alt="" />
                <button></button>
            </div>
            <div>
                <div><h5>Name</h5></div>
                <div>
                    <strong>Rank</strong>
                    <span><i>Trophy</i></span>
                </div>
            </div>
            <div>
                <h6>History</h6>
                <ul>
                    <historyItem/>
                    <historyItem/>
                    <historyItem/>
                </ul>
            </div>
        </div>
    )
}

const historyItem = () => {
    return (
        <li>
            <div>
                <div>
                    <span>12 july 2024</span>
                </div>
                <div>
                    <i>+-</i>
                    <span>amt</span>
                </div>
            </div>
        </li>
    )
}