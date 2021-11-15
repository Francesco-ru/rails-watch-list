var i = 0;
var speed = 100;
var txt = ""; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  const quotes = ["“May the Force be with you” (Star Wars, 1977)", "“Toto, I’ve a feeling we’re not in Kansas anymore” (The Wizard of Oz, 1939)", "“I’m going to make him an offer he can’t refuse” (The Godfather, 1972)", "“You talkin’ to me?” (Taxi Driver, 1976)", "“The first rule of Fight Club is you do not talk about Fight Club” (Fight Club, 1999)", "“Yippie-ki-yay, mother f**ker!” (Die Hard, 1988)","“Why so serious?” (The Dark Knight, 2008)"];
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("demo").innerHTML = "";
    i = 0;
    txt = quotes[Math.floor(Math.random() * quotes.length)]; /* The text */
    typeWriter();
  }
}

export { typeWriter };
