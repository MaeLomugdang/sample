var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var qs = require("qs");

var app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
	console.log('* Service is listening on port:' + app.get('port'));
});

app.post('/DemoBotWebhook', function (request, response) {
    console.log('Webhook triggered');
    var jsonResult;

    if (request.body.result.metadata.intentName == 'FindPhone') {
        var number = request.body.result.parameters.number; 
		findPhonelocation(number).then((output) => {
            result = JSON.parse(output);
			jsonResult = {
				speech: result["local-number"] + " is a number from the " + result.location + " is it correct? ",
                displayText: result["local-number"] + " is a number from the " + result.location + " is it correct? "
				
			};

			response.send(JSON.stringify(jsonResult));
		}).catch(() => {
			jsonResult = {
				speech: "I think there is something wrong with me. Can you please report this to my developer?",
				displayText: "I think there is something wrong with me. Can you please report this to my developer?"
			}

			response.send(JSON.stringify(jsonResult));
		});
	}
})
    function findPhonelocation(number) {
        return new Promise((resolve, reject) => {
            var body = "";
    
            var formData = qs.stringify({
                number: number, 
                'country-code': ""
            });
    
            var request = https.request({
                hostname: "neutrinoapi-phone-validate.p.mashape.com",
                path: "/phone-validate",
                method: 'POST',
                headers: {
                    'X-Mashape-Key': 'D0ipVdIen5mshK8xlUkkrvY3bxp5p1uGjX1jsniNcPSDb0tq3K',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Content-Length': Buffer.byteLength(formData)
                }
            
            }, (result) => {
                result.setEncoding('utf8');
                result.on('data', (chunk) => {

                    body += chunk;
                    console.log('data: '+ body)
                });
                result.on('end', () => {
                    console.log ('end: '+ body)
                    resolve(body);
                    
                });
                result.on("error", () => {
                    reject();
                });
            });

            request.write(formData);
            request.end();
        });
	}
	
	

function getTriviaForNumber() {
	return new Promise((resolve, reject) => {
		var body = "";

		var querystring = qs.stringify({
			fragment: 'true',
			json: true,
			max: 1000,
			min: 1
		});

		https.get({
			host: "numbersapi.p.mashape.com",
			path: "/random/trivia?" + querystring,
			headers: {
				'X-Mashape-Key': 'qfuN66zkaWmshCORzkHPDvbzAwE7p1EPHHjjsnUcsMhnSu3Wv7',
				'Accept': 'text/plain'
			}
		}, (result) => {
			result.setEncoding('utf8');
			result.on('data', (d) => {
				body += d;
			});
			result.on('end', () => {
				resolve(body);
			});
			result.on("error", () => {
				reject();
			})
		});
	});
}


function getTriviaForNumber() {
	return new Promise((resolve, reject) => {
		var body = "";

		var querystring = qs.stringify({
			fragment: 'true',
			json: true,
			max: 1000,
			min: 1
		});

		https.get({
			host: "numbersapi.p.mashape.com",
			path: "/random/trivia?" + querystring,
			headers: {
				'X-Mashape-Key': 'qfuN66zkaWmshCORzkHPDvbzAwE7p1EPHHjjsnUcsMhnSu3Wv7',
				'Accept': 'text/plain'
			}
		}, (result) => {
			result.setEncoding('utf8');
			result.on('data', (d) => {
				body += d;
			});
			result.on('end', () => {
				resolve(body);
			});
			result.on("error", () => {
				reject();
			})
		});
	});
}


function getTriviaForNumber() {
	return new Promise((resolve, reject) => {
		var body = "";

		var querystring = qs.stringify({
			fragment: 'true',
			json: true,
			max: 1000,
			min: 1
		});

		https.get({
			host: "numbersapi.p.mashape.com",
			path: "/random/trivia?" + querystring,
			headers: {
				'X-Mashape-Key': 'qfuN66zkaWmshCORzkHPDvbzAwE7p1EPHHjjsnUcsMhnSu3Wv7',
				'Accept': 'text/plain'
			}
		}, (result) => {
			result.setEncoding('utf8');
			result.on('data', (d) => {
				body += d;
			});
			result.on('end', () => {
				resolve(body);
			});
			result.on("error", () => {
				reject();
			})
		});
	});
}
function getTriviaForNumber() {
	return new Promise((resolve, reject) => {
		var body = "";

		var querystring = qs.stringify({
			fragment: 'true',
			json: true,
			max: 1000,
			min: 1
		});

		https.get({
			host: "numbersapi.p.mashape.com",
			path: "/random/trivia?" + querystring,
			headers: {
				'X-Mashape-Key': 'qfuN66zkaWmshCORzkHPDvbzAwE7p1EPHHjjsnUcsMhnSu3Wv7',
				'Accept': 'text/plain'
			}
		}, (result) => {
			result.setEncoding('utf8');
			result.on('data', (d) => {
				body += d;
			});
			result.on('end', () => {
				resolve(body);
			});
			result.on("error", () => {
				reject();
			})
		});
	});
}

