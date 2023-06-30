<script setup>
import { onBeforeUnmount } from "vue";
import { useChangePassword } from "@/stores/changePassword";
 
const store = useChangePassword();
 
onBeforeUnmount(store.resetForm);
</script>

<template>
    <h3 class="text-center">Change Password</h3>
    <div class="alert alert-success alert-dismissible mb-4" v-show="store.status">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        {{ store.status }}
    </div>
    <form @submit.prevent="store.updatePassword" novalidate> 
        <div class="mt-3 mb-3 required">
            <label for="current-password" class="form-label control-label">Current Password</label>
            <input v-model="store.form.current_password" type="password" class="form-control" id="current-password" placeholder="Enter current password" name="current_password" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="current_password" />
        </div>
        <div class="mb-3 required">
            <label for="password" class="form-label control-label">New Password</label>
            <input v-model="store.form.password" type="password" class="form-control" id="password" placeholder="Enter new password" name="password" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="password" />
        </div>
        <div class="mb-3 required">
            <label for="password-confirmation" class="form-label control-label">Confirm New Password</label>
            <input v-model="store.form.password_confirmation" type="password" class="form-control" id="password-confirmation" placeholder="Enter new password confirmation" name="password_confirmation" :disabled="store.loading">
            <ValidationError :errors="store.errors" field="password_confirmation" />
        </div>                      
        <hr>
        <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-block" :disabled="store.loading">
                <IconSpinner v-show="store.loading" />
                Update password
            </button>
        </div>
    </form>    
</template>