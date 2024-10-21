document.getElementById('convertButton').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    // Lấy nội dung từ textarea
    const textInput = document.getElementById('textInput').value;

    if (!textInput) {
        document.getElementById('message').innerText = 'Vui lòng nhập nội dung!';
        return;
    }

    // Tạo file PDF
    const doc = new jsPDF();
    doc.text(textInput, 10, 10);
    
    // Tải về file PDF
    doc.save('converted.pdf');

    // Hiển thị thông báo
    document.getElementById('message').innerText = 'Đang tải về file PDF...';
});
