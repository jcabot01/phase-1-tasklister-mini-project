document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new.value)
    form.reset()
  })
});

function buildToDo(todo) {
  console.log(todo) 
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let input = document.createElement('input')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo } `
  p.appendChild(btn)
  p.appendChild(input)
  input.textContent = "notes"
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
