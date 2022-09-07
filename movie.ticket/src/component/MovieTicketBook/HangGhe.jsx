import React, { Component, Fragment } from 'react'
import takeData from './index';

export default class HangGhe extends Component {

    state = {
        backgroundColor: 'white',
        disabled: this.props.active,
        gheDaChon: [],
    }
    //không sử dụng, không áp dụng backgroundColor được
    colorChange = (seatClick) => {

        const list = this.props.hangGhe.danhSachGhe;
        const index = list.findIndex((item) => item.soGhe === seatClick.soGhe)

        // const newBackgroundColor = this.state.backgroundColor == 'white' ? 'green' : 'white';
        if (index !== -1) {
            // this.setState({ backgroundColor: newBackgroundColor });
        }
        // console.log('index', index)
        const { soGhe } = this.props
        soGhe.push(seatClick.soGhe)

        // console.log('ghe dang chon',soGhe)

        return soGhe
    }

    chonGhe = (soGhe) => {
        const list = this.props.hangGhe.danhSachGhe;
        const index = list.findIndex((item) => item.soGhe === soGhe)
        const { gheDaChon } = this.state;
        const seatArr = this.props.soGhe;
        console.log(this.props.soLuongGheDat)
        console.log(gheDaChon)

        if (index !== -1) {
            const indexDaChon = gheDaChon.findIndex(n => n === soGhe);
            if (indexDaChon == -1) {
                this.setState({ gheDaChon: [...gheDaChon, soGhe] });
                //seatArr là mảng ghế chọn để render dưới cuối trang
                seatArr.push(soGhe)
            }
            else {
                gheDaChon.splice(indexDaChon, 1);
                this.setState({ gheDaChon: [...gheDaChon] });
                //seatArr là mảng ghế chọn để render dưới cuối trang
                seatArr.splice(indexDaChon, 1);
            }
        }
        if (this.props.soLuongGheDat == seatArr.length) {
            this.props.changeActive()
        }
        if (this.props.soLuongGheDat - 1 > seatArr.length) {
            this.props.remind()    
        }
    }
    renderGhe = () => {
        const { active } = this.props
        const { gheDaChon } = this.state;

        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {

                let cssGheDaDat = '';
                let disabled = active;
                const indexDaChon = gheDaChon.findIndex(n => n == ghe.soGhe);

                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    disabled = true;
                }

                if (index >= 0 && index < 5) {

                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button style={{ backgroundColor: indexDaChon !== -1 ? "green" : "white" }} onClick={() => { this.chonGhe(ghe.soGhe) }} className={`ghe ${cssGheDaDat}`} disabled={disabled} type="button" value={ghe.soGhe} />
                        </td>
                    )
                }
            })
        )
    }
    renderGhe1 = () => {
        const { active } = this.props
        const { gheDaChon } = this.state;

        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                const indexDaChon = gheDaChon.findIndex(n => n == ghe.soGhe);

                let cssGheDaDat = '';
                let disabled = active;
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    disabled = true;
                }
                if (index >= 5) {
                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button className={`ghe ${cssGheDaDat}`} style={{ backgroundColor: indexDaChon !== -1 ? "green" : "white" }} onClick={() => this.chonGhe(ghe.soGhe)} disabled={disabled} type="checkbox" value={ghe.soGhe} />
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
        // const { hangGhe } = this.props
        // console.log(this.state.gheDaChon)
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
