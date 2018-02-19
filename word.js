var data = ["data Base", "Domain name","Arguments","Wireframe",
"User interface","Attributes","Responsible web design",
"Frameworks"];

var Word = function() {
    this.gameWord = data[Math.floor(Math.random()*data.length)];
    
    console.log(this.gameWord)
}

Word();

module.exports = Word;