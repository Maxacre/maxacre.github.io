document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        document.getElementById('pdfViewer').src = fileURL;
    } else {
        alert('Por favor, selecciona un archivo PDF.');
    }
});
