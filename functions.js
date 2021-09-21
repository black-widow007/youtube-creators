//function name should match html
function handleNav() {
    //varibale set to element; gets element by the ID; store element in const 
    const nav = document.getElementById('main-nav');

    const hamburger = document.getElementById('hamburger');
    //if statement to check nav & hamburger class list to see if it contains/not contain the specified active classes
    if(!nav.classList.contains('main-nav--active')) {
        //use the add method to add the class to nav element if it does not have it
        nav.classList.add('main-nav--active');
        hamburger.classList.add('hamburger--active');
    //else if it contains the classes, remove them
    } else {
        nav.classList.remove('main-nav--active');
        hamburger.classList.remove('hamburger--active');
    }
}