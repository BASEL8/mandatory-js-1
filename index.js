//change h1 text;
document.getElementsByTagName('header')[0].children[0].innerHTML = document.getElementsByTagName('header')[0].children[
  0].innerHTML.replace('Bananas', 'Vegetables');

//change li list;  
document.getElementsByTagName('header')[0].children[1].children[2].children[0].innerHTML = document.getElementsByTagName(
  'header')[0].children[1].children[2].children[0].innerHTML.replace(
  'Bananas', 'Vegetables');
document.getElementsByTagName('header')[0].children[1].children[2].children[0].href = '#vegetables';
// change the position of the contact section;
var contact_section = document.getElementById('contact');
document.getElementById('main').appendChild(contact_section);

//create h2 and append it to the contact section;
var h2 = document.createElement('h2');
h2.textContent = document.getElementById('contact').id;
contact_section.insertBefore(h2, contact_section.children[0]);

//create p and h2 elements and add them to the about section;
var about_section = document.getElementById('about');
document.getElementById('about').innerHTML = '';
var about_section_text = 'We\'re the best in fruits & vegetables';
var p = document.createElement('p');
var h2 = document.createElement('h2');
h2.textContent = document.getElementById('about').id;;
document.getElementById('about').appendChild(h2)
p.textContent = about_section_text;
document.getElementById('about').appendChild(p);

//change the table head td tages to th; 
document.getElementsByTagName('tr')[0].children[0].outerHTML = document.getElementsByTagName('tr')[0].children[0].outerHTML
  .replace(
    'td', 'th');
document.getElementsByTagName('tr')[0].children[1].outerHTML = document.getElementsByTagName('tr')[0].children[1].outerHTML
  .replace(
    'td', 'th');

//create link tag and insert the css file info;
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'main.css';
document.head.appendChild(link);

//change the title text;
document.title = document.title.replace('Bananas', 'Vegetables');
