let displayed = [];

let colors = [
    "rgb(255,219,240)",
    "rgb(212,240,255)",
    "rgb(242,222,252)",
    "rgb(255,237,153)",
    "rgb(250,222,219)", 
    "rgb(194,235,224)", 
     "rgb(255,222,207)"
]
async function setWallPaper() {
    if (displayed.length === quotes.length) {
        displayed = [];
    }
    let quote = Math.floor(Math.random() * quotes.length);
    while (displayed.indexOf(quote) >= 0) {
        quote = Math.floor(Math.random() * quotes.length);
    }
    clr =  Math.floor(Math.random() * colors.length);

    fontsize = Math.round(100/((quotes[quote]['quote'].length)/3));
    if (fontsize < 7) {
        fontsize = 7;
    }
    if (fontsize > 12) {
        fontsize = 12;
    }
    document.getElementById("js_caption").innerHTML = quotes[quote]['datum'];
    document.getElementById("js_quote").innerHTML = quotes[quote]['quote'];
    document.getElementById("js_body").style.backgroundColor = colors[clr];
    document.getElementById("js_quote").style.fontSize = fontsize + "vh";

}
setWallPaper();
setInterval(setWallPaper, 10000);