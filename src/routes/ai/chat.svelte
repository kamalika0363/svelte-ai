<!--<script lang="ts">-->
<!--    import { onMount } from 'svelte';-->
<!--    import { HfInference } from "@huggingface/inference";-->

<!--    let HF_TOKEN = "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"; // Replace with your token-->
<!--    let inference: HfInference;-->


<!--    let gpt2Input = "";-->
<!--    let gpt2Output = "";-->

<!--    onMount(async () => {-->
<!--        inference = new HfInference(HF_TOKEN);-->
<!--    });-->


<!--    const runGpt2 = async () => {-->
<!--        try {-->
<!--            const gpt2 = await inference.endpoint("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct");-->
<!--            const response = await gpt2.textGeneration({ inputs: gpt2Input });-->
<!--            gpt2Output = response.generated_text;-->
<!--        } catch (error) {-->
<!--            console.error(error);-->
<!--            gpt2Output = `Error: ${error}`;-->
<!--        }-->
<!--    };-->


<!--</script>-->

<!--<style>-->
<!--    .output {-->
<!--        color: #fff;-->
<!--        padding: 20px;-->
<!--        border-radius: 5px;-->
<!--        height: auto;-->
<!--        overflow: auto;-->
<!--        white-space: pre-wrap;-->
<!--        font-family: 'Courier New', Courier, monospace;-->
<!--    }-->
<!--</style>-->

<!--<div class="flex flex-col items-center justify-center gap-2">-->
<!--    <h2>Hugging Face Inference</h2>-->
<!--    <div class="output md:w-[50%]">{gpt2Output}</div>-->
<!--    <input class="text-white rounded-xl w-80 h-12 bg-slate-900 p-5" type="text" bind:value={gpt2Input} placeholder="Enter prompt for GPT-2 model">-->
<!--    <button class="bg-gray-800 px-3 py-2 rounded-md font-semibold" on:click={runGpt2}>send</button>-->
<!--</div>-->



