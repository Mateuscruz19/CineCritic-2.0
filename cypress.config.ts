import { defineConfig } from "cypress";

const url = "http://localhost:3000";
export default defineConfig({
  projectId: 'mj7mxd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: url,
  },
});