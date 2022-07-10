class DisplayNumber extends HTMLElement {
    constructor() {
        super();
        // this.__shadowRoot = this.attachShadow({ mode: "open" });
        this.number = 5;
        this.content = `<h1>${this.number}</h1>`;
    }

    connectedCallback() {
        this.render();
    }

    set number(value) {
        this._number = value;
        this.render();
    }

    get number() {
        return this._number;
    }

    set content(value) {
        this._content = value;
        this.render();
    }

    get content() {
        return this._content;
    }

    render() {
        this.innerHTML = `
            <style>
                div.content {
                    text-align:center;
                    color:#fff;
                    z-index:1;
                    width:100%;
                    animation:contentAnimate 1s;
                }


                div.content img {
                    width:100%;
                    animation:contentAnimate 5s ease;
                }

                @keyframes contentAnimate {
                    0% {
                        opacity:0;
                    }
                    100% {
                        opacity:1;
                    }
                }
            </style>
            <div class="content">${this._content}</div>
        `;
    }
}

customElements.define("display-number", DisplayNumber);

class BoxNumber extends HTMLElement {
    constructor() {
        super();
        // this.__shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .box {
                width:300px;
                height:400px;
                background-color:#251D3A;
                display:flex;
                justify-content: center;
                align-items:center;
                /* inset:2px; */
                background-color:#000;
                position:relative;
                overflow:hidden;
                border-radius:16px;
            }
            
            .box::before {
                content:"";
                display:block;
                position:absolute;
                width:500px;
                height:500px;
                background-image:conic-gradient(transparent,transparent,transparent,#0AA1DD);
                animation:animate 4s  infinite linear; 
            }
            
            .box::after {
                content:"";
                display:block;
                position:absolute;
                width:500px;
                height:500px;
                background-image:conic-gradient(transparent,transparent,transparent,#F7EC09);
                animation:animate 4s -2s infinite linear; 
            }
            
            @keyframes animate {
                0% {
                    transform:rotate(0deg);
                }
                100%{
                    transform:rotate(360deg);
                }
            }
            
            
            .box span {
                position:absolute;
                inset:5px;
                background-color:#000;
                z-index:1;
                border-radius:16px;
            }
            
            
        </style>
            <div class="box">
                <span></span>
                <display-number></display-number>
            </div>
        `;
    }
}

customElements.define("box-number", BoxNumber);

const boxNumber = document.querySelector("display-number");

const kalimat = [
    "Hai",
    "Aku boga sesuatu buat maneh",
    "bentar,",
    "Sebuah renungan ...",
];

function showNumber() {
    boxNumber.content = `<h1 class="number">${boxNumber.number}</h1>`;
}

function decrement() {
    if (boxNumber.number > 0) {
        boxNumber.number -= 1;
    }
}

function stopInterval(value) {
    clearInterval(value);
}

const myDecrement = setInterval(() => {
    decrement();
    showNumber();
    if (boxNumber.number == 1) {
        console.info("stop");
        stopInterval(myDecrement);

        let numberText = 0;

        const myText = setInterval(() => {
            boxNumber.content = `<h1>${kalimat[numberText]}</h1>`;
            numberText++;

            if (numberText == kalimat.length) {
                stopInterval(myText);

                let numberImage = 1;

                const myImage = setInterval(() => {
                    boxNumber.content = `<img src="img/${numberImage}.jpg" />`;
                    numberImage++;

                    if (numberImage == 5) {
                        stopInterval(myImage);

                        let numberText2 = 0;

                        const text2 = [
                            "Jadi gimana nih?",
                            "Kamu punya ide buat ikutan bikin beginian juga?",
                            "Terus konten nya dibikin jadi romantis?",
                            "Emangnya mau dikirim ke siapa?",
                            "Coba senyum dulu bentar...",
                        ];

                        const myText2 = setInterval(() => {
                            boxNumber.content = `<h1>${text2[numberText2]}</h1>`;
                            numberText2++;

                            if (numberText2 == text2.length) {
                                stopInterval(myText2);

                                const myImage2 = setInterval(() => {
                                    boxNumber.content = `<img src="img/mongkey.jpg" />`;
                                    stopInterval(myImage2);

                                    const text3 = [
                                        "hadeuhh...",
                                        "Kamu sih gak senyum",
                                        "coba ulang...",
                                    ];
                                    let numberText3 = 0;
                                    const myText3 = setInterval(() => {
                                        boxNumber.content = `<h1>${text3[numberText3]}</h1>`;
                                        numberText3++;

                                        if (numberText3 == text3.length) {
                                            stopInterval(myText3);

                                            const myImage3 = setInterval(() => {
                                                boxNumber.content = `<img src="img/smile-monkey.jpg" />`;
                                                stopInterval(myImage3);

                                                let text4 = ['Hmm, lumayan...','udah dulu ya','Lekas pulih hati yang luka'];
                                                let numberText4 = 0;
                                                const myText4 = setInterval(() => {
                                                    boxNumber.content = `<h1>${text4[numberText4]}</h1>`;
                                                    numberText4++;

                                                    if(numberText4 == text4.length){
                                                        stopInterval(myText4);
                                                        
                                                        const lastImage = setInterval(() => {
                                                            boxNumber.content = `<img src="img/ice-bear.png" />`;

                                                            stopInterval(lastImage);
                                                        }, 5000);

                                                    }
                                                }, 3000);
                                            }, 3000);
                                        }
                                    }, 3000);
                                }, 5000);
                            }
                        }, 3000);
                    }
                }, 5000);
            }
        }, 2000);
    }
}, 1000);
