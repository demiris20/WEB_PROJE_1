function formTemizle() {
    document.getElementById("isim").value = "";
    document.getElementById("soyisim").value = "";
    document.getElementById("eposta").value = "";
    document.getElementById("mesaj").value = "";
    var cinsiyetler = document.querySelectorAll('input[name="cinsiyet"]');
    cinsiyetler.forEach(function(cinsiyet) {
        cinsiyet.checked = false;
    });
    document.getElementById("okul").selectedIndex = 0;
    document.getElementById("onay").checked = false;
}