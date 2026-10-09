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
if (dwr.engine._getObject("AIMSL_RESTClient") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'main', arguments);
};




p.getConnection = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getConnection', arguments);
};





p.reqAIMSLAerodromeData = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'reqAIMSLAerodromeData', arguments);
};





p.reqRESTAd = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'reqRESTAd', arguments);
};




p.updateGeoJSON = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'updateGeoJSON', arguments);
};




p.testJSon_AD = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'testJSon_AD', arguments);
};





p.reqAIMSLRouteData = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'reqAIMSLRouteData', arguments);
};





p.reqRESTRoute = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'reqRESTRoute', arguments);
};





p.retGeoJSON_AD = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'retGeoJSON_AD', arguments);
};





p.retGeoJSON_ROUTE = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'retGeoJSON_ROUTE', arguments);
};





p.reqRESTAd_LatLong = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'reqRESTAd_LatLong', arguments);
};






p.marshal = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'marshal', arguments);
};






p.formatDateTime = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'formatDateTime', arguments);
};





p.setCxfReceiveTimeoutOverrideMs = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setCxfReceiveTimeoutOverrideMs', arguments);
};





p.setCxfConnectionTimeoutOverrideMs = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setCxfConnectionTimeoutOverrideMs', arguments);
};




p.isCxfForceUrlConnectionConduit = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'isCxfForceUrlConnectionConduit', arguments);
};





p.setCxfForceUrlConnectionConduit = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setCxfForceUrlConnectionConduit', arguments);
};





p.getXMLGregorianCalendar = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getXMLGregorianCalendar', arguments);
};




p.testRemoveDuplicates = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'testRemoveDuplicates', arguments);
};






p.setCxfTimeoutOverrides = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setCxfTimeoutOverrides', arguments);
};




p.getXMLGregorianCalendarNow = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getXMLGregorianCalendarNow', arguments);
};




p.getCxfConnectionTimeoutMs = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getCxfConnectionTimeoutMs', arguments);
};




p.clearCxfTimeoutOverrides = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'clearCxfTimeoutOverrides', arguments);
};






p.styleXmlIGAResponse = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'styleXmlIGAResponse', arguments);
};




p.getCxfReceiveTimeoutMs = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getCxfReceiveTimeoutMs', arguments);
};







p.formatNotamTime = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'formatNotamTime', arguments);
};






p.prettyFormat = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'prettyFormat', arguments);
};





p.returnCurrentTime = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'returnCurrentTime', arguments);
};






p.marshal_snowtam = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'marshal_snowtam', arguments);
};





p.getDomainName = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getDomainName', arguments);
};




p.clearCxfForceUrlConnectionConduitOverride = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'clearCxfForceUrlConnectionConduitOverride', arguments);
};




p.getName = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getName', arguments);
};




p.getStackTrace = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getStackTrace', arguments);
};




p.run = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'run', arguments);
};




p.interrupt = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'interrupt', arguments);
};




p.currentThread = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'currentThread', arguments);
};




p.onSpinWait = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'onSpinWait', arguments);
};




p.isVirtual = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'isVirtual', arguments);
};






p.join = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'join', arguments);
};





p.join = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'join', arguments);
};




p.join = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'join', arguments);
};





p.join = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'join', arguments);
};





p.setContextClassLoader = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setContextClassLoader', arguments);
};




p.getThreadGroup = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getThreadGroup', arguments);
};




p.checkAccess = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'checkAccess', arguments);
};




p.dumpStack = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'dumpStack', arguments);
};





p.setPriority = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setPriority', arguments);
};





p.setDaemon = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setDaemon', arguments);
};




p.start = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'start', arguments);
};




p.getContextClassLoader = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getContextClassLoader', arguments);
};




p.getPriority = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getPriority', arguments);
};




p.isDaemon = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'isDaemon', arguments);
};




p.interrupted = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'interrupted', arguments);
};




p.activeCount = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'activeCount', arguments);
};





p.enumerate = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'enumerate', arguments);
};




p.isAlive = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'isAlive', arguments);
};




p.threadId = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'threadId', arguments);
};





p.setDefaultUncaughtExceptionHandler = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setDefaultUncaughtExceptionHandler', arguments);
};




p.getUncaughtExceptionHandler = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getUncaughtExceptionHandler', arguments);
};




p.yield = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'yield', arguments);
};





p.sleep = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'sleep', arguments);
};





p.sleep = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'sleep', arguments);
};






p.sleep = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'sleep', arguments);
};




p.ofPlatform = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'ofPlatform', arguments);
};




p.ofVirtual = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'ofVirtual', arguments);
};





p.startVirtualThread = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'startVirtualThread', arguments);
};




p.stop = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'stop', arguments);
};




p.isInterrupted = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'isInterrupted', arguments);
};





p.setName = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setName', arguments);
};





p.holdsLock = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'holdsLock', arguments);
};




p.getAllStackTraces = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getAllStackTraces', arguments);
};




p.getId = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getId', arguments);
};




p.getState = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getState', arguments);
};




p.getDefaultUncaughtExceptionHandler = function(callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'getDefaultUncaughtExceptionHandler', arguments);
};





p.setUncaughtExceptionHandler = function(p0, callback) {
return dwr.engine._execute(p._path, 'AIMSL_RESTClient', 'setUncaughtExceptionHandler', arguments);
};

dwr.engine._setObject("AIMSL_RESTClient", p);
}
})();

