<script>
    import Header from './Header.svelte';
    import '../app.css';
    import Hero from "./Hero.svelte";
</script>

<div class="font-mono">
    <Header />
    <main>
        <Hero />
        <slot />
    </main>

</div>

