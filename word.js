var data = ["data Base", "Domain name","Arguments","Wireframe",
"User interface","Attributes","Responsible web design",
"Frameworks"];

var Word = function() {
    this.gameWord = data[Math.floor(Math.random()*data.length)];
    data.splice(data.indexOf(gameWord),1);     
    // console.log(this.gameWord)
}

// Word();

module.exports = Word;