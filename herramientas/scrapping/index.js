const puppeteer = require('puppeteer');

/* Funcion instantanea */
(async () => {
    /* Nuestro codigo */
    console.log('Lanzamos navegador!')
    //const browser = await puppeteer.launch()

    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()
    await page.goto('https://leonelmoyano.com')

    var title1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML)
        return h1.innerHTML
    })
    console.log(title1)

    console.log('Cerramos navegador...')
    //browser.close()
    console.log('Navegador cerrado...')
})();