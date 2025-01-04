<template>
  <body>
  <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">
      <RouterLink to="/"><img src="../assets/img/logo.png" alt=""></RouterLink>
    </label>
    <ul>
      <!-- Verander de RouterLink naar een button die scrollt -->
      <li>
        <RouterLink to="/service" class="nav-link">service</RouterLink>
      </li>
      <li><RouterLink to="/Contact">contact</RouterLink></li>

      <button class="cta-button" @click="sendWhatsAppMessage">Maak een afspraak!</button>
    </ul>
  </nav>
  </body>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  setup() {
    // Functie om WhatsApp-bericht te verzenden
    const sendWhatsAppMessage = () => {
      const phoneNumber = "31624240318"; // Vervang dit door jouw telefoonnummer
      const message = encodeURIComponent("Hallo, ik heb interesse in uw diensten!"); // Bericht
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(url, "_blank");
    };

    // Logica voor het tonen/verbergen van de navbar
    let lastScrollY = 0; // Houdt de laatste scrollpositie bij
    let navBar = null;

    const handleScroll = () => {
      if (!navBar) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Verberg de navbar bij scrollen naar beneden
        navBar.style.transform = 'translateY(-100%)';
      } else {
        // Toon de navbar bij scrollen naar boven
        navBar.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    };

    onMounted(() => {
      navBar = document.querySelector('nav'); // Selecteer de navbar
      window.addEventListener('scroll', handleScroll); // Voeg scroll-eventlistener toe
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll); // Verwijder eventlistener
    });

    // Scroll functie om naar de 'service' sectie te gaan
    const scrollToService = () => {
      const serviceSection = document.getElementById('service');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      sendWhatsAppMessage,
      scrollToService,
    };
  },
});
</script>

<style scoped>

i {
  margin-left: -30px;
}

.cta-button {
  background-color: #d9d9d9;
  color: #000000;
  padding: .5rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.75); /* Schaduw toegevoegd */
}

.cta-button:hover {
  background-color: #81bdff;
  transition: 0.2s;
}

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}

body {
  font-family: 'Metrophobic', sans-serif;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
}

nav {
  background-color: rgb(255, 255, 255);
  height: 120px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transform: translateY(0); /* Beginpositie van de navbar */
  transition: transform 0.3s ease-in-out; /* Soepele overgang */
}


label.logo {
  line-height: 80px;
  padding: 0 100px;
}

nav ul {
  float: right;
  margin: 20px;
  margin-right: 100px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 31px;
}

nav ul li a,
nav ul li button { /* Voeg de button stijl toe */
  color: #000000;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  border: none;
}

a.active, a:hover, button:hover {
  color: #2c3e50;
  transition: 0.5s;
}

.checkbtn {
  font-size: 30px;
  color: #000000;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  margin-top: 20px;
  cursor: pointer;
  display: none;
}

img {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 280px;
}

#check {
  display: none;
}

/* Media queries */
@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }

  ul {
    position: absolute; /* Positioneer ten opzichte van de navbar */
    top: 100%; /* Direct onder de navbar */
    left: 0;
    width: 100%;
    height: auto; /* Pas de hoogte aan op basis van de inhoud */
    background: #ffffff;
    transition: all 0.5s; /* Smooth transition */
    border-bottom-left-radius: 0%; /* Afronden van linkeronderhoek */
    border-bottom-right-radius: 0%; /* Afronden van rechteronderhoek */
    overflow: hidden; /* Zorg ervoor dat inhoud netjes blijft */
    visibility: hidden; /* Verberg standaard */
    opacity: 0; /* Onzichtbaar standaard */
    margin-left: 0 !important;
    padding-bottom: 20px !important;
  }

  #check:checked ~ ul {
    visibility: visible; /* Toon het menu als de checkbox is aangevinkt */
    opacity: 1; /* Maak het zichtbaar */
  }


  nav ul li {
    display: block;
    margin: 40px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
    text-shadow: 2px 2px 4px rgb(0, 0, 0); /* Donkere schaduw voor diepte */
  }

  a:hover, a.active {
    background: none;
    color: #005fa3;
  }

  #check:checked ~ ul {
    top: 80px; /* Schuift naar beneden net onder de navbar */
  }

  img {
    width: 190px;
    margin-top: 40px !important;
    margin-left: -45px;
  }


}
</style>
