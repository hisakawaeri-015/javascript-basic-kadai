
//ボタンを定数化
const btn = document.getElementById('btn');

//textを定数化
const text = document.getElementById('text');

//クリックしたら表示が変わる
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

