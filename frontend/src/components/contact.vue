<template>
  <body>
  <div class="contact-form">
    <h1>Contact Formulier</h1>
    <form @submit.prevent="sendEmail" id="contact-form">
      <label for="naam">Naam:</label>
      <input type="text" id="naam" v-model="naam" placeholder="Vul je naam in" required />

      <label for="nummer">Nummer:</label>
      <input type="tel" id="nummer" v-model="nummer" placeholder="Vul je telefoonnummer in" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Vul je e-mailadres in" required />

      <label for="bericht">Bericht:</label>
      <textarea id="bericht" v-model="bericht" placeholder="Typ hier je bericht" required></textarea>

      <button type="submit">Verzenden</button>
    </form>
  </div>
  </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

// Variabelen voor formulierinvoer
const naam = ref('');
const nummer = ref('');
const email = ref('');  // Voeg een email variabele toe
const bericht = ref('');

// Functie voor het verzenden van de e-mail via EmailJS
const sendEmail = async () => {
  // Initialiseer EmailJS met je gebruikers-ID
  emailjs.init('NIbDF03488-2V1rMR');  // Vervang door je eigen gebruikers-ID van EmailJS

  // Formulierdata die wordt verzonden
  const formData = {
    naam: naam.value,
    nummer: nummer.value,
    email: email.value,  // Voeg email toe aan de formData
    bericht: bericht.value,
  };

  try {
    // Verstuur het formulier via EmailJS (vervang je service en template IDs)
    const response = await emailjs.send('info_car', 'template_cfcl0sy', formData);

    // Controleer of de e-mail succesvol is verzonden
    if (response.status === 200) {
      alert('Je bericht is succesvol verzonden!');
    } else {
      alert('Er is iets mis gegaan. Probeer het later opnieuw.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Er is een fout opgetreden bij het verzenden van je bericht.');
  }
};
</script>

<style scoped>
body {
  margin: 0; /* Verwijder standaard marges van de body */
  margin-left: -8px;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  height: 100vh; /* Maak de hoogte 100% van het zichtbare scherm */
  background-image: url('@/assets/img/HERO4.png'); /* Stel de hero-afbeelding als achtergrond in */
  background-size: cover; /* Zorg dat de afbeelding het hele gebied bedekt */
  background-position: center; /* Centreer de afbeelding */
  background-repeat: no-repeat; /* Voorkom herhaling van de afbeelding */
  display: flex; /* Maak de body een flex container */
  justify-content: center; /* Centreer horizontaal */
  align-items: center; /* Centreer verticaal */
  color: rgba(0, 0, 0, 0.64);
  position: relative; /* Zet de positionering op relative voor het pseudo-element */
  font-family: 'Metrophobic', sans-serif;
}

body::before {
  content: ''; /* Zorg ervoor dat er een pseudo-element is */
  position: absolute; /* Maak het element absoluut ten opzichte van de body */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Zet een semi-transparante zwarte overlay */
  z-index: 1; /* Zorg ervoor dat de overlay boven de achtergrondafbeelding ligt */
}

.contact-form {
  max-width: 400px;
  width: 100%; /* Zorg ervoor dat het formulier responsief is */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Zorg ervoor dat de contactform boven de overlay komt */
  z-index: 2; /* Zet de contactform boven de overlay */
}

.contact-form h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.contact-form label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  color: #555;
}

.contact-form input,
.contact-form textarea {
  width: 95%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.2);
}

#bericht {
  height: 80px;
}

.contact-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>

<!-- Voeg de EmailJS script toe -->
