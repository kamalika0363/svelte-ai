<script>
    import { onMount } from 'svelte';

    let title = "WHAT'S YOUR MOOD TODAY?";
    let typedTitle = "";

    onMount(() => {
        function typeWriter(text, index, callback) {
            if (index < text.length) {
                typedTitle += text.charAt(index);
                index++;
                setTimeout(() => typeWriter(text, index, callback), 100);
            } else {
                callback();
            }
        }

        typeWriter(title, 0, () => {});
    });

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
    .gradient-background {
        background: radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(2, 72, 78, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
    }

    .gallery-item {
        transition: transform 0.3s ease-out;
    }

    .gallery-item:hover {
        transform: scale(1.1);
    }

    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 200px;
        perspective: 1000px;
        margin: 10px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flip-card-front {
        background-color: #bbb;
        color: black;
    }

    .flip-card-back {
        background-color: #000000;
        color: white;
        transform: rotateY(180deg);
        width: 220px;
        height: 200px;
        border-radius: 8px;
    }
</style>

<div class="flex flex-col md:flex-row gap-8 md:gap-24 px-4 md:px-8 lg:px-16 py-8 md:py-16 items-center md:items-start">
    <div class="text-center md:text-left w-full md:w-96">
        <p class="text-gray-100 font-bold mb-4 text-xl md:text-4xl lg:text-5xl xl:text-6xl">{typedTitle}</p>
    </div>
    <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {#each images as { alt, src }}
                <div class="flip-card p-8">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img class="rounded-lg" alt={alt} src={src} />
                        </div>
                        <div class="flip-card-back bg-gradient-to-b from-slate-900 to-slate-700">
                            <p>{alt}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
