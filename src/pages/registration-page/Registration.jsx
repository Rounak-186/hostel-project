import React from 'react'

export const Registration = () => {
    return (
        <div>
            <div>
                <h5>Register</h5>
            </div>
            <div>
                <div>
                    <div>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div>
                        <input type="password" placeholder='Set Password' />
                    </div>
                    <p>Already have an account?<a href="">Login</a></p>
                    <p>By continuing you are accepting our <a href="">Terms & conditions.</a>
                    </p>
                </div>
                <div>
                    <button>continue</button>
                </div>
            </div>

        </div >
    )
}
