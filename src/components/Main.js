import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomeMainPage from './HomeMainPage'
import InsightDetail from './InsightDetail'
import PurposeDetail from './PurposeDetail'
import WhatsHotDetail from './whatsHotDetail'

export default function Main() {
  let object = useLocation()
  console.log(object)
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Routes>
        <Route path="/home">
          <Route path="home" element={<HomeMainPage />} />
          <Route path="PurposeDetail" element={<PurposeDetail />} />
          <Route path="insightDetail" element={<InsightDetail />} />
          <Route path="hotsDetail/*" element={<WhatsHotDetail />} />
          <Route path="" element={<Navigate replace to="home" />}></Route>
        </Route>
      </Routes>
    </div>
  )
}
