function jsKontrolEt() {
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    var eposta = document.getElementById("eposta").value;
    var mesaj = document.getElementById("mesaj").value;
    var cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    var okul = document.getElementById("okul").value;
    var onay = document.getElementById("onay").checked;

    // Tüm alanların dolu olup olmadığını kontrol et
    if (isim === "" || soyisim === "" || eposta === "" || mesaj === "" || !cinsiyet || okul === "Okul Seçiniz" || !onay) {
        alert("Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.");
        return false;
    }

    // E-posta adresinin uygunluğunu kontrol et
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(eposta)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return false;
    }

    alert("Form verileri geçerli!");
    var formData = {
        isim: isim,
        soyisim: soyisim,
        eposta: eposta,
        mesaj: mesaj,
        cinsiyet: cinsiyet.value,
        okul: okul
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "mesajGoster.html";
    return true;
}
