function search() {
    var input, filter, content, p, i, txtValue;
    input = document.getElementById('searchspace');
    filter = input.value.toUpperCase();
    var flag = false;
    const cards = document.querySelectorAll('.complete-card').length;
    for (j = 0; j < cards; j++) {
        content = document.getElementsByClassName('complete-card')[j];
        p = content.getElementsByTagName('p');
        //console.log(p);
        for (i = 0; i < p.length; i++) {
            txtValue = p[i].textContent || p[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                content.style.display = '';
                //console.log(p[i]);
                flag = true;
                break;
            } else {
                content.style.display = 'none';
            }
        }
    }
    var mssg = document.getElementById("msg");
    if (flag == false) {
        mssg.innerHTML = "Sorry, No doctor found!! 🥺";
    } else {
        mssg.innerHTML = " Doctor Found!! 🎉";
    }
}