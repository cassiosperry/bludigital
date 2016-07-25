
module.exports = (function() {

  var env = {};
  var cloudant = {};
  
  env.port = process.env.PORT || 3000;
  env.db = {};

  if (process.env.VCAP_SERVICES) {
    cloudant = JSON.parse(process.env.VCAP_SERVICES);
    cloudant = cloudant.cloudantNoSQLDB[0].credentials || {};
  }
  
  env.db.hostname = cloudant.host ||  process.env.LOCAL_DATABASE_HOST;
  env.db.port = cloudant.port || process.env.LOCAL_DATABASE_PORT;
  env.db.username = cloudant.username || process.env.LOCAL_DATABASE_USER;
  env.db.password = cloudant.password || process.env.LOCAL_DATABASE_PASSWORD;
  env.db.database = process.env.LOCAL_DATABASE_NAME;

  env.getDbUrl = function() {
    var protocolo = env.db.port == 443 ? 'https://' : 'http://';
    return protocolo + env.db.username + ':' + env.db.password + '@' + env.db.hostname + ':' + env.db.port;
  };

  //console.log('Configuração: %j', env);
  return env;
}());
