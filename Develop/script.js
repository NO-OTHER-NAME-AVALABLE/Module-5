var dayEl = document.getElementById('currentDay');
dayEl.innerHTML = moment().format('dddd MMMM Do Y')


console.log(moment().hour())
const clockHour = ['nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five'];

function startup(){
    var now = moment().hour();

    for (y = 0; y < clockHour.length; y++){
        const textAreaEl = document.getElementById(clockHour[y]);
        textAreaEl.value = localStorage.getItem(y + 9);
    }

    for (x = 0; x < clockHour.length; x++){
        var hourEl = document.getElementById(clockHour[x]);
        var hourData = hourEl.dataset.hour;
        console.log(hourData);
        if (hourData < now){
            hourEl.classList.add('past');
        }else if (hourData == now){
            hourEl.classList.add('present');
        }else if (hourData > now){
            hourEl.classList.add('future');
        }
    }
}
startup()

function save(event){
console.log(document.querySelector(`textarea[data-hour="${event.target.dataset.hour}"]`).value);
localStorage.setItem(event.target.dataset.hour, document.querySelector(`textarea[data-hour="${event.target.dataset.hour}"]`).value); 
}
var saveButton = document.querySelectorAll('.saveBtn');

 for(x = 0; x < saveButton.length; x++){
     saveButton[x].addEventListener('click', save);
 }

