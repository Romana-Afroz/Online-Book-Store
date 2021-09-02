const searchBook= () => {
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    //console.log(searchText);
    searchField.value= '';
    const url=` https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
			.then(res => res.json())
			.then(data => displaySearchResult(data.docs));
    //console.log(url);
}
//searchBook();
 const displaySearchResult=books => {
    const displayResult=document.getElementById('display-result');
    books.forEach(book => {
        //console.log(book);
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`     
        <div class="card mx-auto" style="width: 18rem; height:40rem;">
        <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid" alt="books-image">  
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text"> <span class="fw-bold">Author:</span> ${book.author_name}</p>
            <p class="card-text"> <span class="fw-bold">Publisher:</span> ${book.publisher}</p>
            <a href="#" class="btn btn-primary">Read/Borrow</a> 
        </div>
        <div class="card-footer">
             <small class="text-muted">First Published: ${book.first_publish_year}</small>
        </div>
    </div>
    `;

      displayResult.appendChild(div);
    })
 }
