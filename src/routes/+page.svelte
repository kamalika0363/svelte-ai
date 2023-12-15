<script lang="ts">
    import { onMount } from 'svelte';
    import { HfInference } from "@huggingface/inference";

    let HF_TOKEN=import.meta.env.HF_TOKEN; // Replace with your token
    let inference: HfInference;

    let gpt2Input = "";
    let gpt2Output = "";

    // Add an array of recommended prompts
    let recommendedPrompts = [
        "I'm feeling a little low today",
        "Feeling a little tired today",
        "I didn't sleep well last night",
        "I'm feeling a little anxious today",
        // Add more prompts as needed
    ];

    onMount(async () => {
        inference = new HfInference(HF_TOKEN);
    });

    const runGpt2 = async () => {
        try {
            const gpt2 = await inference.endpoint('https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct');
            const response = await gpt2.textGeneration({ inputs: gpt2Input });
            gpt2Output = response.generated_text;
        } catch (error) {
            console.error(error);
            gpt2Output = `Error: ${error}`;
        }
    };

    // Function to set the input with a recommended prompt and trigger runGpt2
    const setAndRunRecommendedPrompt = (prompt: string) => {
        gpt2Input = prompt;
        runGpt2(); // Trigger runGpt2 after setting the input
    };

</script>

<style>
    .output {
        color: #fff;
        padding: 20px;
        border-radius: 5px;
        height: auto;
        overflow: auto;
        white-space: pre-wrap;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

<div class="flex flex-col items-center justify-center gap-2">
    <div class="output md:w-[50%]">{gpt2Output}</div>
    <input class="text-white rounded-xl w-80 h-12 bg-slate-900 p-5" type="text" bind:value={gpt2Input} placeholder="Enter prompt for GPT-2 model">

    <!-- Display recommended prompts as buttons -->
    <div class="flex gap-2 mt-3">
        {#each recommendedPrompts as prompt (prompt)}
            <button class="bg-gray-800 px-3 py-2 rounded-md font-semibold" on:click={() => setAndRunRecommendedPrompt(prompt)}>{prompt}</button>
        {/each}
    </div>

    <button class="bg-gray-800 px-3 py-2 rounded-md font-semibold" on:click={runGpt2}>Send</button>
</div>
