document.addEventListener('DOMContentLoaded',function(){

  const list = document.querySelector('#book-list ul');

  //delete books from book lists
  list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  })

  //add book list
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    //apend child
    if(value == ''){
      alert('追加するリストを記入してください。')
    }else{
      li.appendChild(bookName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
      //add content
      bookName.textContent = value;
      deleteBtn.textContent = 'delete';
      //add class name
      bookName.classList.add('name');
      deleteBtn.classList.add('delete');
      //reset entryed value
      addForm.querySelector('input[type="text"]').value = '';
    }
  });
  //
  const hideBooks = document.querySelector('#hide');
  hideBooks.addEventListener('change', function(e){
   if(hideBooks.checked){
     list.style.display = 'none';
   }else{
     list.style.display = 'initial';
   }
  });

  //add search function
  //grab the input
  const searchBar = document.forms['search-books'].querySelector('input');
  //add event listenr to the input
  searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    //grab all books li
    const books = list.querySelectorAll('li');
    books.forEach(function(book){
      const title = book.firstElementChild.textContent;
      //match term with title
      //using indexOf() to return to positon of the term in the title
      if(title.toLowerCase().indexOf(term) == -1){
          book.style.display = 'none';
      }else{
        book.style.display = 'block';
      }
    });
  });
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  const lis = document.querySelectorAll('.li');
  //change color if for selected botton
  tabs.addEventListener('click', function(e){
    lis.forEach(function(li){
      li.classList.remove('hl');
    })
    e.target.classList.add('hl');
  });

  //change content for selected botton
  tabs.addEventListener('click', function(e){
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
  });

});
