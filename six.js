 function handle(){
   var quotes={
    "- Friedrich Nietzsche" :'"En iyisi, sevinmeyi öğrenelim; böylece başkalarına acı vermeyi ve acıları düşünmeyi unuturuz"',
    "-Mystic River" :'"Hiç küçük bir tercihin tüm hayatını nasıl değiştirebileceğini düşündün mü?"',
    "-Victor Hugo" : '"Beni mahveden şey bana yalan söylemiş olman değil sana bir daha inanmayacak olmamdır."',
    "-Nuovo Cinema Paradiso" :'"Konuşup konuşmamak bir şeyi değiştirmeyecekse susmamak için bir neden yoktur."'
   }
   var authors=Object.keys(quotes);
    var author= authors[Math.floor(Math.random()*authors.length)];
   var quote=quotes[author];
   document.getElementById("qute").innerHTML=quote;
   document.getElementById("author").innerHTML=author;
     
 }
