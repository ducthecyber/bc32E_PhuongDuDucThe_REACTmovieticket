import React, { Component, Fragment } from 'react'
import CssDatVe from './BaiTapBookingTicket.css'

export default class HangGhe extends Component {

    renderGhe = () => {
        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = '';
                let disable = 'false';
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    disable = 'true'
                }
                if (index >= 0 && index<5 ) {
                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button className={`ghe ${cssGheDaDat}`} disable={disable} type="checkbox" value={ghe.soGhe} />
                        </td>
                    )
                }
            })
        )
    }
    renderGhe1 = () => {
        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = '';
                let disable = 'false';
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    disable = 'true'
                }
                if (index >= 5 ) {
                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button className={`ghe ${cssGheDaDat}`} disable={disable} type="checkbox" value={ghe.soGhe} />
                        </td>
                    )
                }
            })
        )
    }
    renderHangGhe = () => {
        const { hangGhe, soHangGhe } = this.props
        return (
            <td style={{ marginRight: '10px' }} >
                {hangGhe.hang}
            </td>
        )
    }

    render() {
        const { hangGhe } = this.props
        return (
            <tr className='d-flex align-items-center mt-3'>
                {this.renderHangGhe()}
                {this.renderGhe()}
                <td></td>
                {this.renderGhe1()}
            </tr>
        )
    }
}
