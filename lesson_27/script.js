const title = document.getElementById('h1');
title.textContent = 'qwewqe';

const descriptions = document.querySelectorAll('.p');
descriptions[0].textContent = '12321321';
descriptions[1].textContent = ';ewrk;weorkewop';

const link = document.getElementById('a');
// link.href = 'https://ru.pinterest.com/'
link.textContent = 'На пинтерест'
link.setAttribute('href', 'https://ru.pinterest.com/')