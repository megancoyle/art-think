function ArtThink()
{
    var generateText= new Array("It's art, therefore it it. So here's my art. Therefore it, arrrttt...", "Please don't confuse my artwork with your invalid insight. That's right, an inanimate object can get confused.", "It's art, which means it's better than you.", "It's art, so it's important. That's all you need to know.", "You don't understand me because I'm an artist.", "I made this because I felt like it.","Don't ask me why I made my work - I just did.","This represents my soul.", "This represents my life.", "You don't understand it because it's art.", "The purpose of my work is confusion.", "I made this because I was bored.", "I don't know why I made this. Do you?", "Not getting my art is the whole point behind it.", "It speaks for itself.", "If you stare at it long enough, you should get it.", "If you don't get it, that actually means you got it.");
    var random = generateText[Math.floor(Math.random() * generateText.length)];
	if (random == generateText) {
		generateText.splice(random);
		}
    //alert(random);
    document.getElementById("text").innerHTML=random;
}