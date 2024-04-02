document.addEventListener('DOMContentLoaded', function () {
    const giftBox = document.querySelector('.gift');
    const contentToShow = document.getElementById('contentToShow');
    const clickCheckbox = document.getElementById('click');
    const tapToOpenText = document.querySelector('.text');
    const body = document.querySelector('body');

    giftBox.addEventListener('click', function () {
        if (clickCheckbox.checked) {
            contentToShow.classList.remove('hidden');
            tapToOpenText.classList.add('hidden');
            body.classList.remove('justify-center');
        } else {
            contentToShow.classList.add('hidden');
            tapToOpenText.classList.remove('hidden');
            body.classList.add('justify-center');
        }
    });
    
});
