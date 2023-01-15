export function getMeeting() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            data = JSON.parse(request.responseText);
            showMeeting(data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", "a_data/meeting.json", true);
    request.send();
}

function showMeeting(data) {
    var meeting = document.getElementsByClassName('sub-table');
    if (meeting.length == 0) {
        // ex
        var html = '<tr class="sub-table"><td>' + 'Dec_03_22' + '</td><td>' + data[index_globe].Dec_03_22_present + '</td><td>' + data[index_globe].Dec_03_22_organizer + '</td><td class="sub-total">' + (data[index_globe].Dec_03_22_present + data[index_globe].Dec_03_22_organizer) + '</td></tr>';
        document.getElementById('js-insert').insertAdjacentHTML('beforeend', html);
        // add more days here
        // ...
    }
    var subTotal = document.getElementsByClassName('sub-total');
    var sum = 0;
    for (var i = 0; i < meeting.length; i++) {
        sum += subTotal[i].innerHTML - null;
    }
    // add them  ngay thi nho chinh phan nay
    document.getElementById('total-meeting').innerHTML = sum;
    document.getElementById('sum-meeting').innerHTML = sum;
}