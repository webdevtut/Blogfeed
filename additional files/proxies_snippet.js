class Page {
  goto() {
    console.log('I am going to another page');
  }
  setCookie() {
    console.log('I am setting a cookie🍪');
  }
}

class CustomPage {
  // static method created on class to extend
  static build() {
   const page = new Page();
   const customPage = new CustomPage(page);
   const superPage = new Proxy(customPage, {
    get: function(target, property) {
      return target[property] || page[property]
      }
    });
  return superPage;
  }
  
  constructor(page) {
    this.page = page;
  }
  login() {
    this.goto();
    this.setCookie();
    console.log("Extra code for login can be added also");
  }
}

// Created method to build proxy Object

// const buildPage = () => {
//   const page = new Page();

//   const customPage = new CustomPage(page);

//   const superPage = new Proxy(customPage, {
//     get: function(target, property) {
//       return target[property] || page[property]
//       }
//     });
  
//   return superPage;
// }

// buildPage();



// Functions from both classes are accessible now in this proxy created Object
// superPage.login();  
// superPage.goto();

// Final Architecture for creating superPage which will have access to 'customPage' (created by us) and (puppeteer class) 'page' functions
// Which will help us create object with functions for testing (eg. login) and all predefined functions from (Third party library like puppeteer) classes eg. 'page'
const superPage = CustomPage.build();
superPage.login();  
superPage.goto();
 


/////////////////////////////////////////////////////
//////////////PROXIES

class greetings {
    english() {
      return {hello:"Hello", bye: "Bye"};
    }
      spanish() {
      return {hello:"Hola", bye: "adiós"};
    }
    hindi() {
      return {hello:"नमस्ते", bye: "अलविदा"}
    }
  }
  
  class moreGreetings {
    german(){
      return {hello:"Hallo", bye: "Tschüss"};
    }
      french(){
      return {hello:"Bonjour", bye: "au revoir"};
    }
  }
  
  const Greetings = new greetings();
  const MoreGreetings = new moreGreetings();
  
  const allGreetings =  new Proxy(MoreGreetings, {
    get: function(target, property) {
      return target[property] || Greetings[property]
    }
  })
  
  console.log(allGreetings.hindi().hello);
  console.log(allGreetings.english().hello);
  console.log(allGreetings.spanish().hello);
  console.log(allGreetings.german().hello);
  console.log(allGreetings.french().hello);