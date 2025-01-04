<script setup lang="ts">

// Functie om naar WhatsApp te navigeren
const sendWhatsAppMessage = () => {
  const phoneNumber = "0624240318"; // Vervang dit door jouw telefoonnummer in internationaal formaat (bijv. +316 voor Nederland zonder de 0)
  const message = encodeURIComponent("Hallo, ik heb interesse in uw diensten!"); // Bericht dat de gebruiker kan sturen
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp in een nieuw tabblad of hetzelfde tabblad
  window.open(url, "_blank");
};

</script>

<template>
  <div class="reviews-container">
    <h2>Reviews</h2>
    <div class="reviews">
      <div class="review-card">
        <h3>Verborgen Parel, echte vakmanschap!</h3>
        <p>
          Dit garage is echt een verborgen parel, in Amsterdam. Ik heb er mijn Astra vorige week gebracht voor bumper spot reparatie.
          Ik kreeg tarief door per whatsapp na het sturen van fotos, echt super schappelijk geprijsed voor het vakmanschap wat ze leveren.
          Ik moet echt foto van de schade erbij hebben om te kunnen zien waar de schade was, totaal niet meer zichtbaar. Ik kreeg een lift naar Station Sloterdijk bij het inleveren en werd ook weer van station op gehaald voor het afhalen van de auto.
          Heerlike cappucino machine beschikbaar.
          Ik zou echt iedereen dit garage aanraden :-)
          Jongens zijn echte vakmensen :-)

          Je kan er ook snel terecht, kon de volgende dag al mijn auto brengen :-)
        </p>
        <span class="author">Hakim Chaara</span>
      </div>
      <div class="review-card">
        <h3>Geweldig vakmanschap en uitstekende klantenservice!</h3>
        <p>
          Fantastisch bedrijf! Deukje opgelopen en ik kon de volgende dag al terecht en binnen 24u weer als nieuw, en niets meer van te zien! Zoek je een betrouwbaar bedrijf ga dan zeker hier naar toe!
        </p>
        <span class="author">Michel Maas</span>
      </div>
      <div class="review-card">
        <h3>Snelle en betrouwbare service!</h3>
        <p>
          Toen mijn auto niet meer wilde starten, heb ik deze garage gebeld. Ze
          hebben me snel geholpen en alles perfect gerepareerd. De communicatie
          was duidelijk, en ik ben enorm tevreden over het resultaat. Echt een
          aanrader voor iedereen die op zoek is naar kwaliteit en betrouwbaarheid.
        </p>
        <span class="author">Sanne Jansen</span>
      </div>
    </div>
    <button class="more-info-button"><a href="https://www.google.com/search?client=firefox-b-d&sca_esv=66d5537c3a7e698d&tbm=lcl&sxsrf=ADLYWIJ7Ap0FOGlWsxYF2zdNakjPlkishA:1735766660687&q=Fix+Car+Westpoort+B.V+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLEwN7UwNDa2tDQxMDAxNLI0M93AyPiKUdYts0LBObFIITy1uKQgP7-oRMFJL0whKLUsM7W8eBErfnkAXJiuHVsAAAA&rldimm=14875813399400412965&hl=nl-NL&sa=X&ved=2ahUKEwiWpOTZutWKAxWE_7sIHU7hJ68Q9fQKegQILhAF&biw=1470&bih=807&dpr=2#lkt=LocalPoiReviews">Meer info</a></button>
  </div>
</template>

<style scoped>
.reviews-container {
  margin-top: 100px;
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Metrophobic', sans-serif;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.reviews {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.review-card {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 300px;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.review-card h3 {
  font-size: 1.2rem;
  color: #d9d9d9;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.1); /* Donkere schaduw voor diepte */

}

.review-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
}

.author {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
}

.more-info-button {
  margin-top: 2rem;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 20px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.75); /* Schaduw toegevoegd */
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.more-info-button:hover {
  background-color: #81BDFFFF;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Sterkere schaduw bij hover */
}

</style>
