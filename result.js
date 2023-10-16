// main.js...

// 1. GET request using fetch()
fetch("https://sheetdb.io/s/t/cntlo8g7jvsqg.js")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>grup_pica</th><th>sub_pica</th><th>detail_pica</th><th>detail_pica</th> <th>alternatif_solusi1</th><th>alternatif_solusi2</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.grup_pica}</td>
        <td>${user.sub_pica} </td>
        <td>${user.detail_pica}</td>
        <td>${user.alternatif_solusi1}</td>
        <td>${user.alternatif_solusi2}</td>
        <td>${user.alternatif_solusi3}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });

// main.js

// 5. POST request using fetch()
fetch("https://sheetdb.io/s/t/cntlo8g7jvsqg.js", {
  // 6. Adding method type
  method: "POST",

  // 7. Adding body or contents to send JSON Stringify
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),

  // 8. Adding headers to the request
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  // 9. Converting to JSON
  .then((response) => response.json())

  // 10. Displaying results to console
  .then((json) => console.log(json));