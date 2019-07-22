
document.title = 123;
//console.log(document.title);
///console.log(document.head);
//console.log(document.all[10]);
document.all[10].textContent = 'brovco';
//console.log(document.forms[0]);
//GETELEMENTBYID
var art = document.getElementById('main-header');
art.textContent="EYOOOOOOOO!!!";

//GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[1].textContent="whatsup mateys";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='black';

 for (i=0;i<items.length;i++) {
   items[i].style.backgroundColor = "#f4f4f4";
 }

//getElementsByTagName
 var li = document.getElementsByTagName('h2');
 console.log(li);

//QUERY SELECTOR
var header = document.querySelector('#main-header');
header.style.borderBottom='solid 4px black';

var input = document.querySelector('input');
input.value = 'hello world'

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

var secondChild= document.querySelector('.list-group-item:nth-child(2)');
secondChild.style.color="blue";

//QUERYSELECTORALL
/*var titles=document.querySelectorAll('.title')
console.log(titles);

var odd= document.querySelectorAll('.list-group-item:nth-child(odd)')
for(i=0; i<odd.length; i++){
  odd[i].style.backgroundColor="pink";
}

var even= document.querySelectorAll('.list-group-item:nth-child(even)')
for (x=0; x,even.length; x++){
  even[x].style.backgroundColor="#FFDAB9";
}*/

//PARENTNODES
var itemlist= document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentElement.style.backgroundColor="orange";

//CHILDNODES
itemlist.children[0].style.backgroundColor='khaki';

//NEXT AND PREVIOUS ELEMENT SIBLING
var group=document.querySelector('#M');
console.log(group.nextElementSibling);
group.nextElementSibling.style.backgroundColor='green';
group.previousElementSibling.textContent='hey you!!'
group.previousElementSibling.style.color='red'
group.previousElementSibling.style.fontWeight='bold'

//CREATE element

//Create a div
//var newdiv=document.createElement('div');

// add a class to our div
//newdiv.className='hello';
//add id to ur div
//newdiv.id='hello1';


//set its attribue eg title
//newdiv.setattribute('title','hello Div');

//CREATE TEXTNODE

//console.log(newdiv);


var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
  //console.log('button clicked');
  document.getElementById('button').textContent="OOUUCCHH!!";
  document.getElementById('main').style.backgroundColor="#f4f4f4";
}
