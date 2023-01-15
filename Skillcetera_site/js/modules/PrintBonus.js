export function getBonus(index) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            showBonus(index, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", "./a_data/bonus.json", true);
    request.send();
}

function showBonus(index, data) {
    var bonus = document.getElementsByClassName('sub-table-bonus');
    // console.log(index_globe.innerHTML); // will get tag has id index_globe
    if (bonus.length == 0) {

        if (data[index].Jan_13 != undefined) { // just someone have bonus
            var arr = data[index].Jan_13.split('-');
            var html = '<tr class="sub-table-bonus"><td>Jan_13</td><td>' + arr[0] + '</td><td class="sub-total-bonus">' + arr[1] + '</td></tr>';
            document.getElementById('js-insert-bonus').insertAdjacentHTML('beforeend', html);
        }
        // end for a bonus

        var html = '<tr class="sub-table-bonus"><td>Lixi</td><td>' + 'none' + '</td><td class="sub-total-bonus">' + data[index].Lixi + '</td></tr>';
        document.getElementById('js-insert-bonus').insertAdjacentHTML('beforeend', html);
        // end for a bonus

        // add more bonus here
        // ...
    }
    var subTotal = document.getElementsByClassName('sub-total-bonus');
    var sum = 0;
    for (var i = 0; i < subTotal.length; i++) {
        sum += subTotal[i].innerHTML - null;
    }
    document.getElementById('total-bonus').innerHTML = sum;
    document.getElementById('sum-bonus').innerHTML = sum;
}