// api url
const api_url = 
	"https://sheetdb.io/api/v1/kmd3utdyghxjr";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab = 
		`<tr>
		<th>Sub Pica</th>
		<th>Detail Pica</th>
		<th>alternatif_solusi_1</th>
		<th>alternatif_solusi_2</th>
        <th>alternatif_solusi_3</th>
		</tr>`;

	// Loop to access all rows 
	for (let r of data.list) {
		tab += `<tr> 
	<td>${r.sub_pica} </td>
	<td>${r.detail_pica}</td>
	<td>${r.alternatif_solusi_1}</td> 
	<td>${r.alternatif_solusi_2}</td>
    <td>${r.alternatif_solusi_3}</td>		 
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("masterlist").innerHTML = tab;
}
