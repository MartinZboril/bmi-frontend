<script setup>
import { onBeforeMount } from 'vue';
import { useRegister } from '@/stores/register';

const store = useRegister();

onBeforeMount(store.resetForm);
</script>

<template>
    <h3 class="text-center">Register</h3>
    <form @submit.prevent="store.handleSubmit" novalidate>
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
        <div class="mb-3 required">
            <label for="password" class="form-label control-label">Password</label>
            <input v-model="store.form.password" type="password" class="form-control" id="password" placeholder="Enter password" name="password" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="password" />
        </div>
        <div class="mb-3 required">
            <label for="password-confirmation" class="form-label control-label">Confirm Password</label>
            <input v-model="store.form.password_confirmation" type="password" class="form-control" id="password-confirmation" placeholder="Enter password confirmation" name="password_confirmation" :disabled="store.loading">
        </div>                      
        <hr>
        <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-block" :disabled="store.loading">
                <IconSpinner v-show="store.loading" />
                Register
            </button>
        </div>
    </form>
</template>