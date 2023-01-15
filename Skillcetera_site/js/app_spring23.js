
// import { getMeeting } from './modules/PrintMeeting';
// import { getAss } from './modules/PrintAss.js';
import { getProject } from './modules/PrintProject.js';
import { getBonus } from './modules/PrintBonus.js';
import { getRank } from './modules/PrintRank.js';

document.getElementById('search-button').addEventListener('click', search_ENTER);

function search_ENTER() {
    var id = document.getElementById("search-input").value.toUpperCase().trim();
    if (document.getElementById('slc-term').value == '0') {
        getTodo(id, "a_data/info.json", 0);
    } else if (document.getElementById('slc-term').value == '1') {
        getTodo(id, "a_data/fall22.json", 1);
    }
}

function getTodo(id, path, term) { // read file.json
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            search(id, data, term);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", path, true);
    request.send();
}

function search(id, data, term) {
    if (term == 0) {
        // only stay at markreport.html
        document.getElementById('slc-detail').addEventListener('change', select_func);

        var nf = document.getElementById('notfound');
        var info = document.getElementById('info');
        for (let index = 0; index < data.length; index++) {
            if (id == data[index].Id) {
                nf.style.display = 'none';
                info.style.display = 'block';
                var _id = document.getElementById('ID');
                _id.innerHTML = data[index].Id.toUpperCase();
                var _name = document.getElementById('name');
                _name.innerHTML = data[index].Name;
                // reset for new searching
                reset();

                // getMeeting
                // getMeeting(); // old version
                // getAss
                // getAss(); // old version
                // getProject
                getProject(index);
                getBonus(index);
                return;
            }
        }
        nf.style.display = 'block';
        info.style.display = 'none';
    } else if (term == 1) {
        var nf = document.getElementById('notfound');
        var info = document.getElementById('info');
        for (let index = 0; index < data.length; index++) {
            if (id == data[index].Id) {
                nf.style.display = 'none';
                info.style.display = 'block';
                var _id = document.getElementById('ID');
                _id.innerHTML = data[index].Id.toUpperCase();
                var _name = document.getElementById('name');
                _name.innerHTML = data[index].Name;
                var meeting = document.getElementById('sum-meeting');
                meeting.innerHTML = data[index].MEETING;
                var meeting = document.getElementById('sum-ass');
                meeting.innerHTML = data[index].ASSIGNMENT;
                var meeting = document.getElementById('sum-project');
                meeting.innerHTML = data[index].PROJECTS;
                // todo...
                getRank(data[index].MEETING + data[index].ASSIGNMENT + data[index].PROJECTS);
                return;
            }
        }
        nf.style.display = 'block';
        info.style.display = 'none';
    }
}
function reset() {

    let markMeeting = document.getElementById("js-insert");
    while (markMeeting.firstChild) {
        markMeeting.removeChild(markMeeting.firstChild);
    }

    let markAss = document.getElementById("js-insert-ass");
    while (markAss.firstChild) {
        markAss.removeChild(markAss.firstChild);
    }

    let markPro = document.getElementById("js-insert-project");
    while (markPro.firstChild) {
        markPro.removeChild(markPro.firstChild);
    }

    let bonus = document.getElementById("js-insert-bonus");
    while (bonus.firstChild) {
        bonus.removeChild(bonus.firstChild);
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
    var bonus = document.getElementById('bonus-table');

    meeting.style.display = 'none';
    ass.style.display = 'none';
    project.style.display = 'none';
    bonus.style.display = 'none';

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
        case "4":
            bonus.style.display = 'block';
            break;
    }
}

document.getElementById('slc-term').addEventListener('change', () => {
    if (document.getElementById('slc-term').value == '0') {
        location.assign("../Skillcetera_site/markreport.html");
    } else if (document.getElementById('slc-term').value == '1') {
        location.assign("../Skillcetera_site/fall22.html");
    }
});



