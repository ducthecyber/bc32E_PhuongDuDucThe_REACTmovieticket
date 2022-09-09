import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SiderBar from './SiderBar'
import './style.css'
import './BaiTapBookingTicket.css'

class Movie extends Component {
    render() {
        return (
            <div>
               <Header/>
               <SiderBar/>
               <Content/>
               <Footer/>
            </div>
        )
    }
}

//kết nối component với store 
export default connect()(Movie)