(function() {
  'use strict'

  var idCard = {
    title:'ID Card Valuable employee',
    photo:'img/picture1.jpg',
    name:'Vasya Pupchenko',
    birthday:'25/08/1990',
    address:'26 Kreschatick street, Kyiv, Ukraine 01001',
    phones:['+38093-123-45-67', '+38044-321-65-47'],
    mail:['pupchenko@ukr.net', 'v.pupchenko@gmail.com'],
    autobiography:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    network:'https://www.facebook.com/vasya.pupkin.3',
    startDate:'05/01/2017',
    profession:'IT developer'
  },

parent = document.getElementById('container');
var source = document.getElementById('idcard-employees').textContent,
template = _.template(source);
parent.innerHTML += template(idCard);
})();
