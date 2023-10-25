
    document.addEventListener("DOMContentLoaded", function () {
        const popupLinks = document.querySelectorAll('.popup-link');

        popupLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                alert("Link clicked!");
            });
        });
    });


