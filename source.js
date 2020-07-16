let table = document.getElementsByTagName("table")[0];
const DAYS_A_WEEK = 7;

function buildTable(table, start, days, weeks) {
    let curDay = 1;
    for (let i = 1; i <= weeks; i++) {
        let tr = table.insertRow();
        for (let j = 1; j <= DAYS_A_WEEK; j++) {
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
    let start, days, weeks;
    switch(month) {
        case 7:
            start = 4;
            days = 31;
            weeks = 5;
            break;
        case 8:
            start = 7;
            days = 31;
            weeks = 6;
            break;
        case 9:
            start = 3;
            days = 30;
            weeks = 5;
            break;
        case 10:
            start = 5;
            days = 31;
            weeks = 5;
            break;
    }
    return {
        start: start,
        days: days,
        weeks: weeks
    };
}

const {start, days, weeks} = createMonth(7);
buildTable(table, start, days, weeks);
