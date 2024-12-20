import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    // Excluir la carpeta node_modules
    exclude: [...configDefaults.exclude],
  },
})
