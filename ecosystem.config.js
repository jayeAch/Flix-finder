module.exports = {
  apps: [{
    name: "flix-finder",
    script: "server.js",
    instances: "max",
    exec_mode: "cluster",
    node_args: [
      "--max-old-space-size=768",
      "--max-semi-space-size=64",
    ],
    env: {
      NODE_ENV: "production"
    }
  }]
};






