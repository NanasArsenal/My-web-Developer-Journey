const bookTitle = document.getElementById('book-title');
const bookNumber = document.getElementById('book-number');
//get the table body
const tableBody= document.querySelector('.table-body');
console.log(tableBody);


document.getElementById('book-form').addEventListener('submit', createBooktable);

function createBooktable(e){

    //creating table row element
    const trow =document.createElement('tr');
    trow.className='table-row';

    //creating an element for the booknumber
    const booknumb= document.createElement('th');
    booknumb.appendChild(document.createTextNode(bookNumber.value));
//appending book number to the trow
    trow.appendChild(booknumb);


    //creating an element for the booktitle column
    const bookname= document.createElement('td');
    bookname.appendChild(document.createTextNode(bookTitle.value));

    //appending book title to the trow
    trow.appendChild(bookname);

    tableBody.appendChild(trow);
 
    


    if(bookTitle.value=="" && bookNumber.value ==""){
        trow.remove();
    }


    bookTitle.value="";
    bookNumber.value ="";

    


    e.preventDefault();
}