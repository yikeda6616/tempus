const ormconfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'localuser',
  password: 'localpass',
  database: 'local',
  entities: ['entities/*'],
  migrations: ['migrations/*'],
  cli: {
    migrationsDir: 'migrations',
  },
};

export = ormconfig;
