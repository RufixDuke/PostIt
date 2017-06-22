const Message = require('../data/models').Message;

exports.create = function(req, res) {
	
	console.log(req.body);
	console.log(req.params.groupId);
	if(req.session.name) {
		return Message
	    .create({
	  	    content: req.body.content,
	  	    groupId: req.params.groupId,
	    })		
	    .catch((error) => {
	    	console.log(err);
	    	res.json({
	    		message: "Error sending message"
	    	});
	    });
		res.json({
			message: "Message sent"
		});
	}
	else {
		res.json({
			message: "Login to send message"
		});
	}
};

exports.retrieve = function(req, res) {
	
	if(req.session.name) {
		return Message.findAll({ 
		  	where: {groupId: req.params.groupId }
		})
		.then((messages) => {
			let msg = JSON.stringify(messages);
			msg = JSON.parse(msg);
			res.json(msg);
		})
		.catch((error) => {
	    	console.log(err);
	    	res.json({
	    		message: "Error getting message"
	    	});
		});
	}	
	else {
		res.json({
			message: "Login to get messages"
		});
	}
};
