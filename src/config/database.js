require('dotenv').config();

module.exports = {
  local: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'gympoint_local',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'gympoint_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'gympoint_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'gympoint',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: { timestamps: true, underscored: true, underscoredAll: true },
  },
};
