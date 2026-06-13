import { defineConfig } from "eslint/config";
import raycastConfig from "@raycast/eslint-config";

export default defineConfig([
  { ignores: ["raycast-env.d.ts", "vicinae-env.d.ts"] },
  ...raycastConfig,
]);
