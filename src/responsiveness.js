const root = document.getElementById('root')
function mobileS280(screenSize) {
    if (screenSize.matches) {
        root.removeAttribute('class');
        document.getElementById('default-nav').setAttribute('hidden', true)
        document.getElementById('nav-for-phones').removeAttribute('hidden')
        document.getElementById('get-in-touch-btn').setAttribute('hidden', true);
    }
}

function mobileSM320(screenSize) {
    if (screenSize.matches) {
        root.removeAttribute('class');
    }
}

function mobileM375(screenSize) {
    if (screenSize.matches) {
        root.removeAttribute('class');
    }
}

function mobileML414(screenSize) {
    if (screenSize.matches) {
        root.removeAttribute('class');
    }
}

function mobileL430(screenSize) {
    if (screenSize.matches) {
        root.removeAttribute('class');
    }
}

function mobileXL720(screenSize) {
    if (screenSize.matches) {
        root.classList = 'flex'
    }
}

function tablet1024(screenSize) {
    if (screenSize.matches) {
        root.classList = 'flex'
    }
}

function desktop(screenSize) {
    if (screenSize.matches) {
        root.classList = 'flex'
    }
}

const screen280 = window.matchMedia('(min-width: 0px) and (max-width: 280px)');
const screen320 = window.matchMedia('(min-width: 281px) and (max-width: 320px)');
const screen375 = window.matchMedia('(min-width: 321px) and (max-width: 375px)');
const screen414 = window.matchMedia('(min-width: 376px) and (max-width: 414px)');
const screen430 = window.matchMedia('(min-width: 377px) and (max-width: 430px)');
const screen720 = window.matchMedia('(min-width: 431px) and (max-width: 720px)');
const screen1024 = window.matchMedia('(min-width: 721px) and (max-width: 1024px)');
const screenDefault = window.matchMedia('(min-width: 1025px)');


window.onresize = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileSM320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileML414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileXL720(screen720);
    }
    if (window.outerWidth >= 721 && window.outerWidth <= 1024) {
        tablet1024(screen1024);
    }
    if (window.outerWidth >= 1025) {
        desktop(screenDefault)
    }
}
window.onload = () => {
    if (window.outerWidth >= 0 && window.outerWidth <= 280) {
        mobileS280(screen280);
    }
    if (window.outerWidth >= 281 && window.outerWidth <= 320) {
        mobileSM320(screen320);
    }
    if (window.outerWidth >= 321 && window.outerWidth <= 375) {
        mobileM375(screen375);
    }
    if (window.outerWidth >= 376 && window.outerWidth <= 414) {
        mobileML414(screen414);
    }
    if (window.outerWidth >= 415 && window.outerWidth <= 430) {
        mobileL430(screen430);
    }
    if (window.outerWidth >= 431 && window.outerWidth <= 720) {
        mobileXL720(screen720);
    }
    if (window.outerWidth >= 721 && window.outerWidth <= 1024) {
        tablet1024(screen1024);
    }
    if (window.outerWidth >= 1025) {
        desktop(screenDefault)
    }
}