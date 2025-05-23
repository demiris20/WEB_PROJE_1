<?php
// Kullanıcı adı ve şifreyi burada tanımlayın
$allowed_email = "b221210066@sakarya.edu.tr";
$allowed_password = "b221210066";

// Post edilen verileri alın
$email = $_POST['email'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre kontrolü
if ($email == $allowed_email && $password == $allowed_password) {
    echo "Giriş başarılı!";
    header("Refresh: 2; URL=index.html");
    exit();
} else {
    // Hata mesajını ekrana yazdırmadan önce başlıkları gönderin
    header("Refresh: 2; URL=Giris.html");
    echo "Eposta veya şifre yanlış. Lütfen tekrar deneyin.";
    exit();
}
?>
