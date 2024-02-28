import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './thankyou-for-ordering.css'

const ThankyouForOrdering = (props) => {
  return (
    <div className="thankyou-for-ordering-container">
      <Helmet>
        <title>Thankyou-for-ordering - DevXPro</title>
        <meta property="og:title" content="Thankyou-for-ordering - DevXPro" />
      </Helmet>
      <div className="thankyou-for-ordering-container1">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="thankyou-for-ordering-icon"
        >
          <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <h1 className="thankyou-for-ordering-text">Thank you!</h1>
        <h1 className="thankyou-for-ordering-text1">
          You can track your orders through the &quot;My Orders&quot; menu. If
          you have any questions, contact the support team or your seller.
          We&apos;re always happy to help :)
        </h1>
        <Link to="/" className="thankyou-for-ordering-navlink button">
          <svg viewBox="0 0 1024 1024" className="thankyou-for-ordering-icon2">
            <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
          </svg>
          <span className="thankyou-for-ordering-text2">Back to market</span>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ThankyouForOrdering
