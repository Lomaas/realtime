var GameMechanics = {
	handleConnection: function (socket) {
		socket.on('newPosition', function (data) {
			console.log("Event, newPosition. Data: ", data);
		});
	}
}

module.exports = GameMechanics;
