<template>
  <div class="footer">
    <!-- Logo -->
    <div class="footer-logo">
      <img src="@/assets/img/logo.png" alt="Fix Car Logo" />
    </div>

    <!-- Telefoonnummer en Locatie -->
    <div class="footer-contact">
      <p><strong>Email:</strong> info@fixcar.nl</p>
      <p>
        <strong>Telefoon:</strong>
        <a href="tel:0624240318"> 0624240318</a>
      </p>
      <p>
        <strong>Locatie:</strong>
        <a href="https://www.google.com/maps/search/?api=1&query=Pampuslaan+59+1382+JM+Weesp+Nederland" target="_blank" rel="noopener noreferrer">
          Pampuslaan 59,
          1382 JM Weesp
        </a>

      </p>
    </div>

    <!-- Social Media Icons -->
    <div class="footer-socials">
      <a href="#" aria-label="WhatsApp">
        <img src="@/assets/img/whatsapp.png" alt="WhatsApp Icon" @click="sendWhatsAppMessage" />
      </a>
      <a href="#" aria-label="Instagram">
        <img src="@/assets/img/instagram.png" alt="Instagram Icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
const sendWhatsAppMessage = () => {
  const phoneNumber = "31624240318"; // Jouw telefoonnummer in internationaal formaat
  const message = encodeURIComponent("Hallo, ik heb interesse in uw diensten!"); // Bericht
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp in een nieuw tabblad
  window.open(url, "_blank");
};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f4f4f4;
  font-family: 'Metrophobic', sans-serif;
  flex-wrap: wrap;
}

.footer-logo {
  flex: 1 1 150px;
  text-align: left;
}

.footer-logo img {
  margin-left: 10rem;
  max-width: 250px;
  height: auto;
}

.footer-contact {
  flex: 1 1 250px;
  text-align: left;
  font-size: 1rem;
  color: #333333;
  line-height: 1.4;
  padding-left: 10rem;
}

.footer-contact a {
  color: #0056b3;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.footer-socials {
  flex: 1 1 150px;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-right: 14rem;
}

.footer-socials a img {
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15%;
}

.footer-socials a img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 1rem;
  }

  .footer-contact {
    padding-left: 0;
    margin-top: -36px !important;
    margin-bottom: -45px !important;

  }

  .footer-socials {
    margin: 0;
    justify-content: center;
    margin-top: -30px !important;
  }

  img{
    margin-top: 1rem;
    margin-left: 0!important;
    margin-bottom: -10px!important;
  }
}
</style>
