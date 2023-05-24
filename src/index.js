const MutationObserver = window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
const defaultOpt = {
    id: '0000000000',
    width: 230,
    height: 100,
    fillStyle: '#ccc',
    startX: 0,
    rotate: -30,
    startY: 0,
    fontSize: 12,
    opacity: 1,
    font: '10px sans-serif',
    text: 'watermark',
    textFamily: 'Roboto-Regular',
    target: document.querySelector('body'),
    zIndex: 2147483647,
    isCard: false //todo 是否是局部水印
};

class WaterMark{
    constructor (opt) {
        this._cfg = {...defaultOpt, ...opt, id: this.getRandomId()};
        this.createObserver();
        this.createCanvas();
        this.load();
    }

    createObserver() {
        this.createDomObserver()
        this.createBodyObserver()
    }

    // 水印的载体div
    createDomObserver() {
        this.observer = new MutationObserver(() => {
            this.remove()
        });
    }

    createBodyObserver() { 
        this.bodyObserver = new MutationObserver((mutationList) => { 
            if (mutationList[0].removedNodes.length ) { 
                if (!mutationList[0].removedNodes[0].id.trim() || mutationList[0].removedNodes[0].id === this.get('id')) {
                    this.load()      
                }
                
            }    
        });  
    }
    set(key, value) {
        this._cfg[key] = value
      }
    
    get(key) {
        return this._cfg[key]
    }

    load() {    
        const canvas = this.get('canvas');
        const startX = this.get('startX');
        const startY = this.get('startY');
        debugger
        const img = canvas.toDataURL('image/png', 1.0);
        const target = this.get('target');
        const dom = document.createElement('div');
        const waterCss = [
            'height: 100% !important',
            'width: 100% !important',
            'position: fixed !important', 
            `background: url(${img})`,
            `z-index:${this.get('zIndex')}`,
            'background-repeat:repeat !important',
            `top:${startY}px`,
            `left:${startX}px`,
            'pointer-events: none !important',
            'visibility: visible !important'
        ];
        this.set('id', this.getRandomId());

        dom.setAttribute('id', this.get('id'));
        dom.style.cssText = waterCss.join(';');
         
        this.set('dom', dom);
        target.appendChild(dom);   
        this.observe();
    }

    observe() {
        this.domObserve();
        this.bodyObserve();
    }

    domObserve() {  
        const dom = this.get('dom');  
        this.observer.observe(dom, {   
            childList: true,      
            attributes: true,    
            characterData: true,
        })
    }

    bodyObserve() {   
        const body = document.querySelector('body');
        this.bodyObserver.observe(body, {     
             childList: true    
        });
    }

    getRandomId () {
        if (window.crypto && window.crypto.getRandomValues) {
            const array = new Uint32Array(1);
            const list = window.crypto.getRandomValues(array);
            return `${list[0]}`;
        } else {
            const _id = this.get(id);
            return `${_id}`.split('').map(item => Math.round(Math.random())).join('');

        }
    }

    remove() { 
        const body = document.querySelector('body');
        const dom = this.get('dom');
        body.removeChild(dom);
        this.set('dom', null); 
    }

    createCanvas() {   
         const canvas = document.createElement('canvas')   
         const ctx = canvas.getContext('2d');  
         const height = this.get('height');  
         const width = this.get('width');
         canvas.height = height;    
         canvas.width = width;
         const font = this.get('font'); 
         const text = this.get('text');
         const rotate = this.get('rotate');
         const fillStyle = this.get('fillStyle');
         const opacity = this.get('opacity');  
         ctx.fillStyle = fillStyle;
         ctx.font = font;   
         ctx.globalAlpha = opacity;   
         ctx.rotate(rotate / Math.PI * 2)
         ctx.translate(0, height / 2)  
         ctx.fillText(text, 0, height / 2 )
         this.set('canvas', canvas) 
         this.set('ctx', ctx) 
     }
}

export default WaterMark;