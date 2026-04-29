# Flow Provider — Pi Extension

Extension for the [pi coding agent](https://pi.dev) to use the CI&T Flow LLM proxy.

## Prerequisites

- [Pi](https://pi.dev) installed
- Access to the [CI&T Flow platform](https://flow.ciandt.com)

## Setup

### 1. Generate your JWT token

1. Access [flow.ciandt.com](https://flow.ciandt.com), click your avatar → Settings → **API Keys**
2. Generate a new API key and save the **client ID**, **client secret**, and **tenant** — you won't be able to see them again after closing the modal
3. Go to [jwt.io](https://jwt.io) → **JWT Encoder**
4. Set the header:
```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
```
5. Set the payload (replace with your values):
```json
   {
     "clientId": "<your-client-id>",
     "clientSecret": "<your-client-secret>",
     "tenant": "<your-tenant>"
   }
```
6. Copy the generated JWT and keep it saved

### 2. Install the extension

Navigate to the pi extensions folder (create it if it doesn't exist):

```bash
mkdir -p ~/.pi/agent/extensions
cd ~/.pi/agent/extensions
```

Clone this repo:

```bash
git clone https://github.com/gustavoantunes07/flow-provider.git
```

### 3. Configure your token

```bash
cp index.example.ts index.ts
```

Open `index.ts` and replace `"jwt-token"` with your JWT:

```typescript
apiKey: "jwt-token",
```

> ⚠️ **Never commit your `index.ts`.** It contains your personal JWT and is listed in `.gitignore`.

### 4. Run pi

```bash
pi
```

Type `/model`, search for **Flow**, select a model and you're good to go.

## Available models

| Model | Provider |
|---|---|
| anthropic.claude-4-6-sonnet | Anthropic |
| anthropic.claude-4-5-sonnet | Anthropic |
| anthropic.claude-4-sonnet | Anthropic |
| gpt-4o-mini | OpenAI |
| gpt-4.1 | OpenAI |
| gpt-5 | OpenAI |
| gpt-5-mini | OpenAI |
| gpt-5-nano | OpenAI |
| gpt-o1 | OpenAI |
| gpt-o3-mini | OpenAI |
| gemini-2.5-flash | Google |
| gemini-2.5-pro | Google |
| grok-3 | xAI |

## Troubleshooting

**Model not appearing in `/model`:** Make sure the extension folder is inside `~/.pi/agent/extensions/` and that you restarted pi after cloning.

**403 error:** Your JWT may be expired or malformed. Regenerate it at [jwt.io](https://jwt.io).
