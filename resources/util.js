var today = new Date();
var dd = today.getDate();
var yd = today.getDate()-1;
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
    yd = '0' + yd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var yesterday = yyyy.toString().slice(2) + '-' + mm + '-' + yd;
var dmyDate = yyyy.toString().slice(2) + '-' + mm + '-' + dd;