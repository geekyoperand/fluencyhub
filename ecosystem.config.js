module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "fluencyhub-production",
      script: "npm",
      args: "run start:staging",
      env_production: {
        NODE_ENV: "staging"
      }
    }
  ],

  deploy: {
    production: {},
    staging: {
      user: "fluencyhub",
      host: "fluencyhub.co.in",
      ref: "origin/staging",
      repo: "git@github.com:geekyoperand/nextjs-nodejs.git",
      path: "/server/index.js",
      ssh_options: ["ForwardAgent=yes"],
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    },
    dev: {}
  }
};
