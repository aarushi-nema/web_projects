const endCount='July 1, 2021 00:00:00';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const daysElement= document.getElementById('days');
const hoursElement= document.getElementById('hours');
const minutesElement= document.getElementById('minutes');
const secondsElement= document.getElementById('seconds');

function countdown(){
    const endDate= new Date(endCount);
    const currentDate= new Date();

    differenceInDays = dateDiffInDays(currentDate, endDate)-1;
    console.log("Difference in Days: ",differenceInDays);

    differenceInHours = dateDiffInHours(currentDate, endDate)-1;
    console.log("Difference in Hours: ",differenceInHours);

    differenceInMinutes= dateDiffInMinutes(currentDate, endDate);
    console.log("Difference in Minutes: ",differenceInMinutes);

    differenceInSeconds= dateDiffInSeconds(currentDate, endDate);
    console.log("Difference in Seconds: ",differenceInSeconds);


    if(differenceInDays<10){
        daysElement.innerHTML= "0"+differenceInDays;
    } else {
        daysElement.innerHTML= differenceInDays;
    }

    if(differenceInHours<10){
        hoursElement.innerHTML= "0"+differenceInHours;
    } else {
        hoursElement.innerHTML= differenceInHours;
    }

    if(differenceInMinutes<10){
        minutesElement.innerHTML= "0"+differenceInMinutes;
    } else {
        minutesElement.innerHTML= differenceInMinutes;
    }

    if(differenceInSeconds<10){
        secondsElement.innerHTML= "0"+differenceInSeconds;
    } else {
        secondsElement.innerHTML= differenceInSeconds;
    }
}

function dateDiffInDays(c, e) {
  const utc1 = Date.UTC(c.getFullYear(), c.getMonth(), c.getDate());
  const utc2 = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function dateDiffInHours(c, e) {
    return (Math.abs(e.getHours()-c.getHours()));
}

function dateDiffInMinutes(c,e){
    return 60-(Math.abs(e.getMinutes()-c.getMinutes()))-1;
}

function dateDiffInSeconds(c,e){
    return 60-(Math.abs(e.getSeconds()-c.getSeconds()))-1;
}

countdown();
setInterval(countdown, 1000);

