// let theme = localStorage.getItem('theme');
// // let theme = 'dark';
//
// window.onload = function() {
//     if (theme === null) {
//         theme = 'dark';
//         localStorage.setItem('theme', theme)
//     }
//
//     document.body.className = `theme-${theme}`;
//     document.getElementById('switch').checked = (theme === 'light');
// }
//
//
// console.log(theme);
//
// function changeTheme() {
//     if (theme === 'dark') {
//         theme = 'light';
//     } else {
//         theme = 'dark';
//     }
//
//     document.body.className = `theme-${theme}`;
//     localStorage.setItem('theme', theme)
// }



let theme = localStorage.getItem('theme');
// let theme = 'dark';

window.onload = function() {
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme)
    }

    document.body.className = `theme-${theme}`;
    document.getElementById('switch').checked = (theme === 'dark');
}


console.log(theme);

function changeTheme() {
    if (theme === 'light') {
        theme = 'dark';
    } else {
        theme = 'light';
    }

    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme)
}

