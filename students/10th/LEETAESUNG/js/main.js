const buttonInput = document.getElementsByClassName('commentBox')[0];
const post = document.getElementsByClassName('comment')[0];

buttonInput.addEventListener('keyup', function() {
    const content = document.getElementsByClassName('comment')[0].value;
    const but = document.getElementsByClassName('upLoadComment')[0];

    /* if (content.length >= 1) {
        but.style.opacity = "1";
    } else if (content.length === 0) {
        but.style.opacity = "0.4";
    } */

    but.style.opacity = content.length >= 1 ? "1" : "0.4"
});

const commentInput = document.getElementsByClassName('comment')[0];
post.addEventListener('keyup', function(event) {
    const content = commentInput.value;
    const but = document.getElementsByClassName('upLoadComment')[0];

    if (event.keyCode === 13) {
        const UL = document.getElementsByTagName('ul')[0];
        const list = document.createElement('li');
        const id = document.createElement('span');
        const pw = document.createElement('a');

        id.innerHTML = "babo ";
        pw.innerHTML = content;

        list.append(id);
        list.append(pw);
        UL.append(list);

        commentInput.value = "";
    }
});
