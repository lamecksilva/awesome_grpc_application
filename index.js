const grpc = require('grpc');
const notesProto = grpc.load('notes.proto'); // Carregando arquivo .proto

// Objeto que vamos enviar pro server (Mock de um Banco de Dados, por exemplo)
const notes = [
	// Mesmas propriedades do arquivo .proto
	{ id: '1', content: 'Content 1', title: 'Note 1' },
	{ id: '2', title: 'Note 2', content: 'Content 2' },
];

// Cria server gRPC
const server = new grpc.Server();

// Adicionando arquivo .proto no servidor
server.addService(notesProto.NoteService.service, {
	list: (_, callback) => {
		console.log('list Method called');
		callback(null, notes);
	},
});

// Subindo servidor na porta 50051
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();
