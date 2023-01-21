jQuery(document).ready(function ($) {
    var liItem = $('.lesixp-list-item-section .sesixp-list-wrap ul li');

    document.querySelectorAll('.lesixp-list-item-section .sesixp-list-wrap ul li').forEach(function (ele, idx) {
        ele.addEventListener('click', function (e) {
            var clickedEle = document.querySelector('ul li.show');
            if (clickedEle != null)
                clickedEle.classList.remove('show');
            this.classList.add('show');

        })
    });
});
