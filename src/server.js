import QRCode from 'qrcode'


var opts = {
    qualidade: 0.3,
    margem: 1,
}

const generateImgTerminal = QRCode.toString("https://openai.com/blog/chatgpt", { type: 'terminal' }, (err, url) => {
    console.log(url)
})

generateImgTerminal