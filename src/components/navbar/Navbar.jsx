import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <button>
                        <span>
                            <i></i>
                        </span>
                        <span>0</span>
                    </button>
                </div>
                <div>
                    <button><i>Notification</i></button>
                </div>
                <div>
                    <button><img src="" alt="" /></button>
                </div>
            </div>
        </nav>
    )
}

const ProfileDropdown = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <p>Name</p>
            </div>
            <div>
                <ul>
                    <li>
                        <button>
                            <span><i></i></span>
                            <span>My Profile</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span><i></i></span>
                            <span>Events</span>
                        </button>
                    </li><li>
                        <button>
                            <span><i></i></span>
                            <span>Leaderboard</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span><i></i></span>
                            <span>Withdraw</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h6>Appearance</h6>
                <div>
                    {/* theme */}
                </div>
            </div>
        </div>
    )
}
