import React, { Component } from 'react'

export default class SiderBar extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          {/* Sidebar */}
          <div id="sidebar">
            <div id="dismiss">
              <span>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </span>
            </div>
            <div className='w3l-demo-bar'>
              <div className="demo-btns">
                <a href="https://w3layouts.com/template/movie-seat-selection-flat-responsive-widget-template/">
                  <span className='sidebar-icon' ><i className="fa fa-arrow-left" aria-hidden="true"></i></span>
                  <span>Back</span>
                </a>
                <a href="https://w3layouts.com/template/movie-seat-selection-flat-responsive-widget-template/">
                  <span className='sidebar-icon'><i className="fa fa-download" aria-hidden="true"></i></span>
                  <span>Download</span>
                </a>
                <a href="https://w3layouts.com/template/movie-seat-selection-flat-responsive-widget-template/">
                  <span className='sidebar-icon'><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                  <span>Buy</span>
                </a>
              </div>
            </div>

          </div>
          {/* Page Content */}
          <div id="content">
            <div className="toggle-right-side-bar">
              <button type="button" id="sidebarCollapse" className='border-0' style={{ background: 'none', cursor: 'pointer', outline: 'none', border: 'none' }}>
                <span>
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
          {/* Dark Overlay element */}
          <div className="overlay"></div>
        </div>
      </div>
    )
  }
}
