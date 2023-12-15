<script>
    import { onMount } from 'svelte';

    let title = "WHAT'S YOUR MOOD TODAY?";
    let typedTitle = "";

    onMount(() => {
        // Function to simulate typewriter effect
        function typeWriter(text, index, callback) {
            if (index < text.length) {
                typedTitle += text.charAt(index);
                index++;
                setTimeout(() => typeWriter(text, index, callback), 100);
            } else {
                callback(); // Optional callback function to execute after typing
            }
        }

        // Start typing when the component mounts
        typeWriter(title, 0, () => {
            // Optional: Callback function to execute after typing is complete
        });
    });
    import { Gallery } from 'flowbite-svelte';
    import { flip } from 'svelte/animate';
    import cry from '$lib/images/mood1.png';
    import sad from '$lib/images/mood2.png';
    import confused from '$lib/images/mood3.png';
    import exhausted from '$lib/images/mood4.png';

    const images = [
        { alt: 'cry', src: cry },
        { alt: 'sadge', src: sad },
        { alt: 'bleh', src: confused },
        { alt: 'ahh', src: exhausted }
    ];


</script>

<style>
    /*.gradient-background {*/
    /*    background: radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(2, 72, 78, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);*/
    /*}*/

    .gallery-item {
        transition: transform 0.3s ease-out;
    }

    .gallery-item:hover {
        transform: scale(1.1);
    }
</style>

<div class="flex flex-col md:flex-row gap-8 md:gap-24 px-4 md:px-8 lg:px-16 py-8 md:py-16 items-center md:items-start gradient-background">
    <div class="text-center md:text-left w-full md:w-96">
        <p class="text-gray-100 font-bold mb-4 text-xl md:text-4xl lg:text-5xl xl:text-6xl">{typedTitle}</p>
    </div>
    <div class="w-full md:w-3/4">
        <!-- Your gallery component remains unchanged -->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {#each images as { alt, src }}
                <img class="gallery-item rounded-lg" alt={alt} src={src} />
            {/each}
        </div>
    </div>
</div>
