import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { computed } from "vue";

export const useAuth = defineStore("auth", () => {
    const router = useRouter();
    const accessToken = useStorage("access_token", "");
    const check = computed(() => !!accessToken.value);

    function setAccessToken(value) {
        accessToken.value = value;
        window.axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken.value}`;
    }

    function login(accessToken) {
        setAccessToken(accessToken);

        router.push({ name: "bmi.index" });
    }

    function destroyTokenAndRedirectTo(routeName) {
        setAccessToken(null);
        router.push({ name: routeName });
    }

    async function logout() {
        return window.axios.post("auth/logout").finally(() => {
            destroyTokenAndRedirectTo("home");
        });
    }

    return { setAccessToken, login, check, destroyTokenAndRedirectTo, logout };
})