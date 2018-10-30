module.exports = {
  apps: [
    {
      name: 'play-with-react',
      script: 'serve',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        "PM2_SERVE_PATH": './build',
        "PM2_SERVE_PORT": 3000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
};
