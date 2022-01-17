function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var arrow = document.querySelector('.arrow');
var footer = document.querySelector('.footer');

arrow.addEventListener('click', () => {
    //console.log('done')
    scrollTo(footer);
})