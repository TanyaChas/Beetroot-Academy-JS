//перетягивание 3 
const blockForMouse = document.querySelector('.block-for-mouse');
const blockInsideElement = document.querySelector('.block__inside-element');
blockInsideElement.addEventListener("click", function(event) {

            blockForMouse.addEventListener('mousemove', function(event) {

                    blockInsideElement.style.left = event.offsetX + 'px';
                    blockInsideElement.style.top = event.offsetY + 'px';
                }
            }