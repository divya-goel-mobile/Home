import React from 'react'
import { useLocation } from 'react-router-dom'

const WhatsHotDetail = () => {
  const detail = [
    {
      id: 1,
      name: 'HEALTH AND WELLBEING',
      title: 'Our health and wellbeing services',
      desc:
        " Pulse by Prudential, our health and wellbeing super-app, is transforming our business. Now available in 17 markets and 11 languages across Asia and Africa, Pulse has rapidly become one of Asia's most popular health ecosystems",
    },
    {
      id: 2,
      name: '',
      title: 'Prudence Foundation',
      desc:
        'Prudence Foundation’s strategy is focused around health and resilience issues relevant to the communities in which we operate, education, particularly financial education, and building resilience across communities.',
    },
  ]
  let object = useLocation()
  var id = object.pathname.substring(object.pathname.lastIndexOf('/') + 1)
  const data = detail[id - 1]
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: '100px',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '20px', color: '#ed1b2e' }}>{data.name}</p>
      <p style={{ fontSize: '30px' }}>{data.title}</p>
      <p>{data.desc}</p>
    </div>
  )
}

export default WhatsHotDetail
