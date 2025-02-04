<template>
  <div class="account-container">
    <!-- Menu latéral -->
    <div class="sidebar">
      <h2>Mon compte</h2>
      <nav>
        <ul>
          <li class="active">
            <router-link to="/mon-compte">Informations personnelles</router-link>
          </li>
          <li>
            <router-link to="/security">Sécurité</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Contenu principal -->
    <div class="main-content">
      <div class="user-status">
        <i class="fas fa-user-circle"></i>
        <span>Compte utilisateur activé</span>
      </div>

      <div class="user-info">
        <div class="info-row">
          <label>Nom</label>
          <span>{{ userInfo.nom }}</span>
        </div>
        <div class="info-row">
          <label>Prénom</label>
          <span>{{ userInfo.prenom }}</span>
        </div>
        <div class="info-row">
          <label>E-mail ou Identifiant</label>
          <span>{{ userInfo.email }}</span>
        </div>
        <div class="info-row">
          <label>Email</label>
          <span>{{ userInfo.email }}</span>
        </div>
        <div class="info-row">
          <label>Société</label>
          <span>{{ userInfo.societe }}</span>
        </div>
        <div class="info-row">
          <label>Fonction</label>
          <span>{{ userInfo.fonction }}</span>
        </div>
        <div class="info-row">
          <label>Téléphone</label>
          <span>{{ userInfo.telephone }}</span>
        </div>
        <div class="info-row">
          <label>Langage</label>
          <select v-model="userInfo.langage">
            <option value="Francais">Français</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>

      <div class="dates-info">
        <p>Date de création: {{ userInfo.dateCreation }}</p>
        <p>Date d'expiration: {{ userInfo.dateExpiration }}</p>
      </div>

      <div class="recent-connections">
        <h3>Dernières connexions :</h3>
        <ul>
          <li v-for="(date, index) in userInfo.dernieresConnexions" 
              :key="index">{{ date }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInfo = ref({
  nom: 'Wallerand',
  prenom: 'Nicolas',
  email: 'nicolas.wallerand@preventeo.com',
  societe: 'Preventeo',
  fonction: 'Comité technique',
  telephone: '0698901849',
  langage: 'Francais',
  dateCreation: '28/04/2023 15:55',
  dateExpiration: '01/01/2100 00:00',
  dernieresConnexions: [
    '29/01/2025 10:52',
    '28/01/2025 14:31',
    '28/01/2025 11:33',
    '27/01/2025 15:54',
    '24/01/2025 15:28'
  ]
})
</script>

<style scoped>
.account-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f5f6fa;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  border-radius: 4px;
}

.sidebar li.active {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.sidebar a {
  text-decoration: none;
  color: inherit;
}

.main-content {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.user-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #2e7d32;
}

.info-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-bottom: 1rem;
  align-items: center;
}

.info-row label {
  color: #666;
  font-weight: 500;
}

select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.dates-info {
  margin: 2rem 0;
  color: #666;
}

.recent-connections {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.recent-connections h3 {
  color: #333;
  margin-bottom: 1rem;
}

.recent-connections ul {
  list-style: none;
  padding: 0;
}

.recent-connections li {
  padding: 0.5rem 0;
  color: #666;
}

.router-link-active {
  color: #1a73e8;
  font-weight: 500;
}
</style>