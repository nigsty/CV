//define language areload anchors
var dataReload = document.querySelectorAll("[data-reload]");
console.log("Data Reload" + dataReload);

//language transtlations 
var language = {
    eng: {
        welcome: "Welcome every one!"
    },
    de: {
        welcome: "Familienprojekt und kurze Webentwicklungsaufgaben"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#de") {
        test.textContent = language.de.welcome;
        console.log(language.eng.welcome)
    }
}

// define language reload onclick illiteration
/*     for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    }
} */