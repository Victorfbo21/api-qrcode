import QRCode from 'qrcode'


var opts = {
    qualidade: 0.3,
    margem: 1,
}

const generateImgTerminal = QRCode.toString("https://www.amazon.com.br/", { type: 'terminal' }, (err, url) => {
    console.log(url)
})

generateImgTerminal