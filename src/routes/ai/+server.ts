// import { onMount } from 'svelte';
// import { HfInference } from "@huggingface/inference";
//
// let HF_TOKEN = "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"; // Replace with your token
// let inference: HfInference;
//
// let gpt2Input = "";
// let gpt2Output = "";
//
// onMount(async () => {
//     inference = new HfInference(HF_TOKEN);
//
// });
//
// const runGpt2 = async () => {
//     try {
//         const gpt2 = await inference.endpoint("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct");
//         const response = await gpt2.textGeneration({ inputs: gpt2Input });
//         gpt2Output = response.generated_text;
//     } catch (error) {
//         console.error(error);
//         gpt2Output = `Error: ${error}`;
//     }
// };
