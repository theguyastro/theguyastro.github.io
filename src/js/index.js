let navbardiv = document.getElementById('mobile-list')
let open = 0

function dropdown() {
    if (!open) {
        open = 1;
        navbardiv.style.height = 'fit-content';
        navbardiv.style.paddingTop = '20px';
        navbardiv.style.paddingBottom = '10px';
    }
    else {
        open = 0;
        navbardiv.style.height = '0';
        navbardiv.style.paddingTop = '0px';
        navbardiv.style.paddingBottom = '0px';
    }
}
