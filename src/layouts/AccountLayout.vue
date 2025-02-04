<template>
  <div class="account-container">
    <!-- Menu latéral -->
    <div class="sidebar">
      <h2>Mon compte</h2>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/mon-compte' }">
            <router-link to="/mon-compte">Informations personnelles</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/security' }">
            <router-link to="/security">Sécurité</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Contenu principal -->
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

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

.router-link-active {
  color: #1a73e8;
  font-weight: 500;
}
</style>