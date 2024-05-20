document.addEventListener("DOMContentLoaded", function() {
    const rectangles = [
      { class: ".flexcontainerwrapper1", value: "28 Diamonds" },
      { class: ".overlap-7", value: "59 Diamonds" },
      { class: ".overlap-8", value: "85 Diamonds" },
      { class: ".overlap-9", value: "113 Diamonds" },
      { class: ".overlap-10", value: "170 Diamonds" },
      { class: ".overlap-11", value: "240 Diamonds" },
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

  