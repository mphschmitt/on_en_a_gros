const observer = new MutationObserver(function(mutations, me) {
    let popup = document.getElementById('didomi-popup');
    if (popup) {
        popup.remove();
    }

    if (document.body.classList.contains('didomi-popup-open')) {
        document.body.classList.remove('didomi-popup-open');
    }
});

observer.observe(document, {
    subtree: true,
    childList: true
});