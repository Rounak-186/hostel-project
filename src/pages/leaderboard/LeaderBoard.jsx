import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const LeaderBoard = () => {
    return (
        <div>
            <div>
                <div><button>back button</button></div>
                <div><h5>Leaderboard</h5></div>
            </div>
            <div>
                <section>
                    <ul>
                        <li>
                            <NavLink to="team"><div>Teams</div></NavLink>
                        </li>
                        <li>
                            <NavLink to="better"><div>Betters</div></NavLink>
                        </li>
                    </ul>
                </section>
                <section>
                    <Outlet/>
                </section>
            </div>
        </div>
    )
}

export const TeamLeaderBoard = () => {
    return (
        <div>
            <div>
                {/* design */}
            </div>
            <div>
                <div>
                    <i>search</i>
                    <input type="text" placeholder='Search' />
                </div>
                <div>
                    <ul>
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const BetterLeaderBoard = () => {
    return (
        <div>
            <div>
                {/* design */}
            </div>
            <div>
                <div>
                    <i>search</i>
                    <input type="text" placeholder='Search' />
                </div>
                <div>
                    <ul>
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

const LeaderboardItem = () => {
    return (
        <li>
            <div>
                <div>
                    name
                </div>
                <div>
                    rank
                </div>
            </div>
        </li>
    )
}