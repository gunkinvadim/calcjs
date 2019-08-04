window.onload = function(e) {
    
    var operation = document.querySelectorAll('.operation');
    var inp = document.querySelectorAll('.num');
    var result = document.querySelector('.res');
    
    
    function checkInput() {
        for (var i = 0; i < inp.length; i++) {
            if (isNaN(parseInt(inp[i].value)) == true) {
                inp[i].value = 0;
            }
        }
    }

    function showResult(opBtn, op, a, b) {
        var resultValue;

        if (op == '+') {
            resultValue = a + b;
        } else if (op == '-') {
            resultValue = a - b;
        } else if (op == '*') {
            resultValue = a * b;
        } else if (op == '/') {
            if (b == 0) {
                resultValue = 'impossible';
            } else {
                resultValue = a / b;
            }
        }
        
        if (resultValue == 'impossible') {
            result.innerHTML = 'делить на ноль нельзя!';
            btnDisable(opBtn);
        } else if (typeof(resultValue) != 'number' || isNaN(resultValue) == true) {
            result.innerHTML = 'введите оба значения!';
        } else {
            result.innerHTML = resultValue;
            btnDisable(opBtn);
        }
    }

    function btnEnable() {
        for (var i = 0; i < operation.length; i++) {
            operation[i].disabled = false;
        }
    }

    function btnDisable(opBtn) {
        btnEnable();
        opBtn.disabled = true;
    }


    for (var i = 0; i < operation.length; i++) {
        operation[i].onclick = function() {
            var opBtn = this;
            var op = this.getAttribute('data-op');
            var a = inp[0].value = parseFloat(inp[0].value);
            var b = inp[1].value = parseFloat(inp[1].value);
            checkInput();
            showResult(opBtn, op, a, b);
        };
    }

    for (var i = 0; i < inp.length; i++) {
        inp[i].oninput = btnEnable;
    }
};