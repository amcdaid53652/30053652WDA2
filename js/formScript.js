function myFormSubmits(event) {
    event.preventDefault(); // prevent the default form submission

    // call the custom functions you want to execute before submitting the form
    downloadFormData();
    thanks();
}

function downloadFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    let dataString = '';

    for (let [key, value] of formData.entries()) {
        dataString += `${key}: ${value}\n`;
    }

    // create a blob from the data string
    const blob = new Blob([dataString], {
        type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);

    // Create a link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the object URL after download
    URL.revokeObjectURL(url);
}

    function thanks() {
        // Redirect to another page after download
        window.location.href = 'thankYou.html'; // Replace with your disered URL
    }