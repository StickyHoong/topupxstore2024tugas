document.addEventListener("DOMContentLoaded", function() {
    const rectangles = [
      { class: ".flexcontainerwrapper1", value: " 105 Wild Cores" },
      { class: ".overlap-7", value: "350 Wild Cores" },
      { class: ".overlap-8", value: "585  Wild Cores" },
      { class: ".overlap-9", value: "1135 Wild Cores" },
      { class: ".overlap-10", value: "1660 Wild Cores" },
      { class: ".overlap-11", value: "3010 Wild Cores" },
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
        window.location.href = "KonfirmasipembelianML.html"; // Redirect ke konfirmasi.html
      } else {
        event.preventDefault();
        alert("Silakan pilih nominal top-up terlebih dahulu.");
      }
    });
  });
