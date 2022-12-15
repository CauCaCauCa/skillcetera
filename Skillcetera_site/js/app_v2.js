
var index_globe;

function search_ENTER() {
    var id = document.getElementById("search-input").value.toUpperCase().trim();
    getTodo(id, "a_data/info.json");
}

function getTodo(id, path) { // read file.json
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            data = JSON.parse(request.responseText);
            search(id, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", path, true);
    request.send();
}

function search(id, data) {
    var nf = document.getElementById('notfound');
    var info = document.getElementById('info');
    for (let index = 0; index < data.length; index++) {
        if (id == data[index].Id) {
            index_globe = index;
            nf.style.display = 'none';
            info.style.display = 'block';
            var _id = document.getElementById('ID');
            _id.innerHTML = data[index].Id;
            var _name = document.getElementById('name');
            _name.innerHTML = data[index].Name;
            // reset for new searching
            reset();
            // getMeeting
            getMeeting();
            // getAss
            getAss();
            return;
        }
    }
    nf.style.display = 'block';
    info.style.display = 'none';
}
function reset() {


    var meeting = document.getElementById('meeting-table');
    var project = document.getElementById('project-table');
    var ass = document.getElementById('ass-table');
    meeting.style.display = 'none';
    ass.style.display = 'none';
    project.style.display = 'none';

    var phanTuCha = document.getElementById("js-insert");
    let toRemove = document.querySelector(".sub-table");
    if (toRemove != null) {
        toRemove.remove();
    }

    var phanTuCha = document.getElementById("js-insert-ass");
    let resetAss = document.querySelector(".sub-table-ass");
    if (resetAss != null) {
        resetAss.remove();
    }
}
// ******************************************** //
//        Setup section "Detail display"        //
// ******************************************** //

function select_func() {
    var opt = document.getElementById('slc-detail').value;

    var meeting = document.getElementById('meeting-table');
    var ass = document.getElementById('ass-table');
    var project = document.getElementById('project-table');

    meeting.style.display = 'none';
    ass.style.display = 'none';
    project.style.display = 'none';

    switch (opt) {
        case "1":
            meeting.style.display = 'block';
            break;
        case "2":
            ass.style.display = 'block';
            break;
        case "3":
            project.style.display = 'block';
            break;
    }
}

// ******************************************* //

function getMeeting() {
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
    request.open("GET", "a_data/meeting_update_dec_15_22.json", true);
    request.send();
}

function showMeeting(data) {
    var meeting = document.getElementsByClassName('sub-table');
    if (meeting.length == 0) {
        var html = '<tr class="sub-table"><td>' + 'Dec_03_22' + '</td><td>' + data[index_globe].Dec_03_22_present + '</td><td>' + data[index_globe].Dec_03_22_organizer + '</td><td class="sub-total">' + (data[index_globe].Dec_03_22_present + data[index_globe].Dec_03_22_organizer) + '</td></tr>';
        document.getElementById('js-insert').insertAdjacentHTML('beforeend', html);
        var html = '<tr class="sub-table"><td>' + 'Dec_10_22' + '</td><td>' + data[index_globe].Dec_10_22_present + '</td><td>' + data[index_globe].Dec_10_22_organizer + '</td><td class="sub-total">' + (data[index_globe].Dec_10_22_present + data[index_globe].Dec_10_22_organizer) + '</td></tr>';
        document.getElementById('js-insert').insertAdjacentHTML('beforeend', html);
        var html = '<tr class="sub-table"><td>' + 'Dec_13_22' + '</td><td>' + data[index_globe].Dec_13_22_present + '</td><td>' + data[index_globe].Dec_13_22_organizer + '</td><td class="sub-total">' + (data[index_globe].Dec_13_22_present + data[index_globe].Dec_13_22_organizer) + '</td></tr>';
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

// ******************************************* //
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



