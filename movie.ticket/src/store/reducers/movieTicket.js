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
    seat: {

    },
    hangGhe: {
        "hang": "A",
        "danhSachGhe": [
            { "soGhe": "A1", "gia": 75000, "daDat": false },
            { "soGhe": "A2", "gia": 75000, "daDat": false },
            { "soGhe": "A3", "gia": 75000, "daDat": false },
            { "soGhe": "A4", "gia": 75000, "daDat": false },
            { "soGhe": "A5", "gia": 75000, "daDat": false },
            { "soGhe": "A6", "gia": 75000, "daDat": false },
            { "soGhe": "A7", "gia": 75000, "daDat": false },
            { "soGhe": "A8", "gia": 75000, "daDat": false },
            { "soGhe": "A9", "gia": 75000, "daDat": false },
            { "soGhe": "A10", "gia": 75000, "daDat": false },
            { "soGhe": "A11", "gia": 0, "daDat": true },
            { "soGhe": "A12", "gia": 0, "daDat": true }
        ]
    },
}

export const movieTicket = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHECK_INFO': {
            let info = takeData()
            if (info === true) {
                state.ticketPage = action.payload
            }
            else {
                state.ticketPage = { ...action.payload, message: 'Oops! Please fill out your information !', color: 'red' }
            }
            return { ...state }
        };
        case 'SELECTED_SEAT': {
            let listGheDangDatUpdate = [...state.listGheDangDat]
            let index = listGheDangDatUpdate.findIndex
                (item => item === action.payload);
            console.log(index, 'index')
            if (index !== -1) {
                listGheDangDatUpdate.splice(index, 1)
                console.log(listGheDangDatUpdate, 'listDangDat')
            }
            else {
                listGheDangDatUpdate.push(action.payload)
                console.log(listGheDangDatUpdate, 'listDangDat')
            }
            if (state.listGheDangDat.length + 1 === Number(document.getElementById('soGhe').value)) {
                state.ticketPage.disableConfirm = false
                console.log(state.ticketPage.disableConfirm)
            }
            state.listGheDangDat = listGheDangDatUpdate;

            let array = []

            if (state.listGheDangDat.length +1 === Number(document.getElementById('soGhe').value)) {
                console.log('ai day')
                data.forEach((value, index) => {
                    value.danhSachGhe.forEach((val, idx) => {
                        array.push(val.soGhe)
                        let result = array.find(item => item === action.payload)
                        console.log(result,'result')
                    })
                })
            }

            return { ...state }
        };

        case 'SEAT_ORDER': {
            const seatMovie = state.listGheDangDat
            console.log(seatMovie)
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
            if (seatMovie.length < seat.soLuong) {
                alert(`You have ${seat.soLuong - seatMovie.length} left`)
            }

            let array = []
            if (seatMovie.length == seat.soLuong) {
                data.forEach((value, index) => {
                    value.danhSachGhe.forEach((val, idx) => {
                        array.push(val.soGhe)
                    })
                })
            }

            return { ...state }
        }
        default: return state
    }
}
