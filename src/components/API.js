import React from 'react'

const puppeteer = require('puppeteer');

async function scrapeArticle(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   await page.goto(url);

   //destructuring
   const [el] = await page.$x('//*[@id="d29f04e9-776c-4996-a0d8-931023161e00"]/div/div/div[2]/div/ul/li[9]/a/span');
   const src = await el.getProperty('src');
   const srcTxt = await src.jsonValue();

   console.log({srcTxt});

}

 scrapeArticle('https://www.tandfonline.com/doi/full/10.1186/1550-2783-11-20');

