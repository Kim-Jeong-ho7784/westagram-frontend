const inputBox = document.getElementsByClassName('inputContainer')[0];

inputBox.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('idInput')[0].value;
    const pw = document.getElementsByClassName('pwInput')[0].value;
    const btn = document.getElementsByClassName('button')[0];

    /* if ((id.length > 1) && (pw.length > 1)) {
        btn.style.opacity = "1"
    } else if ((id.length === 0) || (pw.length === 0)) {
        btn.style.opacity = "0.4"
    } */

    btn.style.opacity = id.length > 1 ? (pw.length > 1 ? "1" : "0.4") : "0.4"
});