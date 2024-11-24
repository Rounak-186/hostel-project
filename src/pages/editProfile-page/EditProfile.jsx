import React from 'react'

export const EditProfile = () => {
  return (
    <div>
        <div>
                <div><button>back button</button></div>
                <div><h5>Edit Profile</h5></div>
        </div>
        <div>
            <img src="" alt="" />
            <i>camera</i>
        </div>
        <div><input type="text" placeholder='Name'/></div>
        <div>
            <h5>Change Password</h5>
            <input type="text" placeholder='Old Password' />
            <input type="text" placeholder='New Password' />
        </div>
        <div>
            <button>Save</button>
        </div>
    </div>
  )
}
