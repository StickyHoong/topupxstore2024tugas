document.addEventListener("DOMContentLoaded", function() {
    const rectangles = [
      { class: ".flexcontainerwrapper1", value: "60 Genesis Crystals" },
      { class: ".overlap-7", value: "330 Genesis Crystals" },
      { class: ".overlap-8", value: "660 Genesis Crystals" },
      { class: ".overlap-9", value: "1090 Genesis Crystals" },
      { class: ".overlap-10", value: "2240 Genesis Crystals" },
      { class: ".overlap-11", value: "3880 Genesis Crystals" },
    ];
  
    rectangles.forEach(rect => {
      document.querySelector(rect.class).addEventListener("click", function() {
        localStorage.setItem("selectedDiamonds", rect.value);
      });
    });
  
    // Event listener untuk tombol Beli Sekarang (text-wrapper-25)
    document.querySelector(".text-wrapper-100").addEventListener("click", function(event) {
      // Cek apakah diamonds telah dipilih
      var selectedDiamonds = localStorage.getItem("selectedDiamonds");
      if (selectedDiamonds) {
        window.location.href = "Konfirmasipembelian.html"; // Redirect ke konfirmasi.html
      } else {
        event.preventDefault();
        alert("Silakan pilih nominal top-up terlebih dahulu.");
      }
    });
  });

  