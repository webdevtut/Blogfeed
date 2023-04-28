class Page {
  goto() {
    console.log('I am going to another page');
  }
  setCookie() {
    console.log('I am setting a cookie🍪');
  }
}

class CustomPage extends Page {
  
  constructor(page) {
    super()
    this.page = page;
  }
  login() {
    this.goto();
    this.setCookie();
    console.log("Extra code for login can be added also");
  }
}

const page = new Page();

const customPage = new CustomPage(page);

////UNCOMMENT BELOW LINES AND UNDERSTAND 🚨

// customPage.goto() // We can accesss both methods on this newly created Class using 'extends' and 'super' 😏


// page.login(); // But this third party library defined class will not have access to our class' function 'login()' 😟

// In order to resolve this WE use Javascript Proxies as used in below example 🐱‍💻
 


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