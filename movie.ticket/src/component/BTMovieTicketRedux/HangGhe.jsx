import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {

    state = {
        backgroundColor: 'white',
        gheDaChon: [],
      
    }
    //không sử dụng, không áp dụng backgroundColor được
    // colorChange = (seatClick) => {

    //     const list = this.props.hangGhe.danhSachGhe;
    //     const index = list.findIndex((item) => item.soGhe === seatClick.soGhe)

    //     // const newBackgroundColor = this.state.backgroundColor == 'white' ? 'green' : 'white';
    //     if (index !== -1) {
    //         // this.setState({ backgroundColor: newBackgroundColor });
    //     }
    //     // console.log('index', index)
    //     const { soGhe } = this.props
    //     soGhe.push(seatClick.soGhe)

    //     // console.log('ghe dang chon',soGhe)

    //     return soGhe
    // }

    chonGhe = (soGhe) => {
        const list = this.props.hangGhe.danhSachGhe;
        const index = list.findIndex((item) => item.soGhe === soGhe)
        const { gheDaChon } = this.state;
        const seatArr = this.props.soGhe;
        // console.log(this.props.soLuongGheDat)


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
        const { seat, chonGhe, listGhe } = this.props
        const active = seat.disable;
        // console.log(listGhe, 'listGHEdangdat')
        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {

                let cssGheDaDat = '';
                let disabled = active;
                const indexDaChon = listGhe.findIndex(n => n == ghe.soGhe);

                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                }
                if (listGhe.length === seat.thongTinDatVe.soLuong) {
                    if (ghe.daDat !== true) {
                        disabled = listGhe.findIndex(item => item == ghe.soGhe) == -1 ? true : false;
                    }
                }
                if (index >= 0 && index < 5) {

                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button style={{ backgroundColor: indexDaChon !== -1 ? "green" : "white" }} onClick={() => { chonGhe(ghe.soGhe) }} className={`ghe ${cssGheDaDat}`} disabled={disabled} type="button" value={ghe.soGhe} />
                        </td>
                    )
                }
            })
        )
    }
    renderGhe1 = () => {
        const { seat, chonGhe, listGhe } = this.props
        const active = seat.disable;
        return (
            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                const indexDaChon = listGhe.findIndex(n => n == ghe.soGhe);

                let cssGheDaDat = '';
                let disabled = active;
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                }

                if (listGhe.length === seat.thongTinDatVe.soLuong) {
                    if (ghe.daDat !== true) {
                        disabled = listGhe.findIndex(item => item == ghe.soGhe) == -1 ? true : false;
                    }
                }

                if (index >= 5) {
                    return (
                        <td style={{ marginRight: '10px' }} key={index}>
                            <button className={`ghe ${cssGheDaDat}`} style={{ backgroundColor: indexDaChon !== -1 ? "green" : "white" }} onClick={() => chonGhe(ghe.soGhe)
                            } disabled={disabled} type="checkbox" value={ghe.soGhe} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (seatName) => {
            dispatch({
                type: 'SELECTED_SEAT',
                payload: seatName,
            })
        }
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        seat: rootReducer.movieTicket.ticketPage,
        listGhe: rootReducer.movieTicket.listGheDangDat,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)