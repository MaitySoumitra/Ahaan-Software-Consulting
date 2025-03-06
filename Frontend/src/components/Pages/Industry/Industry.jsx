import React from 'react'
import IndustryBanner from './IndustryBanner'
import IndustryTab from './IndustryTab'
import Market from './Market'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Industry = () => {
  return (
    <Container>
        <IndustryBanner/>
        <IndustryTab/>
        <Market/>
    </Container>
  )
}

export default Industry