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
if (dwr.engine._getObject("BriefingBean") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'main', arguments);
};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getInstance', arguments);
};





p.getPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getPureWapBriefing', arguments);
};





p.getXMLBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getXMLBriefing', arguments);
};





p.getPushBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getPushBriefing', arguments);
};





p.getPushBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getPushBriefing', arguments);
};





p.getPureBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getPureBriefing', arguments);
};





p.getBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getBriefing', arguments);
};





p.getCgiBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getCgiBriefing', arguments);
};




p.retValidateStatus = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'retValidateStatus', arguments);
};





p.formatWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'formatWapBriefing', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'retClassVersion', arguments);
};





p.doGetPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'doGetPureWapBriefing', arguments);
};








p.getMultipleTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getMultipleTextField_with_validate', arguments);
};








p.getRequiredTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getRequiredTextField_with_validate', arguments);
};







p.getIntField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getIntField', arguments);
};





p.getCheckbox = function(p1, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getCheckbox', arguments);
};







p.getTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getTextField', arguments);
};






p.getTraffic = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getTraffic', arguments);
};







p.getRequiredTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getRequiredTextField', arguments);
};








p.getMultipleTextField = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getMultipleTextField', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'isShutdownInitiated', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'shutdownInitiated', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'setStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'useTitle', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'initProps', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'clearStERR', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'BriefingBean', 'initCtx', arguments);
};

dwr.engine._setObject("BriefingBean", p);
}
})();

