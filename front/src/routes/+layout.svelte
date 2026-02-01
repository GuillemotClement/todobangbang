<script lang="ts">
import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
import "../styles/app.css";
let { children } = $props();
</script>

<Header />

<main class="">
  {@render children()}
</main>

<Footer />

<style>

</style>