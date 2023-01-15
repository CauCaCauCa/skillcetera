export function getRank(mark){
    var print = document.getElementById('rank');
    var str = '';
    if (mark >= 8) {
        str = '<br><br><h1>Excellent member</h1>';
    } else if (mark >= 4 && mark < 8) {
        str = '<br><br><h1>Good member</h1>';
    } 
    print.innerHTML = str;
}