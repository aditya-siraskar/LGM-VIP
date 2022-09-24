const name = document.getElementById('name');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1')

function fun1() {
  out1.innerHTML = name.value;
}
btn1.addEventListener('click',fun1);
