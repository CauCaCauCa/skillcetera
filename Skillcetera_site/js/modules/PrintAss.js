function getAss() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            data = JSON.parse(request.responseText);
            showAss(data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", "a_data/assignment.json", true);
    request.send();
}

function showAss(data) {
    var ass = document.getElementsByClassName('sub-table-ass');
    if (ass.length == 0) {
        var html = '<tr class="sub-table-ass"><td>Dec_03_22</td><td>Dec_05_22</td><td class="sub-total-ass">' + data[index_globe].Dec_03_22 + '</td></tr>';
        document.getElementById('js-insert-ass').insertAdjacentHTML('beforeend', html);
        // add more days here
        // ...
    }
    var subTotal = document.getElementsByClassName('sub-total-ass');
    var sum = 0;
    for (var i = 0; i < ass.length; i++) {
        sum += subTotal[i].innerHTML - null;
    }
    document.getElementById('total-ass').innerHTML = sum;
    document.getElementById('sum-ass').innerHTML = sum;
}