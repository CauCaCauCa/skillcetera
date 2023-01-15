export function getProject(index) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            showProject(index, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", "./a_data/project.json", true);
    request.send();
}

function showProject(index, data) {
    var pro = document.getElementsByClassName('sub-table-pro');
    // console.log(index_globe.innerHTML); // will get tag has id index_globe
    if (pro.length == 0) {

        //  example for each project
        var role = 'none';
        var score = 0;
        var bonus = 0;
        if (data[index].GioXuan == undefined) {
            // do nothing
        } else if (data[index].GioXuan == 1 || data[index].GioXuan == 2) {
            role = 'member'
            score = 1;
            bonus = data[index].GioXuan == 2 ? 1 : 0;
        } 
        var html = '<tr class="sub-table-pro"><td>GioXuan</td><td>' + role + '</td><td>' + bonus + '</td><td class="sub-total-pro">' + (score + bonus) + '</td></tr>';
        document.getElementById('js-insert-project').insertAdjacentHTML('beforeend', html);
        // end for a project



        // add more project here
        // ...
    }
    var subTotal = document.getElementsByClassName('sub-total-pro');
    var sum = 0;
    for (var i = 0; i < subTotal.length; i++) {
        sum += subTotal[i].innerHTML - null;
    }
    document.getElementById('total-project').innerHTML = sum;
    document.getElementById('sum-project').innerHTML = sum;
}