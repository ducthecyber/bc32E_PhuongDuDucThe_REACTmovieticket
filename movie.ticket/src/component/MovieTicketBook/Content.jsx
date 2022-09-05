import React, { Component, Fragment } from 'react'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import takeData from './index'

export default class Content extends Component {
  state = {
    opacity: 0,
    message: '',
    color: 'transparent',
    disable: true,
    thongTinDatVe:
    {
      hoTen: '',
      soLuong: '',
      soGhe: [],
    }
    ,
  }


  confirmSelection = (thongTinNguoiDung) => {
    //mảng những cái ghế đã chọn
    const data = [...this.state.thongTinDatVe.soGhe]
    const selected = () => {
      let text = ''
      //tách mảng ra từng phần tử để render ra giao diện, mỗi value là 1 ghế
      for (let value of data) {
        text += value + ' ';
      }
      return text
    }
    const gheChon = selected()

    const value = {
      ...thongTinNguoiDung,
      hoTen: document.getElementById('hoTen').value,
      soLuong: document.getElementById('soGhe').value,
      soGhe: gheChon,
    }
    if (data.length < value.soLuong) {
      alert(`You still have ${value.soLuong - data.length} seats left !`)
      return false
    }
    else if (data.length === value.soLuong) {

    }

    console.log(value)
    console.log(data)
    this.setState({
      thongTinDatVe: value
    })
  }

  handleStart = () => {
    let info = takeData()
    if (info === true) {
      this.setState({
        opacity: 1,
        message: 'Thank you. Continue select your seats!',
        color: 'green',
        disable: false,
      })
    }
    else {
      this.setState({
        opacity: 1,
        message: 'Oops! Please fill out your information !',
        color: 'red',
      })
    }
    console.log(info)
    console.log(this.state.disable)
  }

  renderHangGhe = () => {
    return (
      data.map((hangGhe, index) => {
        if (index >= 1 && index < 6) {
          return (
            <Fragment key={index} >
              <HangGhe hangGhe={hangGhe} soHangGhe={index} soGhe={this.state.thongTinDatVe.soGhe} active={this.state.disable} />
            </Fragment>
          )
        }
      })
    )
  }
  renderHangGhe1 = () => {
    return (
      data.map((hangGhe, index) => {
        if (index >= 6) {
          return (
            <Fragment key={index} >
              <HangGhe hangGhe={hangGhe} soHangGhe={index} soGhe={this.state.thongTinDatVe.soGhe} active={this.state.disable} />
            </Fragment>
          )
        }
      })
    )
  }

  render() {

    const seat = this.state.thongTinDatVe
    return (
      <div className='container'>
        <div className="inner-content">
          <div className="input-form text-left">
            <h2>Fill The Required Details Below And Select Your Seats</h2>
            <div className="form-group row mt-3" style={{ justifyContent: 'space-between', width: '100%' }}>
              <div className="col-7 text-left leftForm">
                <label>
                  Name
                  <span className='text-danger ml-2'>*</span>
                </label>
                <input id='hoTen' type="text" required className="form-control" style={{ background: 'none' }} />
                <span className='form-validation font-italic' id='error_required_hoTen' style={{ color: 'red', fontSize: '1rem', display: 'inline-block', marginTop: '0.5rem' }}></span>
              </div>
              <div className="col-4 text-left rightForm">
                <label>
                  Number of Seats
                  <span className='text-danger ml-2'>*</span>
                </label>
                <input id='soGhe' type="number" required min={1} className="form-control" style={{ background: 'none' }} />
                <span className='form-validation font-italic' id='error_required_soGhe' style={{ color: 'red', fontSize: '1rem', display: 'inline-block', marginTop: '0.5rem' }}></span>
              </div>
            </div>
            <div>
              <button className='text-dark mt-4' onClick={() => { takeData(); this.handleStart() }}>Start Selecting</button>
              <span className='font-italic' style={{ fontSize: '1.5rem', marginLeft: '3rem', opacity: this.state.opacity, color: this.state.color }}>{this.state.message}</span>
            </div>
          </div>
          <ul className="seat-status d-flex">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>
          <div className="seat-structure">
            <table className="seatTable text-center ml-5">
              <tbody>
                <tr className='d-flex align-items-center mt-3' style={{ justifyContent: 'space-between', marginRight: '10px' }}>
                  <td></td>
                  {
                    data.map((hangGhe, index) => {
                      if (index == 0) {
                        return (
                          hangGhe.danhSachGhe.map((hangDau, index) => {
                            if (index <= 4) {
                              return (
                                <td style={{ width: '45px' }} key={index}>{hangDau.soGhe}</td>
                              )
                            }
                          })
                        )
                      }
                    })
                  }
                  <td></td>
                  {
                    data.map((hangGhe, index) => {
                      if (index == 0) {
                        return (
                          hangGhe.danhSachGhe.map((hangDau, index) => {
                            if (index > 4) {
                              return (
                                <td style={{ width: '45px' }} key={index}>{hangDau.soGhe}</td>
                              )
                            }
                          })
                        )
                      }
                    })
                  }

                </tr>
                {this.renderHangGhe()}
                <tr style={{ height: '3rem' }}>
                  <td></td>
                </tr>
                {this.renderHangGhe1()}
              </tbody>
            </table>
            <div className="screenBox">
              <h2>screen this way</h2>
            </div>
            <button className='btnConfirm' disabled={this.state.disable} onClick={() => { this.confirmSelection(seat) }}>confirm selection</button>
          </div>

          <div className="selected-seat mt-5">
            <table className="yourSeat" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0.25em 0.25em' }}>
              <tbody>
                <tr className='bg-white tableHead'>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                <tr className='bg-white'>
                  <td>{seat.hoTen}
                    <textarea id="nameInfo" rows="2"></textarea>
                  </td>
                  <td>{seat.soLuong}
                    <textarea id="numberInfo" rows="2"></textarea>
                  </td>
                  <td>{seat.soGhe}
                    <textarea id="seatInfo" rows="2"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
