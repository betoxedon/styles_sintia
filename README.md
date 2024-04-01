## Alterações na interface do agente

1. Em [AgentStyles.vue](./src/AgentStyles.vue)

   | Configurar      | Linha                     |
   | --------------- | ------------------------- |
   | docId do agente | `const agentId = ref('')` |

2. Alterar a interface do agente

3. `npm run build`

4. Em :open_file_folder: `AGENT_SINTIA` `./src/Sintia.ce.vue`

   | Colar o conteúdo                         | Tag                     |
   | ---------------------------------------- | ----------------------- |
   | [AgentStyles.vue](./src/AgentStyles.vue) | `<template></template>` |
   | `./dist/assets/FILE.css`                 | `<style></style>`       |

## Envs

```
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
```
