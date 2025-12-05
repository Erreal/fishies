module.exports = {
  apps: [
    // =======================
    // PRODUCTION BACKEND
    // =======================
    {
      name: "fishies-backend",
      cwd: "/home/erreal/apps/fishies/backend",
      script: "dist/src/main.js",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
        HOST: "127.0.0.1"
      },
      watch: false,
    },

    // =======================
    // PRODUCTION FRONTEND
    // =======================
    {
      name: "fishies-frontend",
      cwd: "/home/erreal/apps/fishies/frontend",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "127.0.0.1"
      },
      watch: false,
    },

    // =======================
    // DEV BACKEND
    // =======================
    {
      name: "fishies-backend-dev",
      cwd: "/home/erreal/apps/fishies/backend",
      script: "dist/src/main.js",
      env: {
        NODE_ENV: "development",
        PORT: 4010,
      },
      watch: true,
    },

    // =======================
    // DEV FRONTEND
    // =======================
    {
      name: "fishies-frontend-dev",
      cwd: "/home/erreal/apps/fishies/frontend",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "development",
        PORT: 3010,
      },
      watch: true,
    },
  ],
};