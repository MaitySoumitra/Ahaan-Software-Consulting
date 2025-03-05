import React from 'react'
import IndustryBanner from './IndustryBanner'
import IndustryTab from './IndustryTab'
import Market from './Market'
import 'bootstrap/dist/css/bootstrap.min.css';

const Industry = () => {
  return (
    <div>
        <IndustryBanner/>
        <IndustryTab/>
        <Market/>
    </div>
  )
}

export default Industry