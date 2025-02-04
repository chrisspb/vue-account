<template>
  <AccountLayout>
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
  </AccountLayout>
</template>

<script setup>
import { ref } from 'vue'
import AccountLayout from '../layouts/AccountLayout.vue'

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
  console.log('Toggle 2FA:', securityInfo.value.twoFactorEnabled)
}

const updateSecurityQuestions = () => {
  console.log('Update security questions')
}

const changePassword = () => {
  console.log('Change password')
}
</script>

<style scoped>
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