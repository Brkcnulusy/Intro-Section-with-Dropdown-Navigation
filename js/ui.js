export const openElement = function (element) {
    element.style.display = 'flex';
}
export const closeElement = function (element) {
    element.style.display = 'none';
}
export const addClass = function (element) {
    element.classList.add('active');

}
export const removeClass = function (element) {
    element.classList.remove('active');
}