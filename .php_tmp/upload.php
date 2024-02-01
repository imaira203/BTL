<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Đường dẫn lưu trữ tệp tin trên máy chủ
    $uploadDirectory = "./music/img/";

    // Tên tệp tin được tải lên
    $uploadedFileName = $_FILES["image"]["name"];

    // Đường dẫn đầy đủ để lưu trữ tệp tin trên máy chủ
    $targetFilePath = $uploadDirectory . $uploadedFileName;

    // Di chuyển tệp tin từ thư mục tạm sang đúng địa chỉ lưu trữ
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
        // Thực hiện các thao tác khác nếu cần thiết

        // Trả về thông báo thành công
        echo json_encode(["message" => "File uploaded successfully.", "filePath" => $targetFilePath]);
    } else {
        // Trả về thông báo lỗi nếu có vấn đề khi di chuyển tệp tin
        echo json_encode(["message" => "Error uploading file.", "error" => $_FILES["image"]["error"]]);
    }
} else {
    // Trả về thông báo nếu không phải là yêu cầu POST
    echo json_encode(["message" => "Invalid request method."]);
}
?>
