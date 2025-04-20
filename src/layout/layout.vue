<!-- src/components/Layout.vue -->
<template>
    <div class="layout">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from './Sidebar.vue';
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #f0f0f0;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
  }
  </style>