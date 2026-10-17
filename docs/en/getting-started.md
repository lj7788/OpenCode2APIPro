## 🎉 Special Contribution: npm Global Install & User-Level Config

The project now supports installing globally via npm and reading user-level config from `~/.config/opencode2api/config.json`.

### npm global install (available after publish)

> Note: `opencode-api-pro` is not published yet. The command below will work once published. We've pre-configured `package.json` with `bin`, `files`, `publishConfig`, etc., so it's ready to publish.

```bash
npm i -g opencode-api-pro
# Run after install
opencode-api-pro
```

User-level config:
```bash
mkdir -p ~/.config/opencode2api
cp config.json.example ~/.config/opencode2api/config.json
```

Config precedence: `OPENCODE2API_CONFIG` (env) > `./config.json` (cwd) > `~/.config/opencode2api/config.json` (XDG-aware) > package `config.json`.

# 🚀 Getting Started

## 📋 Requirements

- **Docker**: Docker 20.10+ and Docker Compose
- **Local Node**: Node.js 18+, plus OpenCode CLI

## 🏁 Docker Deploy (Recommended)

```bash
git clone https://github.com/TiaraBasori/opencode2api.git
cd opencode2api
cp .env.example .env        # Edit .env, API_KEY and OPENCODE_SERVER_PASSWORD are required
docker compose up -d
```

## 💻 Local Node Deploy

```bash
# Install OpenCode CLI
npm install -g opencode-ai@1.19.0
# Or curl -fsSL https://opencode.ai/install | bash

git clone https://github.com/TiaraBasori/opencode2api.git
cd opencode2api
npm install
cp config.json.example config.json
npm start
```

## ✅ Verify

```bash
# Health check
curl http://127.0.0.1:10000/health

# List models
curl -H "Authorization: Bearer $API_KEY" http://127.0.0.1:10000/v1/models
```

## 💡 Quick Test

```bash
curl -X POST http://127.0.0.1:10000/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "opencode/big-pickle",
    "messages": [{"role": "user", "content": "hi"}],
    "stream": false
  }'
```

## ➡️ Next Steps

- ⚙️ [Configuration](./configuration.md) — All options
- 🐳 [Docker Deployment](./docker.md) — Docker details
