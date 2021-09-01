const searchBook= () => {
    const inputField=document.getElementById('search-field');
    const searchText=inputField.value;
    console.log(searchText);
    const url=` https://openlibrary.org/search.json?q=${searchText}`;
    // fetch=(url)
    // .then(res => res.json());
    //  .then(data => console.log(data.docs));
    fetch(url)
			.then((res) => res.json())
			.then((data) => displayResult(data.results));
    inputField.value= ' ';
}
searchBook();
  
const displayResult=document.getElementById('display-result');
 const displayBook=books =>{
    let count=0;
 }