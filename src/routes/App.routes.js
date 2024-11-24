import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Profile } from '../pages/profile/Profile'
import { BetterLeaderBoard, LeaderBoard, TeamLeaderBoard } from '../pages/leaderboard/LeaderBoard'
import { PaymentPage } from '../pages/payment-page/PaymentPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/leader-board' element={<LeaderBoard />}>
        <Route path='team' element={<TeamLeaderBoard />}/>
        <Route path='better' element={<BetterLeaderBoard />}/>
      </Route>
      <Route path='/payment' element={<PaymentPage />} />
    </Routes>
  )
}
