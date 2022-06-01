const items = document.querySelector('.items');
const form = document.querySelector('.new_form');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  // 5. 인풋 초기화
  input.value = '';
  input.focus();
}

let id = 0; // UUID 를 쓰거나 오브젝트에 있는 해시코드 이용해서 고유한 아이디 만드는 것이 좋음
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = ` 
          <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete">
              <i class="fa-solid fa-trash-can" data-id=${id}></i>
            </button>
          </div>
          <div class="item_divideer"></div>
`;
  id++;
  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const itemName = document.createElement('span');
  // itemName.setAttribute('class', 'item_name');
  // itemName.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item_delete');
  // deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivier = document.createElement('div');
  // itemDivier.setAttribute('class', 'item_divider');

  // item.appendChild(itemName);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivier);

  return itemRow;
}

// addBtn.addEventListener('click', () => {
//   onAdd();
// });

// input.addEventListener('keydown', (event) => {
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
