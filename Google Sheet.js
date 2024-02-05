const scriptURL = 'https://script.google.com/macros/s/AKfycbxr92ZvNJsYbugW-JbZOx5StvbFLef7n1ZoAemVOZmnNEoy4vX7Su3le7FCGH3IqE71/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})