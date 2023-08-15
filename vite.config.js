import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env = loadEnv(mode, process.cwd());

  console.log(`command: ${command} and mode: ${mode}`);
  console.log("Environment vars: ", env);

  if (mode === "development") {
    console.log("Mode development");
  } else {
    console.log("Mode production");
  }

  return {
    server: {
      port,
    },
  };
});
