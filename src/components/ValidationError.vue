<script setup>
import { defineProps } from 'vue';
const props = defineProps(["errors", "field"]);
</script>

<template>
    <span v-if="props?.errors?.value?.[props.field]?.length">
        <div v-for="message in props.errors.value[props.field]" :key="message" class="text-danger">
            {{ message }}
        </div>
    </span>
</template>