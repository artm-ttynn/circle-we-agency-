fetch(`https://artm-ttynn.github.io/circle-we-agency/tutorials.json`)
    .then((response) => response.json())
    .then((tutorials) => createSldr(tutorials))

function createSldr(tutorials) {

  const $contentBlocks = document.querySelectorAll('.t668__content')
  console.log(`content blocks = ${$contentBlocks.length}`)
  console.log(`tutorials = ${tutorials.length}`)
  
  for (let i = 0; i < tutorials.length; i++) {
    
    const {section, id, n} = tutorials[i]
    
    if (Number(n) > 0) {
      let $sldrListContent = ``
            
      for (let j = 1; j <= n; j++) {
        $sldrListContent += `<div><div class="sldr__image" style="background:url(https://artm-ttynn.github.io/circle-we-agency/img/tutorials/${section}/${id}-${j}.jpg);"></div></div>`
      }
      
      const $wrapperSldr = document.createElement('div')
      $wrapperSldr.classList.add('sldr__wrapper')
      $wrapperSldr.dataset.sldr = i
      
      $wrapperSldr.innerHTML = `
        <div class="sldr__body">
            <div class="sldr__container">
                <div class="sldr__control"></div>
                <div class="sldr__list">${$sldrListContent}</div>
            </div>
            <div class="sldr__points"></div>
        </div>`;
      
      $contentBlocks[i].append($wrapperSldr)
    }    
  }
  
  initSldr()
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

function renderArrow(position) {
    return `<button class="arrow ${position}">
        <div>
            <svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
            </svg>
        </div>
    </button>`;
};
