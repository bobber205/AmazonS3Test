s3app.service('S3Service', ["$timeout", "$q",
	function($timeout, $q) {
		var instance = {};


		var myAWS = new AWS.S3();

		function getSignedUrl(key) {
			var def = $q.defer();
			myAWS.getSignedUrl('getObject', {Bucket:"anothertestbucketalexwait", Key: key}, function(error, url) {
			//	console.log("url is", {name: key, url: url});
				def.resolve({name: key, url: url});
			});
			return def;
		}

		instance.getAllFileObjects = function() {
			var def = $q.defer();
			var defs = [];
			myAWS.listObjects({
				Bucket: "anothertestbucketalexwait"
			}, function(error, data) {
				for (var i = 0; i < data.Contents.length; i++) {
					//console.log(data.Contents[i].Key);
					defs.push(getSignedUrl(data.Contents[i].Key).promise);
				}
				var allDef = $q.all(defs);
				allDef.then(function(allFileObjects) { 
					def.resolve(allFileObjects);
				})
			});
			return def.promise;
		};
		return instance;
	}
]);