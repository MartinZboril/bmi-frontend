<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useProfile } from "@/stores/profile";
 
const store = useProfile();
 
onMounted(store.fetchProfile);
onBeforeUnmount(store.resetForm);
</script>

<template>
    <h3 class="text-center">Edit Profile</h3>
    <div class="alert alert-success alert-dismissible mb-4" v-show="store.status">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        {{ store.status }}
    </div>
    <form @submit.prevent="store.updateProfile" novalidate>
        <div class="mb-3 mt-3 required">
            <label for="name" class="form-label control-label">Name</label>
            <input v-model="store.form.name" type="name" class="form-control" id="name" placeholder="Enter name" name="name" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="name" />
        </div>  
        <div class="mb-3 required">
            <label for="email" class="form-label control-label">Email</label>
            <input v-model="store.form.email" type="email" class="form-control" id="email" placeholder="Enter email" name="email" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="email" />
        </div>                      
        <hr>
        <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-block" :disabled="store.loading">
                <IconSpinner v-show="store.loading" />
                Update profile
            </button>
        </div>
    </form>
</template>