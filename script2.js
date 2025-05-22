<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

  (function () {
    emailjs.init("uCR3IFuvBfdoREVlu"); // ✅ Your actual public key
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_gmq6eqp", "template_7qbixdb", form)
        .then(function () {
          alert("✅ Order placed successfully! We will contact you soon.");
          form.reset();
        }, function (error) {
          alert("❌ Failed to send order. Check console.");
          console.error("EmailJS error:", error);
        });
    });
  });
