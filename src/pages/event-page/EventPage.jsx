import React from 'react'

export const EventPage = () => {
    return (
        <div>
            <div>
                <div><button>back button</button></div>
                <div><h5>Badminton Events</h5></div>
            </div>
            <div>
                <div><strong>Upcoming Matches</strong></div>
                <ul>
                    <EventItem/>
                </ul>
            </div>
        </div>
    )
}

const EventItem = () => {
    return (
        <li>
            <div>
                <div>
                    <span><i>time</i></span>
                    <span>TIME</span>
                </div>
                <div>
                    <div>
                        <h6>Team A</h6>
                        <span><i>trophy</i></span>
                        <span>rank</span>
                    </div>
                    <div>
                        <h6>Team B</h6>
                        <span><i>trophy</i></span>
                        <span>rank</span>
                    </div>
                </div>
                <div>
                    <div>
                        <button>Bid A</button>
                    </div>
                    <div>
                        <button>BidB</button>
                    </div>
                </div>
            </div>
        </li>
    )
}
