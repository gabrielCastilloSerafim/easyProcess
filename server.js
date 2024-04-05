const express = require('express');
const dotenv = require('dotenv');
const app = require("./app")

// Load .env file into current process
dotenv.config({ path: './.env' });

// Connec to database (TODO)...

// Start server
const port = process.env.PORT || '3000';
const server = app.listen(port, () => {
  console.log(`🌎 App running on port ${port} 🌎`);
});

// Handle uncaught exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});