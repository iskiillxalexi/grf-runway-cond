if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["FplUserInfo"]) {
c = function() {
this.LOGGING_ON = false;
this.OK_LOGGED_ON = false;
this.fplUserRecord = null;
}
c.$dwrClassName = 'FplUserInfo';
c.$dwrClassMembers = {};
c.$dwrClassMembers.LOGGING_ON = {};
c.$dwrClassMembers.OK_LOGGED_ON = {};
c.$dwrClassMembers.fplUserRecord = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("FplUserInfo", c);
dwr.engine._mappedClasses["FplUserInfo"] = c;
addedNow["FplUserInfo"] = true;
}
})();

(function() {
if (dwr.engine._getObject("WeatherInfo") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'main', arguments);
};





p.getTaf_AP = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getTaf_AP', arguments);
};





p.getAviationProducts = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getAviationProducts', arguments);
};





p.getWeatherInfo_RawData = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo_RawData', arguments);
};





p.getAviationProducts_Metar = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getAviationProducts_Metar', arguments);
};





p.getMultipleMetarTaf = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getMultipleMetarTaf', arguments);
};





p.getWeatherInfo_Sigmets = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo_Sigmets', arguments);
};





p.getWeatherInfo_MetarTaf = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo_MetarTaf', arguments);
};





p.getWeatherInfo_Sigmets_Fir = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo_Sigmets_Fir', arguments);
};






p.getMetarHistory_AP = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getMetarHistory_AP', arguments);
};




p.getIGA = function(callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getIGA', arguments);
};






p.getIGA = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getIGA', arguments);
};







p.getIGA = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getIGA', arguments);
};





p.getSigmets = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getSigmets', arguments);
};





p.getAllSigmets = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getAllSigmets', arguments);
};





p.getMetarTaf_Xml = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getMetarTaf_Xml', arguments);
};





p.getWeatherInfo_AP = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo_AP', arguments);
};





p.getMetar_AP = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getMetar_AP', arguments);
};





p.getMultipleTaf = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getMultipleTaf', arguments);
};





p.getSigmets_Fir = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getSigmets_Fir', arguments);
};





p.getWeatherInfo = function(p0, callback) {
return dwr.engine._execute(p._path, 'WeatherInfo', 'getWeatherInfo', arguments);
};

dwr.engine._setObject("WeatherInfo", p);
}
})();

