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

Open or create `~/.pi/agent/settings.json` and add your JWT under `env`:

```json
{
  "env": {
    "FLOW_JWT_TOKEN": "your-jwt-here"
  }
}
```

> ⚠️ **Never share or commit your JWT.** It contains your personal Flow credentials.

> **Note for Windows users:** The pi agent may not inject `env` variables from `settings.json` into extensions automatically. The extension handles this by reading `settings.json` directly, so the setup above works on all platforms.

### 4. Run pi

```bash
pi
```

Type `/model`, search for **Flow**, select a model and you're good to go.

## Available models

> **Note:** Model availability depends on your Flow API key tenant. The table below reflects models tested on the `centaurus` tenant. If a model appears in `/model` but returns a 403 error, it is not available for your tenant. The models: Opus 4.7 and 4.5 are listed in the Flow proxy, but not available in the centaurus tenant.

| Model                         | Provider  |
| ----------------------------- | --------- |
| anthropic.claude-4-7-opus     | Anthropic |
| anthropic.claude-4-6-opus     | Anthropic |
| anthropic.claude-4-5-opus     | Anthropic |
| anthropic.claude-4-6-sonnet   | Anthropic |
| anthropic.claude-4-5-sonnet   | Anthropic |
| anthropic.claude-4-5-haiku    | Anthropic |
| gpt-5-2                       | OpenAI    |
| gpt-5-1                       | OpenAI    |
| gpt-5                         | OpenAI    |
| gpt-5-mini                    | OpenAI    |
| gpt-5-nano                    | OpenAI    |
| gpt-4.1                       | OpenAI    |
| gpt-4o-mini                   | OpenAI    |
| o1                            | OpenAI    |
| o3-mini                       | OpenAI    |
| gemini-3.1-pro                | Google    |
| gemini-2.5-pro                | Google    |
| gemini-2.5-flash              | Google    |
| gemini-2.0-flash              | Google    |

## Troubleshooting

**Model not appearing in `/model`:** Make sure the extension folder is inside `~/.pi/agent/extensions/` and that you restarted pi after cloning.

**403 error:** Your JWT may be expired or malformed. Regenerate it at [jwt.io](https://jwt.io). If the JWT is valid, the model may not be available for your tenant.

**500 error:** Make sure `FLOW_JWT_TOKEN` is correctly set in `~/.pi/agent/settings.json` and that the JWT payload has exactly `clientId`, `clientSecret`, and `tenant`.
