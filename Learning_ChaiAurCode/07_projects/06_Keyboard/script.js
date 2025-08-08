const insert = document.querySelector('#insert');

window.addEventListener('keydown', (evnt) => {
    insert.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${evnt.key === " " ? evnt.key = "space" : evnt.key}</td>
    <td>${evnt.keyCode}</td>
    <td>${evnt.code}</td>
  </tr>
  
</table>  `
})