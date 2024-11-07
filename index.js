const greeting = document. getElementById("greeting");

greeting.style.textAlign="center";
greeting.style.marginTop="50px";
greeting.style.fontSize="20px";
greeting.style.color="black";
greeting.style.fontFamily="";

const username=window.prompt("What's your name?","Jane");
greeting.innerHTML="Iorana! Welcome to my website, "+username+ "!";
