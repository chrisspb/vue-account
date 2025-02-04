# MonCompte.vue -->
<template>
  <div class="account-container">
    <!-- Menu latéral -->
    <div class="sidebar">
      <h2>Mon compte</h2>
      <nav>
        <ul>
          <li>
            <router-link to="/mon-compte">Informations personnelles</router-link>
          </li>
          <li class="active">
            <router-link to="/security">Sécurité</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Contenu principal -->
    <div class="main-content">
      <div class="user-status">
        <i class="fas fa-shield-alt"></i>
        <span>Paramètres de sécurité</span>
      </div>

      <div class="security-info">
        <div class="info-row">
          <label>Dernier changement de mot de passe</label>
          <span>{{ securityInfo.lastPasswordChange }}</span>
        </div>
        <div class="info-row">
          <label>Authentification à deux facteurs</label>
          <div class="toggle-container">
            <input 
              type="checkbox" 
              v-model="securityInfo.twoFactorEnabled"
              @change="toggleTwoFactor"
            >
            <span>{{ securityInfo.twoFactorEnabled ? 'Activée' : 'Désactivée' }}</span>
          </div>
        </div>
        <div class="info-row">
          <label>Questions de sécurité</label>
          <button @click="updateSecurityQuestions" class="action-button">
            Modifier les questions
          </button>
        </div>
        <div class="info-row">
          <label>Mot de passe</label>
          <button @click="changePassword" class="action-button">
            Changer le mot de passe
          </button>
        </div>
      </div>

      <div class="recent-connections">
        <h3>Tentatives de connexion récentes</h3>
        <ul>
          <li v-for="(attempt, index) in securityInfo.connectionAttempts" 
              :key="index"
              :class="{ 'failed': !attempt.success }">
            <i :class="attempt.success ? 'fas fa-check success' : 'fas fa-times failed'"></i>
            <span class="date">{{ attempt.date }}</span>
            <span class="ip">{{ attempt.ip }}</span>
            <span class="location">{{ attempt.location }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const securityInfo = ref({
  lastPasswordChange: '15/01/2025',
  twoFactorEnabled: true,
  connectionAttempts: [
    {
      date: '29/01/2025 10:52',
      ip: '192.168.1.1',
      location: 'Paris, France',
      success: true
    },
    {
      date: '28/01/2025 14:31',
      ip: '192.168.1.100',
      location: 'Lyon, France',
      success: false
    },
    {
      date: '28/01/2025 11:33',
      ip: '192.168.1.1',
      location: 'Paris, France',
      success: true
    }
  ]
})

const toggleTwoFactor = () => {
  // Ici, vous ajouteriez la logique pour activer/désactiver l'authentification à deux facteurs
  console.log('Toggle 2FA:', securityInfo.value.twoFactorEnabled)
}

const updateSecurityQuestions = () => {
  // Logique pour mettre à jour les questions de sécurité
  console.log('Update security questions')
}

const changePassword = () => {
  // Logique pour changer le mot de passe
  console.log('Change password')
}
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
  color: #1a73e8;
}

.info-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-bottom: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.info-row label {
  color: #666;
  font-weight: 500;
}

.action-button {
  padding: 0.5rem 1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
}

.action-button:hover {
  background-color: #1557b0;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.recent-connections {
  margin-top: 2rem;
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
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.success {
  color: #2e7d32;
}

.failed {
  color: #d32f2f;
}

.date, .ip, .location {
  color: #666;
}

.ip {
  font-family: monospace;
}
</style>