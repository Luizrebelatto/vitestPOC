import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    
    environment: 'node',
    
    coverage: {
      provider: 'v8',
      reporter: [
        'text',
        'json',
        'html',
        'lcov' 
      ],
      
      exclude: [
        'node_modules/',
        'coverage/',
        'dist/',
        'build/',
        '**/*.config.js',
        '**/*.config.ts',
        'scripts/',
        '**/*.test.js',
        '**/*.spec.js'
      ],
      
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      },
      
      all: true,
      clean: true,
      cleanOnRerun: true,
      
      reportsDirectory: './coverage'
    },
    
    testTimeout: 10000,
    
    hookTimeout: 10000,
    
    setupFiles: [],
    
    reporters: [
      'default',      
      'verbose'          
    ],
    
    isolate: true,
    
    cache: {
      dir: './node_modules/.vitest'
    }
  }
})
