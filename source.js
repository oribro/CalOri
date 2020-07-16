function buildTable(start, days) {
    let table = document.getElementsByTagName("table")[0];
    let curDay = 1;
    for (let i = 1; i <= 6; i++) {
        let tr = table.insertRow();
        for (let j = 1; j <= 7; j++) {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode('Cell'));
            if ((i === 1 && j < start) || curDay > days)
                td.innerText = '-';
            else {
                td.innerText = curDay;
                curDay++;
            }
        }

    }

}

function createMonth(month) {
    let start, days;
    switch(month) {
        case 7:
            start = 4;
            days = 31;
            break;
        case 8:
            start = 7;
            days = 31;
            break;
        case 9:
            start = 3;
            days = 30;
            break;
        case 10:
            start = 5;
            days = 31;
            break;
    }
    buildTable(start, days);
}

createMonth(7);