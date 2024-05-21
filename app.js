console.log('Hello word');
// ЗАДАНИЕ:
// 1. импортировать модуль os
// 2. написать функцию printSystemInfo которая выводит в консоль информацию об ОС (3-5 характеристик) - https://nodejs.org/api/os.html
// 3. написать точку входа main и вызвать ее  
// 4. протестировать программу
// os.cpus() - процессоры
// os.freemem() - память свободная
// os.type() - тип операционной системы
// os.uptime() - время работы операционной системы после последней перезагрузки
const os = require('os');
function printCurrentUserName(){
    let username = os.userInfo().username;
    console.log(`current user is '${username}' `)
}
function printProcessOS(){
    let mem = os.freemem();
    console.log(`Memory '${mem/1048576 } Mb' `)
    let sys = os.type();
    console.log(`System '${sys}' `)
    let timew = os.uptime();
    console.log(`Time work '${timew/3600} hour' `)
    let opSystem = os.machine();
    console.log(`Operation system '${opSystem}' `)
    
}
function main (){
    printCurrentUserName();
    printProcessOS();
}

main();