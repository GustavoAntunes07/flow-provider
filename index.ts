import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("ciandt-flow", {
    baseUrl: "https://flow.ciandt.com/flow-llm-proxy",
    apiKey: "jwt-token", // The API key is expected to be a JWT token for authentication with the CI&T Flow LLM Proxy.
    models: [
  // ─── Anthropic ───────────────────────────────────────────
  {
    id: "anthropic.claude-4-sonnet",
    name: "Claude 4 Sonnet (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 16000,
  },
  {
    id: "anthropic.claude-4-5-sonnet",
    name: "Claude 4.5 Sonnet (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 16000,
  },
  {
    id: "anthropic.claude-4-6-sonnet",
    name: "Claude Sonnet 4.6 (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 16000,
  },

  // ─── OpenAI ──────────────────────────────────────────────
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 16384,
  },
  {
    id: "gpt-4.1",
    name: "GPT-4.1 (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1000000,
    maxTokens: 32768,
  },
  {
    id: "gpt-5",
    name: "GPT-5 (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1000000,
    maxTokens: 32768,
  },
  {
    id: "gpt-5-mini",
    name: "GPT-5 Mini (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 16384,
  },
  {
    id: "gpt-5-nano",
    name: "GPT-5 Nano (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 8192,
  },

  // ─── OpenAI Reasoning ────────────────────────────────────
  {
    id: "o1",
    name: "GPT-o1 (CI&T - Flow)",
    reasoning: true,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 100000,
  },
  {
    id: "o3-mini",
    name: "GPT-o3 Mini (CI&T - Flow)",
    reasoning: true,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 100000,
  },

  // ─── Google ──────────────────────────────────────────────
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash (CI&T - Flow)",
    reasoning: true,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1000000,
    maxTokens: 65536,
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro (CI&T - Flow)",
    reasoning: true,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1000000,
    maxTokens: 65536,
  },

  // ─── xAI ─────────────────────────────────────────────────
  {
    id: "grok-3",
    name: "Grok 3 (CI&T - Flow)",
    reasoning: false,
    input: ["text", "image"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 131072,
    maxTokens: 16384,
  },
    ],
  });
}