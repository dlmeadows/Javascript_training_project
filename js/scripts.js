// load the document first
(function () {

    const carimages = document.querySelector('.carimages');

    // event listener for the div with class of carimages
    carimages.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const overlay = document.createElement('div');
            const overlayStyle = overlay.style;

            overlay.id = 'overlay';

            // set some styles
            overlayStyle.position = 'absolute';
            overlayStyle.top = 0;
            overlayStyle.background = 'rgba(0,0,0,0.7)';
            overlayStyle.cursor = 'pointer';

            // set some styles
            overlayStyle.width = window.innerWidth + "px";
            overlayStyle.height = window.innerHeight + "px";

            // append the overlay to the body
            document.body.appendChild(overlay)

            // get image source
            const imageSrc = event.target.src;

            // create the image
            const popupImage = document.createElement('img');
            popupImage.id = 'popupImage';
            popupImage.src = imageSrc;

            // style the image
            const popupStyle = popupImage.style;
            popupStyle.display = 'block';
            popupStyle.width = '50%';
            popupStyle.margin = '0 auto';
            popupStyle.marginTop = '10%';
            popupStyle.border = '1px solid blue';
            popupStyle.padding = '10px';
            popupStyle.background = '#cece';
            popupStyle.borderRadius = '18px';

            // append the image to the overlay
            overlay.appendChild(popupImage);

            popupImage.addEventListener('click', () => {
                if (overlay) {
                    overlay.parentElement.removeChild(overlay);
                }
            });

            // set image to follow window scroll
            window.addEventListener('scroll', () => {
                if (overlay) {
                    overlayStyle.top = window.pageYOffset + 'px';
                    overlayStyle.left = window.pageXOffset + 'px';
                }
            });

            // set overlay to resize when the window is resized
            window.addEventListener('resize', () => {
                overlayStyle.width = window.innerWidth + "px";
                overlayStyle.height = window.innerHeight + "px";
            })
        }
    })

})();
