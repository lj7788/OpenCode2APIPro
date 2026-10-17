#!/usr/bin/env node
/**
 * CLI entry point for the globally-installed package.
 *
 * Booting logic (config loading, backend startup, HTTP server) lives in the
 * package root `index.js`. Importing it runs the server, so this launcher only
 * exists to expose a stable `opencode-api-pro` executable via package.json#bin
 * while keeping `__dirname` resolution anchored to the package root.
 */
import '../index.js';
