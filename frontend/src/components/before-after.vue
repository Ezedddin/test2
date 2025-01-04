<script setup lang="ts">

// Functie om naar WhatsApp te navigeren
const sendWhatsAppMessage = () => {
  const phoneNumber = "31624240318"; // Vervang dit door jouw telefoonnummer in internationaal formaat (bijv. +316 voor Nederland zonder de 0)
  const message = encodeURIComponent("Hallo, ik heb interesse in uw diensten!"); // Bericht dat de gebruiker kan sturen
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp in een nieuw tabblad of hetzelfde tabblad
  window.open(url, "_blank");
};
</script>

<template>
  <div class="container">
    <h1 class="title">Jouw Resultaten, Onze Trots</h1>
    <div class="grid">
      <div class="card">
        <img src="../assets/img/before-1.jpg" alt="Afbeelding" />
        <img src="../assets/img/after-1.jpg" alt="Afbeelding" />
      </div>
      <div class="card">
        <img src="../assets/img/before-2.jpg" alt="Afbeelding" />
        <img src="../assets/img/after-2.jpg" alt="Afbeelding" />
      </div>
      <div class="card">
        <img src="../assets/img/before-3.jpg" alt="Afbeelding" />
        <img src="../assets/img/after-3.jpg" alt="Afbeelding" />
      </div>
      <div class="card">
        <img src="../assets/img/before-4.jpg" alt="Afbeelding" />
        <img src="../assets/img/after-4.jpg" alt="Afbeelding" />
      </div>
    </div>

    <button class="cta-button" @click="sendWhatsAppMessage">WhatsApp ons nu!</button>

  </div>
</template>
<style scoped>
.container {
  font-family: 'Metrophobic', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4; /* Zachte achtergrondkleur */
  padding: 20px;
  padding-bottom: 70px;
}

.title {
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  color: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Flexibele kolommen */
  gap: 20px; /* Ruimte tussen kaarten */
  width: 100%;
  max-width: 1200px; /* Maximum breedte */
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Schaduw voor diepte */
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  height: 100%; /* Vul de hoogte van de kaart */
  object-fit: cover; /* Zorg ervoor dat de afbeelding de ruimte vult */
  display: block;
  flex: 1; /* Laat beide afbeeldingen evenveel ruimte nemen */
}

.card:hover {
  transform: translateY(-5px); /* Lichte hover-animatie */
}

.cta-button {
  background-color: #d9d9d9;
  color: #000000;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.75); /* Schaduw toegevoegd */
  margin-top: 4rem;
}

.cta-button:hover {
  background-color: #81BDFFFF;
  transition: 0.2s;
}
</style>
