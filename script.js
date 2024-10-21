document.getElementById('convertButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');

    if (fileInput.files.length === 0) {
        message.innerText = 'Vui lòng chọn ít nhất một file!';
        return;
    }

    message.innerText = 'Đang chuyển đổi...';

    // Đây là nơi bạn sẽ thêm mã để chuyển đổi file
    // Bạn cần tích hợp với một API hoặc backend để thực hiện việc này

    setTimeout(() => {
        message.innerText = 'Chuyển đổi hoàn tất!';
    }, 2000);
});
