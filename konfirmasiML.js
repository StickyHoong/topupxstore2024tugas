document.addEventListener("DOMContentLoaded", function() {
    // Mengambil nilai berlian dari localStorage
    var selectedDiamonds = localStorage.getItem("selectedDiamonds");
    if (selectedDiamonds) {
      // Mengisi input dengan class text-wrapper-9 dengan nilai yang diambil
      document.querySelector(".text-wrapper-9").value = selectedDiamonds;
      }
    });
