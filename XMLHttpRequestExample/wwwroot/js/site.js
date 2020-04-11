'use strict';

(function () {
    function getList() {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                
                console.log(response);
                
                let itemList = document.getElementById('itemList');
                if (itemList) {
                    itemList.innerHTML = '';
                    response.data.forEach(function (item) {
                        let li = document.createElement('li');
                        li.textContent = item;
                        itemList.appendChild(li);
                    });
                }                
            }
        };

        xhr.open('GET', '/List/Items', true);
        xhr.send();
    }

    function addItem() {
        let input = document.querySelector('#newItem');
        if (!input) {
            return false;
        }

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {                
                let itemList = document.getElementById('itemList');
                if (itemList) {
                    let li = document.createElement('li');
                    li.textContent = input.value;
                    itemList.appendChild(li);
                }                
            }
        };

        xhr.open('POST', '/List/Items', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(input.value));
    }


    function setup() {
        let getListButton = document.getElementById('getListButton');
        if (getListButton) {
            getListButton.addEventListener('click', getList);
        }

        let addItemButton = document.getElementById('addItemButton');
        if (addItemButton) {
            addItemButton.addEventListener('click', addItem);
        }
    }

    setup();
})();