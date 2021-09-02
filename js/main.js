    //  for spinner 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
    }
const toggleSearchResult = displayStyle => {
    document.getElementById('final-result').style.display = displayStyle;
    document.getElementById('search-result').style.display = displayStyle;
    }

    // searchBook
const searchBook= () => {
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    //  for showing spinner 
    toggleSpinner('block');
    toggleSearchResult('none');
    //  for clearing the input field 
    searchField.value= '';
   //for empty serach result
    if(searchText === ''){
        displayError('Please Enter some Text to search');
        toggleSpinner('none');
        toggleSearchResult('none');
    }
    else{
    document.getElementById('display_error').textContent = '';
    const url=` https://openlibrary.org/search.json?q=${searchText}`;
            fetch(url)
			.then(res => res.json())
			.then(data => displaySearchResult(data.docs,data.numFound))
            .catch(error => displayError(error))  
    //console.log(url);
        }
      }
    // displaying error message 
const displayError = (errorMessage = 'Something is wrong. Try again later.') => {
	document.getElementById('display_error').innerHTML = `
		<h5 class="text-danger fw-bold my-4">${errorMessage}</h5>
	`;
    };

const displaySearchResult=(books,numFound) => {
    const displayResult=document.getElementById('display-result');
    //  for Total & display search result 
    document.getElementById('search-result').innerHTML = `
    <p class="text-white fw-bolder p-3 mb-3 bg-body text-center border rounded">${numFound} Total Results Found </p>
    <p class="text-white fw-bolder p-3 mb-4 bg-body text-center border rounded">${books.length} Display Results Found </p>
    `;
    //  for clearing search result 
    displayResult.textContent = '';
    if(!books.length){
        displayError('No Result Found. Please try again');
    }
    //for all the book results
    books?.forEach (book => {
        //console.log(book);
        const div=document.createElement('div');
        div.classList.add('col');
    // for innerHtml result
        div.innerHTML=`     
        <div class="card " style="height:600px;">
        <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid" alt="books-image">  
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text"> <span class="fw-bold">Author:</span>  ${book.author_name ? book.author_name : 'Author Not Found'}</p>
            <p class="card-text"> <span class="fw-bold">Publisher:</span> ${book.publisher ? book.publisher[0] : 'Publisher Not Found'}</p>
            <a href="#" class="btn btn-primary">Read</a> 
        </div>
        <div class="card-footer">
             <small class="text-muted">First Published:  ${book.first_publish_year ? book.first_publish_year : 'First Publish Year Not Found'}</small>
        </div>
    </div>
    `;

      displayResult.appendChild(div);
    })
    toggleSpinner('none');
    toggleSearchResult('block');
 }
