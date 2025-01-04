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
  <div id="services">
    <h1>SERVICES</h1>
    <div class="services-container">
      <div class="service-card">
        <h2>Auto Herstel</h2>
        <p>Uitgebreid onderhoud en reparatie voor alle soorten auto's, van kleine schade tot volledige restauratie.</p>
      </div>
      <div class="service-card">
        <h2>Truck Herstel</h2>
        <p>Specialistische zorg voor vrachtwagens van elke maat, inclusief structurele en mechanische reparaties.</p>
      </div>

      <div class="service-card">
        <h2>Schade herstel</h2>
        <p>Snelle en efficiënte reparatie van autoschade, van kleine deuken tot grote schadegevallen.</p>
      </div>
    </div>

    <div class="services-container">
      <div class="service-card">
        <h2>Uitdeuken</h2>
        <p>Vakkundig uitdeuken van autoschade zonder de lak te beschadigen, voor een perfect resultaat.</p>
      </div>
      <div class="service-card">
        <h2>Spuiten</h2>
        <p>Professionele spuitwerkzaamheden voor uw voertuig, inclusief kleurmatching en lakherstel.</p>
      </div>
      <div class="service-card">
        <h2>Glas Reparatie/Herstel</h2>
        <p>Snelle en betrouwbare glasreparaties voor alle soorten ruiten en autoramen.</p>
      </div>
    </div>

    <div class="services-container">
      <div class="service-card">
        <h2>Herstellen van kunststof onderdelen</h2>
        <p>Reparatie van beschadigde kunststof onderdelen, inclusief bumpers, spiegels en meer.</p>
      </div>
      <div class="service-card">
        <h2>Technische reparaties</h2>
        <p>Onderhoud en reparatie van alle technische systemen van uw voertuig, van motoren tot remmen.</p>
      </div>
      <div class="service-card">
        <h2>Auto onderhoud</h2>
        <p>
          Professioneel auto-onderhoud voor het waarborgen van de veiligheid en prestaties van uw voertuig.
          Inclusief olieverversing, controle van remmen, luchtfilters, bandeninspectie, en algemene voertuigcontrole.
        </p>
      </div>

    </div>

    <p id="contact-us">En nog veel meer! Neem contact met ons op voor al uw voertuigbehoeften.</p>

  </div>

  <div id="button-container">
    <button id="button" @click="sendWhatsAppMessage">Neem contact op!</button>
  </div>

</template>

<style scoped>
#services {
  margin-top: 100px;
  text-align: center;
  font-family: 'Metrophobic', sans-serif;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.services-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;
}

.service-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

.service-card img {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.service-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.service-card p {
  font-size: 1rem;
  color: #555;
}

#contact-us {
  font-size: 1.2rem;
  color: #333;
  margin-top: 2rem;
}

#button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

#button {
  background-color: #d9d9d9;
  color: #000000;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.75);
}

#button:hover {
  background-color: #81BDFFFF;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .service-card {
    width: 270px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .services-container {
    padding: 0 1rem;
  }

  .service-card {
    width: 250px;
  }

  #contact-us {
    font-size: 1.1rem;
  }

  #button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  .services-container {
    padding: 0 0.5rem;
  }

  .service-card {
    width: 100%;
    margin: 1rem 0;
  }

  #contact-us {
    font-size: 1rem;
  }

  #button {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
