import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import takeData from './index'

class Content extends Component {
  state = {
    opacity: 0,
    message: '',
    color: 'transparent',
    // disable: true,
    // disableConfirm: true,
    // thongTinDatVe:
    // {
    //   hoTen: '',
    //   soLuong: '',
    //   soGhe: [],
    // }
    // ,
    // soLuongGheDat: 0
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

    this.setState({
      thongTinDatVe: value
    })
  }

  // handleStart = () => {
  //   console.log('adddđ')
  //   let info = takeData()
  //   if (info === true) {
  //     this.setState({
  //       opacity: 1,
  //       message: 'Thank you. Continue select your seats!',
  //       color: 'green',
  //     })

  //   }
  //   else {
  //     this.setState({
  //       opacity: 1,
  //       message: 'Oops! Please fill out your information !',
  //       color: 'red',
  //     })
  //   }
  //   console.log(info, 'thong tin')
  //   // this.setState({ soLuongGheDat: document.getElementById('soGhe').value })
  //   return false
  // }
  changeActive = () => {
    this.setState({ disable: true, disableConfirm: false })
  }
  remind = () => {
    this.setState({ disableConfirm: false })
  }

  renderHangGhe = () => {
    const { ticket } = this.props
    return (
      data.map((hangGhe, index) => {
        if (index >= 1 && index < 6) {
          return (
            <Fragment key={index} >
              <HangGhe remind={this.remind} changeActive={this.changeActive} soLuongGheDat={ticket.soLuongGheDat} hangGhe={hangGhe} soHangGhe={index} soGhe={ticket.thongTinDatVe.soGhe} active={ticket.disable} />
            </Fragment>
          )
        }
      })
    )
  }
  renderHangGhe1 = () => {
    const { ticket } = this.props
    return (
      data.map((hangGhe, index) => {
        if (index >= 6) {
          return (
            <Fragment key={index} >
              <HangGhe remind={this.remind} changeActive={this.changeActive} soLuongGheDat={ticket.soLuongGheDat} hangGhe={hangGhe} soHangGhe={index} soGhe={ticket.thongTinDatVe.soGhe} active={ticket.disable} />
            </Fragment>
          )
        }
      })
    )
  }

  render() {
    const { ticket, handleStart, confirmSelection } = this.props;
    const seat = ticket.thongTinDatVe
    console.log(seat,'seat')
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
              <button className='text-dark mt-4' onClick={() => { takeData(); handleStart() }}>Start Selecting</button>
              <span className='font-italic' style={{ fontSize: '1.5rem', marginLeft: '3rem', opacity: ticket.opacity, color: ticket.color }}>{ticket.message}</span>
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
            <button className='btnConfirm' disabled={false} onClick={() => { console.log('alo alo'); confirmSelection(seat) }}>confirm selection</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch({
        type: 'CHECK_INFO',
        payload: {
          opacity: 1,
          message: 'Thank you. Continue select your seats!',
          color: 'green',
          disable: false,
          disableConfirm: true,
          thongTinDatVe:
          {
            hoTen: '',
            soLuong: '',
            soGhe: [],
          }
          ,
          soLuongGheDat: 0
        }
      })
    },
    confirmSelection: (seatOrder) => {
      dispatch({
        type: 'SEAT_ORDER',
        payload: seatOrder,
      })
    }
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    ticket: rootReducer.movieTicket.ticketPage,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)