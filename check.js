function calculate(event) {
    console.log("hello");
    var display = document.querySelector("input");
    var clickedButtonValue = event.target.value;
    console.log(clickedButtonValue);

    if (clickedButtonValue === "=") {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === "Clear") {
        display.value = "";
    } else {
        display.value += clickedButtonValue;
    }
}

//Infinite Scroll
$(window).on("scroll", function() {
    //page height
    var scrollHeight = $(document).height();
    //scroll position
    var scrollPos = $(window).height() + $(window).scrollTop();
    // fire if the scroll position is 300 pixels above the bottom of the page
    if ((scrollHeight - 300 >= scrollPos) / scrollHeight == 0) {
        $(".load-more-days-button").click();
    }
});