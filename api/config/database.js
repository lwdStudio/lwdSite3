module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection:{
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },  
  // defaultConnection: 'default',
  // connections: {
  //   default: {
  //     connector: 'bookshelf',
  //     settings: {
  //       client: 'sqlite',
  //       filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  //     },
  //     options: {
  //       useNullAsDefault: true,
  //     },
  //   },
  // },
});
