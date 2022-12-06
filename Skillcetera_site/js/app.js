// read data

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", myFunction1);

var id_globle;

function myFunction1() {
    var id = document.getElementById("search-input").value.toUpperCase();
    id_globle = id;
    reset();
    getTodo(id, "a_data/info.json");
}

function reset() {
    var meeting = document.getElementById('meeting-table');
    var project = document.getElementById('project-table');
    var ass = document.getElementById('ass-table');
    meeting.style.display = 'none';
    ass.style.display = 'none';
    project.style.display = 'none';

    var phanTuCha = document.getElementById("js-insert");
    // var phanTuCon = document.getElementById("test");
    let toRemove = document.querySelector(".sub-table");

    // gọi remove để xóa phần tử DOM
    if (toRemove != null) {
        toRemove.remove();
    }
}

function getTodo(id, path) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            data = JSON.parse(request.responseText); // to json type
            // const dataString = JSON.stringify(data);
            // callback(undefined, data);
            search(id, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", path, true);
    request.send();
}

var index_globe;

function search(id, data) {
    var nf = document.getElementById('notfound');
    var info = document.getElementById('info');
    for (let index = 0; index < data.length; index++) {
        if (id == data[index].ID) {
            index_globe = index;
            nf.style.display = 'none';
            info.style.display = 'block';
            var _id = document.getElementById('ID');
            _id.innerHTML = data[index].ID;
            var _name = document.getElementById('name');
            _name.innerHTML = data[index].Name;
            document.getElementById('sum-meeting').innerHTML = data[index_globe].Dec_03_22;
            return;
            
        }
    }
    nf.style.display = 'block';
    info.style.display = 'none';

}
// continute - select detail

function select_func() {
    var opt = document.getElementById('slc-detail').value;

    var meeting = document.getElementById('meeting-table');
    var ass = document.getElementById('ass-table');
    var project = document.getElementById('project-table');
    switch (opt) {
        case "1":
            meeting.style.display = 'block';
            ass.style.display = 'none';
            project.style.display = 'none';
            showMeeting(id_globle, "a_data/meeting.json");
            break;
        case "2":
            meeting.style.display = 'none';
            project.style.display = 'block';
            ass.style.display = 'none';
            break;
        case "3":
            meeting.style.display = 'none';
            project.style.display = 'none';
            ass.style.display = 'block';
            break;
        default:
            meeting.style.display = 'none';
            ass.style.display = 'none';
            project.style.display = 'none';
    }
}

function showMeeting(id, path) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            data = JSON.parse(request.responseText); // to json type
            // const dataString = JSON.stringify(data);
            // callback(undefined, data);
            insertMeeting(id, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", path, true);
    request.send();
}

function insertMeeting(id, data) {
    var meeting = document.getElementsByClassName('sub-table');
    if (meeting.length == 0) {
        var html = '<tr class="sub-table"><td>' + 'Dec_03_22' + '</td><td>' + '..' + '</td><td>' + '..' + '</td><td id="total">' + data[index_globe].Dec_03_22 + '</td></tr>';
        document.getElementById('js-insert').insertAdjacentHTML('beforeend', html);
    }
    document.getElementById('total-meeting').innerHTML = data[index_globe].Dec_03_22;

}
