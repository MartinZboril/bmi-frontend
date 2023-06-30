<script setup>
import { onBeforeUnmount } from "vue";
import { useLogin } from "@/stores/login";
 
const store = useLogin();
 
onBeforeUnmount(store.resetForm);
</script>

<template>
    <h3 class="text-center">Login</h3>
    <form @submit.prevent="store.handleSubmit" novalidate>
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
        <div class="form-check mb-3">
            <label class="form-check-label">
            <input v-model="store.form.remember" class="form-check-input" type="checkbox" name="remember" :disabled="store.loading"> Remember me
            </label>
        </div>                          
        <hr>
        <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-block" :disabled="store.loading">
                <IconSpinner v-show="store.loading" />
                Login
            </button>
        </div>
    </form>
</template>