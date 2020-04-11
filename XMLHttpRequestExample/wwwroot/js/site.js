'use strict';

(function () {
    function getJson(options) {
        // instantiate XHR
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);

                // call callback
                options.success(response);
            }
        };
        
        xhr.open('GET', options.url, true);
        xhr.send();
    }

    function postJson(options) {
        // instantiate XHR
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {                
                options.success();           
            }
        };

        xhr.open('POST', options.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(options.data));
    }

    function getList() {
        getJson({
            url: '/List/Items',
            success: function (response) {
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
        });
    }

    function addItem() {
        let input = document.querySelector('#newItem');
        if (!input) {
            return false;
        }

        postJson({
            url: '/List/Items',
            data: input.value,
            success: function () {
                let itemList = document.getElementById('itemList');
                if (itemList) {
                    let li = document.createElement('li');
                    li.textContent = input.value;
                    itemList.appendChild(li);
                }   
            }
        });
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