window.onload = function(e) {
    
    var operation = document.querySelectorAll('.calc');
    var inp = document.querySelectorAll('.num');
    var result = document.querySelector('.res');
    var resultValue = 0;

    
    function checkInput() {
        for (var i = 0; i < inp.length; i++) {
            if (typeof(parseInt(inp[i].value)) != 'number' || isNaN(parseInt(inp[i].value)) == true) {
                inp[i].value = 0;
            }
        }
    }

    function showResult() {
        if (typeof(resultValue) != 'number' || isNaN(resultValue) == true) {
            result.innerHTML = 0;
        } else {
            result.innerHTML = resultValue;
        }
    }

    function btnEnable() {
        for (var i = 0; i < operation.length; i++) {
            operation[i].disabled = false;
        }
    }


    for (var i = 0; i < operation.length; i++) {
        operation[i].onclick = function() {
            checkInput();
            if (this.getAttribute('name') == 'plus') {
                resultValue = parseInt(inp[0].value) + parseInt(inp[1].value);
            } else if (this.getAttribute('name') == 'minus') {
                resultValue = parseInt(inp[0].value) - parseInt(inp[1].value);
            } else if (this.getAttribute('name') == 'multiply') {
                resultValue = parseInt(inp[0].value) * parseInt(inp[1].value);
            } else if (this.getAttribute('name') == 'divide') {
                resultValue = parseInt(inp[0].value) / parseInt(inp[1].value);
            }
            showResult();
            btnEnable();
            this.disabled = true;
        };
    }

    for (var i = 0; i < inp.length; i++) {
        inp[i].oninput = btnEnable;
    }
};