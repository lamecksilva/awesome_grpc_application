const grpc = require('grpc');

const PROTO_PATH = './notes.proto';

// Recebendo o NoteService do .proto
const NoteService = grpc.load(PROTO_PATH).NoteService;

// Criando uma chamada para o servidor
const client = new NoteService(
	'localhost:50051',
	grpc.credentials.createInsecure()
);

module.exports = client;
