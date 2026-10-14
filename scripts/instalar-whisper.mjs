// Instala o whisper.cpp e baixa o modelo "small" (multilíngue, bom em português).
// Uso: npm run instalar-whisper
import path from "node:path";
import { downloadWhisperModel, installWhisperCpp } from "@remotion/install-whisper-cpp";

const to = path.join(process.cwd(), "whisper.cpp");

await installWhisperCpp({ to, version: "1.7.6" });
await downloadWhisperModel({ model: "small", folder: to });

console.log("whisper.cpp e modelo small prontos em", to);
