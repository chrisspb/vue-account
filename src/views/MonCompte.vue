// Même template que précédemment, mise à jour du script setup :

<template>
  <AccountLayout>
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
  </AccountLayout>
</template>

<script setup>
import { ref } from 'vue'
import AccountLayout from '../layouts/AccountLayout.vue'

const userInfo = ref({
  nom: 'Lorem',
  prenom: 'Ipsum',
  email: 'lorem.ipsum@dolor.sit',
  societe: 'Amet Corporation',
  fonction: 'Consectetur Division',
  telephone: '0123456789',
  langage: 'Francais',
  dateCreation: '15/01/2025 10:30',
  dateExpiration: '01/01/2100 00:00',
  dernieresConnexions: [
    '01/02/2025 08:45',
    '31/01/2025 16:20',
    '30/01/2025 11:15',
    '29/01/2025 09:30',
    '28/01/2025 14:45'
  ]
})
</script>

<style scoped>
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
</style>