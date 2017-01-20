function changePage(page){

var currentPage = document.getElementById(page);

var pages = ["home", "about", "contact", "hobbies"];
for(var i = 0; i < pages.length; i++){

if(pages[i] !== page){
  if(document.getElementById(pages[i]).classList.contains('none')){

  } else {
    document.getElementById(pages[i]).classList.add('none');
  }
} else{
  currentPage.classList.remove("none");
}

}

}
