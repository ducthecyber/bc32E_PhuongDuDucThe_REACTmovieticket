import React, { Component, Fragment } from 'react'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import CssDatVe from './BaiTapBookingTicket.css'

export default class Content extends Component {

  renderHangGhe = () => {
    return (
      data.map((hangGhe, index) => {
        if (index >=0) {
          return (
            <Fragment key={index}>
              <HangGhe hangGhe={hangGhe} />
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
            <table className="seatTable text-center">
              <tbody>
                {/* <tr className='d-flex align-items-center mt-3'>
                  <td></td>
                  <td style={{ marginRight: '10px' }}>1</td>
                  <td style={{ marginRight: '10px' }}>2</td>
                  <td style={{ marginRight: '10px' }}>3</td>
                  <td style={{ marginRight: '10px' }}>4</td>
                  <td style={{ marginRight: '10px' }}>5</td>
                  <td style={{ marginRight: '10px' }}>6</td>
                  <td style={{ marginRight: '10px' }}>7</td>
                  <td style={{ marginRight: '10px' }}>8</td>
                  <td style={{ marginRight: '10px' }}>9</td>
                  <td style={{ marginRight: '10px' }}>10</td>
                  <td style={{ marginRight: '10px' }}>11</td>
                  <td style={{ marginRight: '10px' }}>12</td>
                </tr> */}
                {this.renderHangGhe()}
                {/* <tr className='d-flex align-items-center flex-column'>
                </tr> */}
                {/* {this.renderHangDau()} */}

                {/* <td style={{ marginRight: '10px' }}>
                  <input type="checkbox" value={'A1'} />
                </td> */}
              </tbody>
            </table>
          </div>
          <div className="selected-seat"></div>
        </div>
      </div>
    )
  }
}
