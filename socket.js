import route from './lib/routes';

export default function(io, app) {
  io.on('connection', function(client) {
      console.log('Client connected...');
      // client.on('join', function(data) {
          client.emit('myCustomNamespace', 'cool to hear');
      // });
      route(app, client);
  });
};
