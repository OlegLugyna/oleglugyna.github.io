(function() {
  'use strict';

  var idCard = [
      {
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
    {
      title:'ID Card Valuable employee',
      photo:'img/picture2.jpg',
      name:'aunt Masha',
      birthday:'12/01/1948',
      address:'01 M. Grushevskogo street, Kyiv, Ukraine 01001',
      phones:['+38094-258-58-98', '+38044-000-11-22'],
      mail:['masha@mail.ru'],
      autobiography:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      network:'https://www.facebook.com/vasya.pupkin.3',
      startDate:'25/10/2014',
      profession:'Cleaner office'
    },
    {
      title:'ID Card Valuable employee',
      photo:'img/picture3.jpg',
      name:'Petya Valuev',
      birthday:'20/07/1980',
      address:'25 Lesi Ukrainky bul., apt. 268, Kyiv, Ukraine 01133',
      phones:['+38093-121-25-65', '+38098-225-25-65', '+38050-332-25-65', '+38044-558-65-47'],
      mail:['valuev@ukr.net', 'petya@gmail.com', 'v.valuev@mail.ru'],
      autobiography:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      network:'https://www.facebook.com/vasya.pupkin.3',
      startDate:'20/05/2014',
      profession:'bodyguard'
    }
  ],

parent = document.getElementById('container');
var source = document.getElementById('idcard-employees').textContent,
template = _.template(source);
_.forEach(idCard, function(item) {
  parent.innerHTML += template(item);
})

})();
