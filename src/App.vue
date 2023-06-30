<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuth } from "@/stores/auth";

const auth = useAuth();
</script>
 
<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">        
            <template v-if="auth.check">
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'bmi.index' }">
                  BMI
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'profile.edit' }">
                  Profile
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'profile.change-password' }">
                  Change password
                </RouterLink>
              </li>
              <li class="nav-item">
                <a href="#" @click="auth.logout" class="nav-link">Logout</a>                
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'home' }">
                  Home
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'register'}">
                  Register
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'login'}">
                  Login
                </RouterLink>
              </li>
            </template>              
          </ul>
        </div>
      </nav>      
      <nav>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>