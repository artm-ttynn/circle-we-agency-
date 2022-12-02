$(document).ready(function(){
    const block = `t668`;
    const $wrapper = document.querySelector(`.${block}__textwrapper`)
    $wrapper.insertAdjacentHTML('beforeend', sldrTemp);

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
});

document.body.addEventListener('click', (e) => {
    const $el = e.target
    if ($el.tagName === 'BUTTON' && $el.classList.contains('t668__trigger-button')) {
        console.log($el)
        console.log('kek')
    }
})

function renderArrow (position) {
    return `<button class="arrow ${position}">
        <div>
            <svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polyline 
                    fill="none" 
                    stroke="#222222" 
                    stroke-linejoin="butt" 
                    stroke-linecap="butt" 
                    stroke-width="1" 
                    points="0.5,0.5 8.5,8.5 0.5,16.5">
                </polyline>
            </svg>
        </div>
    </button>`;
};

const sldrTemp = `
    <div style="width: 100%; display: flex; justify-content: center;">
    
    <div class="sldr__wrapper">
        <div class="sldr__container">
            <div class="sldr__control"></div>
            <div class="sldr__list">
                <div>
                    <img data-lazy="https://artm-ttynn.github.io/circle-we-agency/img/image-01.jpg"/>
                </div>
                <div>
                    <img data-lazy="https://artm-ttynn.github.io/circle-we-agency/img/image-02.jpg"/>
                </div>
                <div>
                    <img data-lazy="https://artm-ttynn.github.io/circle-we-agency/img/image-03.jpg"/>
                </div>
            </div>
        </div>
        <div class="sldr__points"></div>
    </div></div>`;
