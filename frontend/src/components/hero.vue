<script setup lang="ts">
import HERO from '@/assets/img/hero.png'; // Importeer de afbeelding

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
  <div class="hero">
    <div class="content">
      <div id="bovenste-content">
        <h1>Breng uw voertuig terug in topconditie!</h1>
        <p>Van kleine krassen tot grote reparaties – wij staan voor u klaar.</p>
      </div>

      <div>
        <button class="cta-button" @click="sendWhatsAppMessage">WhatsApp ons nu!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex; /* Gebruik flexbox om inhoud te centreren */
  justify-content: center; /* Horizontaal centreren */
  align-items: center; /* Verticaal centreren */
  height: 90vh; /* Hoogte afhankelijk van het scherm */
  background-image: url('@/assets/img/HERO4.png'); /* Stel de hero-afbeelding als achtergrond in */
  background-size: cover; /* Zorg dat de afbeelding het hele gebied bedekt */
  background-position: center; /* Centreer de afbeelding */
  background-repeat: no-repeat; /* Voorkom herhaling van de afbeelding */
  margin-left: -8px;
  margin-right: -8px;
  font-family: 'Metrophobic', sans-serif;
}

.content {
  text-align: center; /* Tekst centreren */
  color: white; /* Maak de tekst wit voor contrast */
  padding: 1rem; /* Voeg wat padding toe voor kleinere schermen */
}

#bovenste-content {
  padding-top: 80px;
  padding-bottom: 50px !important;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0); /* Donkere schaduw voor diepte */
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0); /* Zelfde schaduw voor consistentie */
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
}

.cta-button:hover {
  background-color: #81BDFFFF;
  transition: 0.2s;
}

/* Media queries voor responsiviteit */
@media (max-width: 1024px) {
  .hero {
    background-position: center top; /* Focus op het bovenste deel van de afbeelding */
  }
}

@media (max-width: 768px) {
  .hero {
    background-size: contain; /* Zorg ervoor dat de afbeelding altijd volledig zichtbaar blijft */
    background-position: center top; /* Pas positie aan voor kleinere schermen */
    height: 70vh; /* Maak de hero-sectie iets kleiner */
  }

  h1 {
    font-size: 2.5rem; /* Schaal de koptekst omlaag voor tablets */
  }

  p {
    font-size: 1.2rem; /* Verklein de paragraaftekst */
  }

  .cta-button {
    padding: 0.8rem 1.5rem; /* Verminder de padding */
    font-size: 1rem; /* Verklein de tekst van de knop */
  }
}

@media (max-width: 480px) {
  .hero {
    background-size: cover; /* Laat de afbeelding het volledige scherm vullen */
    background-position: center; /* Centreer de afbeelding */
    height: 60vh; /* Nog kleiner voor mobiele schermen */
  }

  h1 {
    font-size: 2rem; /* Nog kleiner voor mobiele schermen */
  }

  p {
    font-size: 1rem; /* Verklein de tekst nog verder */
  }

  .cta-button {
    padding: 0.6rem 1.2rem; /* Nog compactere knop */
    font-size: 0.9rem; /* Kleinere tekst in de knop */
  }
}
</style>
