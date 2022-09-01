import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SiderBar from './SiderBar'
import './style.css'
import './BaiTapBookingTicket.css'

export default class Movie extends Component {
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
