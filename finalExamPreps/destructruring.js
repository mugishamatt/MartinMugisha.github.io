
"use strict";

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name,user.surname); // John
alert(user.surname); // Smith
//

let options = {
    title: "Menu", width: 100, height: 200
    };
    let {title, width, height} = options; alert(title); // Menu
    alert(width); // 100
    alert(height); // 200