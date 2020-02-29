const env = require('./env-config.js');
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true
      }
    ],
    ['transform-define', env]
  ]
}