// Importando o client com conexão gRPC
const client = require('./client-grpc');

// Chamando o método list RPC e retornando os dados no console
client.list({}, (error, notes) => {
	if (!error) {
		console.log(notes);
	} else {
		console.error(error);
	}
});
