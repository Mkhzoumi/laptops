// first java script test

var usage = prompt('what do you want to use the laptop for?', 'gaming , business , lightweight');

var alert_message = 'check the end of the page you will find ';

console.log(usage);

if (usage === 'gaming') { alert(alert_message + usage + ' laptops'); document.write('<h2><a href="https://www.techradar.com/news/mobile-computing/laptops/best-gaming-laptops-top-5-gaming-notebooks-reviewed-1258471">best gaming laptops</a></h1>'); document.write('<img src="https://www.lenovo.com/medias/gallery-laptop-4.jpg?context=bWFzdGVyfHJvb3R8NTM5ODF8aW1hZ2UvanBnfGg4MC9oMmUvOTI0NTQyOTIwMjk3NC5qcGd8OTZmOTBkNjQxYTVlODQwNTQwZTRhYzczNWZjZTA3Zjg3NjgxMTA3YzA4OGMzNWQzZDBlYjVhOWY2NmU4ZDM0NQ" width="1440" height="600"/>') }

else if (usage === 'business') 
{ alert(alert_message + usage + ' laptops'); document.write('<h2><a href="https://www.laptopmag.com/articles/best-business-laptops">best business laptops</a></h1>'); document.write('<img src="https://wallpaperaccess.com/full/2484044.jpg" width="1440" height="600"/>') }

else if (usage === 'lightweight') 
{ alert(alert_message + usage + ' laptops'); document.write('<h2><a href="https://www.pcmag.com/picks/the-best-ultraportable-laptops">best lightweight laptops</a></h1>'); document.write('<img src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2020/02/lightweight-laptops-hero.jpg" width="1440" height="600"/>') }

else { alert('you choosed something else, anyway check out the website you may find what you asked for') };
