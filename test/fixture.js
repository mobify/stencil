
var itLinks = document.querySelectorAll('[href^="#it-"]');
var its = document.querySelectorAll('[id^="it-"]');
var each = Array.prototype.forEach;

each.call(itLinks, function(link) {
    link.addEventListener('click', function(e) {
        var fragment = link.getAttribute('href')
        var target = document.querySelector(fragment);
        var targetIsSelected = target.classList.contains('is-selected');

        e.preventDefault();

        // each.call(itLinks, function(link) {
        //     link.classList.remove('is-active');
        // });

        each.call(its, function(it) {
            it.classList.remove('is-selected');
        });

        if ( targetIsSelected ) {
            history.pushState(null, null, window.location.pathname);
        }
        else {
            // link.classList.add('is-active');
            target.classList.add('is-selected');
            history.pushState(null, null, fragment);
        }
    });
});
