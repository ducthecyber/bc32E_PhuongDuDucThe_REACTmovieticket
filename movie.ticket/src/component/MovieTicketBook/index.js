import { kiemTraRong, kiemTraKyTu, kiemTraGiaTri, kiemTraSoNguyen } from './method';


export const takeData = () => {
    //hàm validation
    var valid = true;

    var hoTen = document.querySelector('#hoTen').value;
    var valid = kiemTraRong(hoTen, '#error_required_hoTen', 'Your name');
    var valid = kiemTraKyTu(hoTen, '#error_required_hoTen', 'Your name');

    var soGhe = document.querySelector('#soGhe').value;
    var valid = kiemTraRong(soGhe, '#error_required_soGhe', 'Your seat');
    var valid = kiemTraGiaTri(soGhe, '#error_required_soGhe', 'Your seat', 1, 120);
    // var valid = kiemTraSoNguyen(soGhe, '#error_required_soGhe', 'Your seat');

    if (valid !== true) {
        return false;
    }
    else {
        return true;
    }
}

window.onload = () => {
    
}

export default (takeData)
