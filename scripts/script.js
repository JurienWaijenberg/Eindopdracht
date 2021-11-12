// JavaScript Document

function mobilenav() {
    var x = document.getElementById("navbar");
    var body = document.getElementsByTagName('body')[0];
    var navicon = document.getElementById('nav-icon4');
    if (x.style.display === "block") {
      x.style.display = "none";
      body.style.overflow = "auto";
      navicon.classList.remove("open");
    } else {
      x.style.display = "block";
      body.style.overflow = "hidden";
      navicon.classList.add("open");
    }
  }

  function bestellen() {
    var bestellen = document.getElementById("bestellen-info");
    
    if (bestellen.style.overflow === "visible") {
        bestellen.style.overflow = "hidden";
        bestellen.style.height = "0"
    } else {
        bestellen.style.overflow = "visible";
        bestellen.style.height = "auto"
    }
  }

  function service() {
    var service = document.getElementById("service");
    
    if (service.style.overflow === "visible") {
        service.style.overflow = "hidden";
        service.style.height = "0"
    } else {
        service.style.overflow = "visible";
        service.style.height = "auto"
    }
  }

  function account() {
    var account = document.getElementById("account");
    
    if (account.style.overflow === "visible") {
        account.style.overflow = "hidden";
        account.style.height = "0"
    } else {
        account.style.overflow = "visible";
        account.style.height = "auto"
    }
  }

  function store() {
    var store = document.getElementById("store");
    
    if (store.style.overflow === "visible") {
        store.style.overflow = "hidden";
        store.style.height = "0"
    } else {
        store.style.overflow = "visible";
        store.style.height = "auto"
    }
  }

  function bedrijven() {
    var bedrijven = document.getElementById("bedrijven");
    
    if (bedrijven.style.overflow === "visible") {
        bedrijven.style.overflow = "hidden";
        bedrijven.style.height = "0"
    } else {
        bedrijven.style.overflow = "visible";
        bedrijven.style.height = "auto"
    }
  }

  function onderwijs() {
    var onderwijs = document.getElementById("onderwijs");
    
    if (onderwijs.style.overflow === "visible") {
        onderwijs.style.overflow = "hidden";
        onderwijs.style.height = "0"
    } else {
        onderwijs.style.overflow = "visible";
        onderwijs.style.height = "auto"
    }
  }

  function gezondheidszorg() {
    var gezondheidszorg = document.getElementById("gezondheidszorg");
    
    if (gezondheidszorg.style.overflow === "visible") {
        gezondheidszorg.style.overflow = "hidden";
        gezondheidszorg.style.height = "0"
    } else {
        gezondheidszorg.style.overflow = "visible";
        gezondheidszorg.style.height = "auto"
    }
  }

  function waarden() {
    var waarden = document.getElementById("waarden");
    
    if (waarden.style.overflow === "visible") {
        waarden.style.overflow = "hidden";
        waarden.style.height = "0"
    } else {
        waarden.style.overflow = "visible";
        waarden.style.height = "auto"
    }
  }

  function overApple() {
    var overApple = document.getElementById("overApple");
    
    if (overApple.style.overflow === "visible") {
        overApple.style.overflow = "hidden";
        overApple.style.height = "0"
    } else {
        overApple.style.overflow = "visible";
        overApple.style.height = "auto"
    }
  }

