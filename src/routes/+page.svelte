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
        // If the input is not empty, add a separator before concatenating the new prompt
        if (gpt2Input.trim() !== "") {
            gpt2Input += " ";
        }

        // Concatenate the new prompt and additional question
        gpt2Input += `${prompt} What are the things I should do to feel better?`;

        runGpt2(); // Trigger runGpt2 after setting the input
    };

</script>



<style>
    .output-container {
        padding: 20px;
        border-radius: 5px;
        height: auto;
        overflow: auto;
        white-space: pre-wrap;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

<div class="flex flex-col items-center justify-center gap-2 px-4 sm:px-6 lg:px-8">
    <div class="output-container w-full md:w-1/2 ">
        <p class="text-white text-md">{gpt2Output}</p>
    </div>

    <input class="text-white rounded-xl w-full md:w-80 h-12 bg-gradient-to-b from-slate-900 to-slate-700 p-3 text-center" type="text" bind:value={gpt2Input} placeholder="How are you feeling today?">

    <div class="flex flex-wrap gap-2 mt-3 justify-center">
        {#each recommendedPrompts as prompt (prompt)}
            <button class="bg-gradient-to-b from-slate-900 to-slate-700 px-3 py-2 rounded-md font-semibold" on:click={() => setAndRunRecommendedPrompt(prompt)}>{prompt}</button>
        {/each}
    </div>

    <button class="bg-gradient-to-b from-blue-800 to-blue-600 px-3 py-2 rounded-md font-semibold text-white m-3" on:click={runGpt2}>Send</button>
</div>
