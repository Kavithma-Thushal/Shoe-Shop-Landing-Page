/**
 * @author : Kavithma Thushal
 * @project : Hello-Shoes-FrontEnd
 * @since : 2:02 PM - 4/20/2024
 **/

$(document).ready(function () {

    /** Sticky Header **/
    let header = $("[data-header]");
    let backTopBtn = $("[data-back-top-btn]");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            header.addClass("active");
            backTopBtn.addClass("active");
        } else {
            header.removeClass("active");
            backTopBtn.removeClass("active");
        }
    });

    /** Toggle Navbar **/
    let navbar = $("[data-navbar]");
    let navbarLinks = $("[data-nav-link]");
    let menuToggleBtn = $("[data-menu-toggle-btn]");
    menuToggleBtn.click(function () {
        navbar.toggleClass("active");
        $(this).toggleClass("active");
    });
    navbarLinks.click(function () {
        navbar.toggleClass("active");
        menuToggleBtn.toggleClass("active");
    });

    /** Search Box **/
    let searchBtn = $("[data-search-btn]");
    let searchContainer = $("[data-search-container]");
    let searchSubmitBtn = $("[data-search-submit-btn]");
    let searchCloseBtn = $("[data-search-close-btn]");
    let searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];
    $.each(searchBoxElems, function (index, elem) {
        $(elem).click(function () {
            searchContainer.toggleClass("active");
            $("body").toggleClass("active");
        });
    });
});
