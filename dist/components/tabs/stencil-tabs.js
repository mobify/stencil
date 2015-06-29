$(document).ready(function() {
    var init = function() {
        // Set up initial state for accessibility
        var $tabButtons = $('.c-tabs__button');
        $tabButtons.attr('aria-selected', false);
        $tabButtons.attr('tabindex', -1);

        $('.c-tabs__content').attr('aria-hidden', true);

        bindEvents();

        // If there is a tab that already had .c--current select it
        // Otherwise, just select the first tab
        $('.c-tabs').forEach(function(parent, index) {
            var $parent = $(parent);

            var $currentlySelectedTab = $parent.find('.c-tabs__content.c--current');

            if ($currentlySelectedTab.length) {
                showTab($parent, $currentlySelectedTab.index());
            } else {
                showTab($parent, 0);
            }
        });
    };

    // show the tab at index within $parent
    var showTab = function($parent, index) {
        var $tabs = $parent.find('.c-tabs__content');
        var $currentTab = $tabs.eq(index);

        var $tabControls = $parent.find('.c-tabs__controls-item');
        var $currentTabControl =  $tabControls.eq(index);

        var $tabButtons = $parent.find('.c-tabs__button');
        var $currentTabButton = $tabButtons.eq(index);

        // Change state
        $tabs.removeClass('c--current');
        $currentTab.addClass('c--current');

        $tabs.attr('aria-hidden', true);
        $currentTab.attr('aria-hidden', false);

        $tabControls.removeClass('c--current');
        $currentTabControl.addClass('c--current');

        $tabButtons.attr('aria-selected', false);
        $currentTabButton.attr('aria-selected', true);

        $tabButtons.attr('tabindex', -1);
        $currentTabButton.attr('tabindex', 0);

        // If the user is navigating between the tabs with the arrow keys
        // We need to focus on the current tab so they can continue to move between them
        $currentTabButton.focus();

        // Make sure that the button for the currently selected tab is visible
        scrollToButton($parent, index);
    };

    var showNext = function($parent) {
        var currentIndex = $parent.find('.c-tabs__content.c--current').index();
        var lastTabIndex = $parent.find('.c-tabs__content').length - 1;

        // If the next index is not valid, wrap around to the first tab
        var nextIndex = currentIndex < lastTabIndex ? currentIndex + 1 : 0;

        showTab($parent, nextIndex);
    };

    var showPrev = function($parent) {
        var currentIndex = $parent.find('.c-tabs__content.c--current').index();
        var lastTabIndex = $parent.find('.c-tabs__content').length - 1;

        // If the previous index is not valid, wrap around to the last tab
        var nextIndex = currentIndex > 0 ? currentIndex - 1 : lastTabIndex;

        showTab($parent, nextIndex);
    };

    // When a tab is selected, we want to ensure that the tab button is always visible
    // So, scroll .c-tabs__controls to the location of the button
    var scrollToButton = function($parent, index) {
        var $tabButton = $parent.find('.c-tabs__controls-item').eq(index);
        $parent.find('.c-tabs__controls').scrollLeft( $tabButton.position().left );
    };

    var bindEvents = function() {
        // If the user clicks on a tab button, show the appropriate tab
        $('.c-tabs__controls').on('click', '.c-tabs__button', function() {
            var $this = $(this);
            var $parent = $(this).parents('.c-tabs');
            var tabIndex = $(this).parent('.c-tabs__controls-item').index();

            showTab($parent, tabIndex);
        });

        // If the user has a tab focused, they can use the left/right keys to move between adjacent tabs
        $(window).on('keydown', function(e) {
            var $focusedButton = $('.c-tabs__button:focus');
            var $parentTabs = $focusedButton.parents('.c-tabs');

            if ($focusedButton.length) {
                // right/down arrow key
                if (e.which == 39 || e.which == 40) {
                    showNext($parentTabs);
                    e.preventDefault();
                }

                // left/up arrow key
                if (e.which == 37 || e.which == 38) {
                    showPrev($parentTabs);
                    e.preventDefault();
                }
            }
        });
    };

    init();
});
