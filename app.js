document.addEventListener('DOMContentLoaded',function(){
  //ulのリストエレメントを取得する
  const list = document.querySelector('#todo-list ul');

  //リストからアイテムを削除する
  list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  })

  //リストにアイテムを追加する
  const addForm = document.forms['add-todo'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();
    //インプットの値を取得する
    const value = addForm.querySelector('input[type="text"]').value;
    //エレメントを作成する
    const li = document.createElement('li');
    const todoName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    //インプットのの値がない場合
    if(value == ''){
      alert('追加するリストを記入してください。')
      //新しいリストを追加する
    }else{
      li.appendChild(todoName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
      //内容を追加する
      todoName.textContent = value;
      deleteBtn.textContent = 'delete';
      //クラスをクラスリストに追加する
      todoName.classList.add('name');
      deleteBtn.classList.add('delete');
      //リセット
      addForm.querySelector('input[type="text"]').value = '';
    }
  });
  //リスクを隠すのチェックボックスがチェックされた場合、todoを隠す
  const hideTodos = document.querySelector('#hide');
  hideTodos.addEventListener('change', function(e){
   if(hideTodos.checked){
     list.style.display = 'none';
   }else{
     list.style.display = 'initial';
   }
  });

//リスト検索機能を追加する
  const searchBar = document.forms['search-todo'].querySelector('input');
  //インプットに対してイベントリスナーを追加する
  searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    //すべてのTODOを受け取る
    const todos = list.querySelectorAll('li');
    //ループしてマッチングを探す
    todos.forEach(function(todo){
      const title = todo.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) == -1){
        todo.style.display = 'none';
      }else{
        todo.style.display = 'block';
      }
    });
  });
});
