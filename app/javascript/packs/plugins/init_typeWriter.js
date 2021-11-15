var i = 0;
var speed = 50;
var txt = ""; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  const quotes = ["“May the Force be with you” (Star Wars, 1977)",
  "“Toto, I’ve a feeling we’re not in Kansas anymore” (The Wizard of Oz, 1939)",
  "“I’m going to make him an offer he can’t refuse” (The Godfather, 1972)",
  "“You talkin’ to me?” (Taxi Driver, 1976)",
  "“The first rule of Fight Club is you do not talk about Fight Club” (Fight Club, 1999)",
  "“Yippie-ki-yay, mother f**ker!” (Die Hard, 1988)",
  "“Why so serious?” (The Dark Knight, 2008)",
  "“Here’s Johnny!” (The Shining, 1980)",
  "“Roads? Where we're going we don't need roads.” (Back to the Future, 1985)",
  "“Shaken, not stirred” (Goldfinger, 1964)",
  "“Mama says, 'Stupid is as stupid does.’” (Forrest Gump, 1994)",
  "“I’m having an old friend for dinner” (The Silence of the Lambs, 1991)",
  "“I'm also just a girl, standing in front of a boy, asking him to love her.” (Notting Hill, 1999)",
  "”They call it a Royale with cheese.” (Pulp Fiction, 1994)",
  "“It was Beauty killed the Beast” (King Kong, 1933)",
  "“Argo f**k yourself” (Argo, 2012)",
  "“That’ll do, pig, that’ll do” (Babe, 1995)"
  ];
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById("demo").innerHTML = "";
      i = 0;
      txt = quotes[Math.floor(Math.random() * quotes.length)]; /* The text */
      typeWriter();
    }, 2000);
  }
}

export { typeWriter };
