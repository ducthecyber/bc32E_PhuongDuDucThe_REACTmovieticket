import React, { Component, Fragment } from 'react'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import CssDatVe from './BaiTapBookingTicket.css'

export default class Content extends Component {

  renderHangGhe = () => {
    return (
      data.map((hangGhe, index) => {
        if (index >= 1 && index < 6) {
          return (
            <Fragment key={index} >
              <HangGhe hangGhe={hangGhe} soHangGhe={index} />
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
              <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </Fragment>
          )
        }
      })
    )
  }

  render() {
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
                <input type="text" className="form-control" style={{ background: 'none' }} />
              </div>
              <div className="col-4 text-left rightForm">
                <label>
                  Number of Seats
                  <span className='text-danger ml-2'>*</span>
                </label>
                <input type="number" className="form-control" style={{ background: 'none' }} />
              </div>
            </div>
            <button className='text-dark mt-4'>Start Selecting</button>
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
                            if(index<=4){
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
                              if(index>4){
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
            <button className='btnConfirm'>confirm selection</button>
          </div>
          <div className="selected-seat mt-5">
            <table className="yourSeat" style={{width:'100%',borderCollapse:'separate',borderSpacing:'0.25em 0.25em'}}>
              <tbody>
                <tr className='bg-white tableHead'>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                <tr className='bg-white'>
                  <td>
                    <textarea id="nameInfo"  rows="2"></textarea>
                  </td>
                  <td>
                    <textarea id="numberInfo" rows="2"></textarea>
                  </td>
                  <td>
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
