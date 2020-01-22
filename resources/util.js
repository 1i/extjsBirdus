var today = new Date();
var dd = today.getDate();
var yd = today.getDate() - 1;
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
var referenceUrl = "http://www.irishbirding.com/birds/web/Display/sighting/";

function getDateWithOffset(offset){
    if(isNaN(offset)){
        offset = 0;
    }
    var baseDate = new Date();
    var offsetDate = parseInt((today.getDate()) + parseInt(offset));

    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (offsetDate < 10) {
        offsetDate = '0' + dd;
        yd = '0' + yd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var yesterday = yyyy.toString().slice(2) + '-' + mm + '-' + yd;

    var offsetDateString = yyyy.toString().slice(2) + '-' + mm + '-' + offsetDate;
    console.log(offsetDateString);
    return offsetDateString;
}

function getReferenceBird(record) {
    url = "http://www.irishbirding.com/birds/web/Display/sighting/";
    if (record) {
        var names = record.get("commonName").split(" ");
        var resultName = "";
        for (i in names) {
            resultName = resultName + names[i];
            if (names.length > 1) {
                resultName = resultName + "_";
            }
        }
        var reference = record.get("reference").slice(2);
        referenceUrl = url + reference + "/" + resultName + ".html";
        return referenceUrl;
    }
    else {
        return referenceUrl;
    }
}