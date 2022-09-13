import takeData from '../../../src/component/BTMovieTicketRedux/index'
import data from '../../component/BTMovieTicketRedux/danhSachGhe.json'

const stateDefault = {
    ticketPage: {
        opacity: 0,
        message: '',
        color: 'transparent',
        disable: true,
        disableConfirm: true,
        thongTinDatVe:
        {
            hoTen: '',
            soLuong: '',
            soGhe: [],
        }
        ,
        soLuongGheDat: 0
    },
    listGheDangDat: [

    ],

}

export const movieTicket = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHECK_INFO': {

            let info = takeData()
            if (info === true) {
                state.ticketPage = action.payload
            }
            else {
                state.ticketPage = {
                    ...action.payload, message: 'Oops! Please fill out your information !', color: 'red',
                }
            }
            return { ...state }
        }
        case 'SELECTED_SEAT': {
            let listGheDangDatUpdate = [...state.listGheDangDat]
            let index = listGheDangDatUpdate.findIndex
                (item => item === action.payload);

            if (index !== -1) {
                listGheDangDatUpdate.splice(index, 1)
                console.log(listGheDangDatUpdate, 'listDangDat')
            }
            else {
                listGheDangDatUpdate.push(action.payload)
                console.log(listGheDangDatUpdate, 'listDangDat')
            }
            if (state.listGheDangDat.length + 1 === Number(document.getElementById('soGhe').value)) {
                state.ticketPage.disableConfirm = false;
            }

            //cập nhật số lượng ghế đã chọn, để bên HangGhe nhận được, so sánh với số lượng ghế nhập, nếu bằng thì disable các nút còn lại
            state.listGheDangDat = listGheDangDatUpdate;
            state.ticketPage.thongTinDatVe.soLuong = Number(document.getElementById('soGhe').value)

            return { ...state }
        }

        case 'SEAT_ORDER': {

            const seatMovie = state.listGheDangDat

            const selected = () => {
                let text = ''
                //tách mảng ra từng phần tử để render ra giao diện, mỗi value là 1 ghế
                for (let value of seatMovie) {
                    text += value + ' ';
                }
                return text
            }
            const gheChon = selected()
            const seat = state.ticketPage.thongTinDatVe
            seat.hoTen = document.getElementById('hoTen').value;
            seat.soLuong = document.getElementById('soGhe').value;
            seat.soGhe = gheChon;
            //CẬP NHẬT STATE KHI THAY ĐỔI THONG TIN ĐẶT VÉ
            state.ticketPage.thongTinDatVe = seat

            //XET DIEU KIEN SO GHE CHON VO SO GHE NHAP
            if (seatMovie.length < seat.soLuong) {
                alert(`You have ${seat.soLuong - seatMovie.length} seats remaining`)
                seat.hoTen = ''; seat.soLuong = ''; seat.soGhe = '';
            }

            return { ...state }

        }
        default: return { ...state }
    }
}
