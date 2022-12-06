//const watcher = {}

const $contentBlocks = document.querySelectorAll('.t668__content')
$contentBlocks.forEach((item, i) => createSldr(item, i))

function createSldr(item, i) {
    const $wrapperSldr = document.createElement('div')
    $wrapperSldr.classList.add('sldr__wrapper')
    $wrapperSldr.dataset.sldr = i
    
    $wrapperSldr.innerHTML = `
        <div class="sldr__body">
            <div class="sldr__container">
                <div class="sldr__control"></div>
                <div class="sldr__list">
                    <div>
                        <div class="sldr__image" style="background: url(https://artm-ttynn.github.io/circle-we-agency/img/image-01.jpg);"></div>
                    </div>
                    <div>
                        <div class="sldr__image" style="background: url(https://artm-ttynn.github.io/circle-we-agency/img/image-02.jpg);"></div>
                    </div>
                    <div>
                        <div class="sldr__image" style="background: url(https://artm-ttynn.github.io/circle-we-agency/img/image-03.jpg);"></div>
                    </div>
                </div>
            </div>
            <div class="sldr__points"></div>
        </div>`;
    
    item.append($wrapperSldr)
}

function initSldr() {
    const $sldrs = document.querySelectorAll('.sldr__wrapper')
    
    for (let i = 0; i < $sldrs.length; i++) {
        $(`[data-sldr="${i}"] .sldr__list`).slick({
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: `linear`,
            dots: true,
            appendDots: $(`[data-sldr="${i}"] .sldr__points`),
            prevArrow: renderArrow(`prev`),
            nextArrow: renderArrow(`next`),
            appendArrows: $(`[data-sldr="${i}"] .sldr__control`),
        });
    }
}


    
//const $slider = document.querySelector('.sldr')
//console.log($slider)

//renderSldr($slider)

/*const $buttons = document.querySelectorAll('.t668__trigger-button')

$buttons.forEach(($button) => {
    $button.addEventListener('click', (e) => {
        const first = document.querySelector('.sldr')
        renderSldr(first)
    });
});*/
        
        /*if (!watcher.currentButton) {
            watcher.currentButton = e.currentTarget
            watcher.currentContent = e.currentTarget.parentNode.nextSibling
            renderSldr(watcher.currentContent)
        } else {
            watcher.lastButton = watcher.currentButton
            watcher.lastContent = watcher.currentContent
            watcher.currentButton = e.currentTarget
            watcher.currentContent = e.currentTarget.parentNode.nextSibling
            
            console.log(watcher.lastButton === watcher.currentButton)
            
            //удаление предыдущего слайдера и добавление нового
            if (watcher.lastButton !== watcher.currentButton) {
                const lastSldrContainer = watcher.lastContent.lastChild
                const lastSldr = lastSldrContainer.firstChild
                lastSldr.remove()
                
                renderSldr(watcher.lastContent)
            }*/

        //renderSldr(watcher.lastContent)
        
        
        //renderSldr($content)



function renderSldr(container) {
    //const $textWrapper = container.querySelector('.sldr')
    container.innerHTML = sldrTemp;
    
    $('.sldr__list').slick({
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: `linear`,
        dots: true,
        appendDots: $(`.sldr__points`),
        prevArrow: renderArrow(`prev`),
        nextArrow: renderArrow(`next`),
        appendArrows: $(`.sldr__control`),
    });
}

function renderArrow(position) {
    return `<button class="arrow ${position}">
        <div>
            <svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
            </svg>
        </div>
    </button>`;
};

const sldrTemp = `
    <div id="sldr" style="width: 100%; display: flex; justify-content: center;">
    
    <div class="sldr__wrapper">
        <div class="sldr__container">
            <div class="sldr__control"></div>
            <div class="sldr__list">
                <div>
                    <img src="https://artm-ttynn.github.io/circle-we-agency/img/image-01.jpg"/>
                </div>
                <div>
                    <img src="https://artm-ttynn.github.io/circle-we-agency/img/image-02.jpg"/>
                </div>
                <div>
                    <img src="https://artm-ttynn.github.io/circle-we-agency/img/image-03.jpg"/>
                </div>
            </div>
        </div>
        <div class="sldr__points"></div>
    </div></div>`;
