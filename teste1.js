//Primeiro teste

//const{Builder} = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');

//(async function openChromeTeste() {
   // try{
      //  let options = new chrome.Options();
        //console.log('navegador chrome aberto com sucesso')
     //   let driver = await new Builder()
         //   .setChromeOptions(options)
         //   .forBrowser('chrome')
         //   .build();
       // await  driver.get('https://www.senaimg.com.br/');
        // await driver.quit();
//    }catch(e){
     //   console.error('Erro ao abrir o navegador:', e);
 //   }
//})()


//Segundo Teste

const {Builder, By} = require('selenium-webdriver');
// const assert = require('assert');
(async function firstScript(){
    try{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.google.com/');//Abre o navegador
        await driver.getTitle();//solicitar inf. do navegador
        await driver.manage().setTimeouts({implicite: 1000}) //ajusta o timeout 1s
        let searchBox = await driver.findElement(By.id('q'));//encontrar elemento
        let searchButton = await driver.findElement (By.name('btnk'));
        await searchBox.sendKeys('Prefeitura de Muriaé');//inserir vlr  no campo de busca
        await searchButton.click();//aciona o botão de busca
        let searchPseletivo =  await driver.findElement(By.classNameclass='l');
        await searchPseletivo.click();
       // let value = await searchBox.getAttribute('value');
        //assert.deepStricEqual(value,"selenium")
       // await driver.quit();//encerrar a sessão para evitar o desperdício de memória
    }catch(error){
        console.log(error)
    }
    
}())
