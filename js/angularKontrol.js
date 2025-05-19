var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.form = {
    isim: '',
    soyisim: '',
    eposta: '',
    mesaj: '',
    cinsiyet: '',
    okul: '',
    onay: false
  };
  $scope.okullar = [
    "Okul Seçiniz",
    "Sakarya Üniversitesi",
    "SUBU",
    "Kocaeli Üniversitesi",
    "Gazi Üniversitesi",
    "Erciyes Üniversitesi"
  ];
  $scope.submitted = false;

  $scope.angularKontrolEt = function() {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test($scope.form.eposta)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
    
    if ($scope.form.isim && $scope.form.soyisim && $scope.form.eposta && $scope.form.mesaj && $scope.form.cinsiyet && $scope.form.onay && $scope.form.okul !== "Okul Seçiniz") {
      $scope.submitted = true;
      alert("Form doğru şekilde doldurulmuş! (Angular.js)");
    } else {
      alert("Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.");
    }
  };

  $scope.temizleForm = function() {
    $scope.form = {
      isim: '',
      soyisim: '',
      eposta: '',
      mesaj: '',
      cinsiyet: '',
      okul: '',
      onay: false
    };
    $scope.submitted = false;
  };
});
