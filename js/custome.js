
const searchbtn = document.getElementById('search-btn').addEventListener('click', function(){
  const searchInput =document.getElementById('search-input').value;
  
  const bookContainer = document.getElementById('book-container');
  const errors = document.getElementById('errors');
 
  
    // empty 
    errors.innerText='';

    // if check box empty then return 
    if(searchInput===''){
     alert( "input text can't be empty") ;  
     return;
       
    }
    /// fetch api 

    fetch (`http://openlibrary.org/search.json?q=${searchInput}`)
    .then(res=>res.json())
    .then(data=> displaySearchBook(data) );
  });


  /// render all results of book
  const displaySearchBook=(books)=>{

    var bookDetails = document.getElementById('book-details');
    const bookList= books.docs;
    
  
    bookList.forEach(book => {
      console.log(book);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML= `
      <div class="card-group ">
          <div class="card me-3  ">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">Book name: ${book.text[1]}</h3>
              <p class="card-title">Publisher name: ${book.publisher}</p>
              <p class="card-title">Author name: ${book.author_name}</p>
              <p class="card-title">Published year: ${book.first_publish_year}</p>
              <p class="card-text">   </p>
              <p class="card-text">    </p>
            </div>
          </div>
  
        </div>
      `;
      bookDetails.appendChild(div);
    });
    document.getElementById('total-book').innerText=bookList.length;
    document.getElementById('search-input').value='';
   
  }

