//Using switch statement, get the day of the wek based on day number, means f the day is 1, the day of week is sunday. if the day is 2, it is monday and so on


let day=6;
switch(day){
    case 1:
        console.log('Sunday');
        break;  
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;   
    case 4:
            console.log('Wednesday');
            break; 
    case 5:
        console.log('Thursday');
        break; 
    case 6:
        console.log('Friday');
        break; 
    case 7:
        console.log('Saturday');
        break; 
    default:
        console.log('Invalid code');
        break;
       
}