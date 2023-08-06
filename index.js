const h = window.location.host
const p = window.location.pathname
const g = 'AKfycbyYCiKcYEcoCz4tKH-bvGdy10rtmQtIbrahNL6EGT5vugV8A1w9yJBFYe4DlsAW4tHTPw'
let c = 0

const t = setInterval(function () {
    if (c < 10) {
        if (window.mauser.email) {
            clearInterval(t)
            const u = window.mauser.email
            fetch(`https://script.google.com/macros/s/${g}/exec?host=${h}&pathname=${p}&user=${u}`)
                .then(r => r.json())
                .then(d => console.log(d))
        }
        c++
    } else {
        clearInterval(t)
        fetch(`https://script.google.com/macros/s/${g}/exec?host=${h}&pathname=${p}`)
                .then(r => r.json())
                .then(d => console.log(d))
    }
}, 1000) 

const u = window.mauser.email

fetch(`https://script.google.com/macros/s/${g}/exec?host=${h}&pathname=${p}${u ? '&user=' + u : ''}`)
    .then(r => r.json())
    .then(d => console.log(d))


const sldrNums = []

fetch(`https://artm-ttynn.github.io/circle-we-agency/tutorials.json`)
    .then((response) => response.json())
    .then((tutorials) => createSldr(tutorials))

function createSldr(tutorials) {
  const $contentBlocks = document.querySelectorAll('.t668__content')
  
  console.log($contentBlocks.length)
  console.log(`tutorials = ${tutorials.length}`)
  
  for (let i = 0; i < $contentBlocks.length; i++) {
    const { section, id, n } = tutorials[i]
    
    if (+n > 0) {
      sldrNums.push(i)
        
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
        const sldr = sldrNums[i]
        
        $(`[data-sldr="${sldr}"] .sldr__list`).slick({
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: `linear`,
            dots: true,
            appendDots: $(`[data-sldr="${sldr}"] .sldr__points`),
            prevArrow: renderArrow(`prev`),
            nextArrow: renderArrow(`next`),
            appendArrows: $(`[data-sldr="${sldr}"] .sldr__control`),
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false
                    }
                }
            ]
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
