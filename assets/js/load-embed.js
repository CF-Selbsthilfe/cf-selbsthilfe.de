function loadEmbed() {
    obj = document.getElementById('video-embed');
    dataSrc = obj.getAttribute('data-src');
    obj.setAttribute('src', dataSrc);

    notice = document.getElementById('video-embed-notice');
    notice.style.display = 'none';

};