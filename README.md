# Estúdio de vídeo com IA (Remotion)

Projeto Remotion com TypeScript, no formato vertical **1080x1920, 30 fps** (Reels, TikTok, Shorts).

## Arquivos importantes

- `src/formato.ts`: tamanho e fps padrão de todos os vídeos.
- `src/Root.tsx`: lista dos vídeos (composições) do estúdio.
- `src/Teste.tsx`: vídeo de teste com a palavra "FUNCIONOU".
- `.claude/skills/`: skills oficiais do Remotion para o Claude Code.
- `scripts/instalar-whisper.mjs`: instala o whisper.cpp e o modelo `small` (transcrição em português).

## Como usar no Mac (cole no app Terminal, um bloco por vez)

1. Instalar o Homebrew (vai pedir a senha do Mac):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Instalar Node.js (LTS), ffmpeg e ferramentas para compilar o whisper.cpp:

   ```bash
   brew install node@24 ffmpeg cmake
   brew link --force --overwrite node@24
   ```

3. Dentro da pasta do projeto, instalar as dependências e o whisper.cpp com o modelo `small`:

   ```bash
   npm install
   npm run instalar-whisper
   ```

4. Abrir o Remotion Studio (abre no navegador):

   ```bash
   npm run dev
   ```

5. Renderizar o vídeo de teste em `out/teste.mp4`:

   ```bash
   npx remotion render Teste out/teste.mp4
   ```
