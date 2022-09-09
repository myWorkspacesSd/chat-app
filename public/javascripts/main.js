const app = angular.module('chat-app', []);

app.value('env', {
	'SERVICE_URL': 'http://localhost:3000'
});