import React, { Component } from 'react'
import CssDatVe from './BaiTapBookingTicket.css'

export default class HangGhe extends Component {
    renderGhe = () => {
        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = '';
                let disable = 'false';
                if (ghe.daDat) {
                    cssGheDaDat ='gheDuocChon';
                    disable = 'true'
                }
                return (
                    <td style={{ marginRight: '10px' }} key={index}>
                        <button disable={disable} type="checkbox" value={ghe.soGhe}/>
                    </td>
                )
            })
        )
    }

    render() {
        const { hangGhe } = this.props
        return (
            <tr className='d-flex align-items-center mt-3'>
                <td style={{ paddingTop: '15px' }} >
                    {hangGhe.hang}
                </td>
                {this.renderGhe()}
            </tr>
        )
    }
}
