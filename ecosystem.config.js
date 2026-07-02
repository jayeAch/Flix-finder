module.exports = {
  apps: [{
    name: "flix-finder",
    script: "server.js",
    out_file: "/dev/null",
    error_file: "/dev/null",
    instances: "1",
    exec_mode: "fork",
    watch: false,
    autorestart: true,
    restart_delay: 3000,
    max_restarts: 10,
    node_args: [
      "--max-old-space-size=96",
      "--max-semi-space-size=8",
      "--compact-on-every-full-gc",
      "--memory-reducer-for-small-heaps",
    ],
    env: {
      NODE_ENV: "production"
    }
  }]
};






