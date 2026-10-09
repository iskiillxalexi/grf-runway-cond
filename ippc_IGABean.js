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
if (dwr.engine._getObject("IGABean") == undefined) {
var p;

p = {};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'retClassVersion', arguments);
};




p.getPureBriefing = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getPureBriefing', arguments);
};




p.getTheBriefing = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getTheBriefing', arguments);
};





p.getBulletin = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getBulletin', arguments);
};





p.getCronosUpperwind = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getCronosUpperwind', arguments);
};





p.pushTheBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'pushTheBriefing', arguments);
};





p.getMetIGA = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getMetIGA', arguments);
};





p.getCronosSpaceweatherTxt = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getCronosSpaceweatherTxt', arguments);
};





p.getCronosSpaceweather = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getCronosSpaceweather', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'main', arguments);
};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getInstance', arguments);
};





p.getBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getBriefing', arguments);
};





p.getXMLBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getXMLBriefing', arguments);
};




p.retValidateStatus = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'retValidateStatus', arguments);
};





p.getPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getPureWapBriefing', arguments);
};





p.getCgiBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getCgiBriefing', arguments);
};





p.getPushBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getPushBriefing', arguments);
};





p.getPushBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getPushBriefing', arguments);
};





p.getPureBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getPureBriefing', arguments);
};





p.formatWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'formatWapBriefing', arguments);
};





p.doGetPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'doGetPureWapBriefing', arguments);
};





p.getCheckbox = function(p1, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getCheckbox', arguments);
};







p.getTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getTextField', arguments);
};







p.getIntField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getIntField', arguments);
};








p.getMultipleTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getMultipleTextField_with_validate', arguments);
};








p.getRequiredTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getRequiredTextField_with_validate', arguments);
};






p.getTraffic = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getTraffic', arguments);
};








p.getMultipleTextField = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getMultipleTextField', arguments);
};







p.getRequiredTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getRequiredTextField', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'isShutdownInitiated', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'initProps', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'isAdmin', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'useTitle', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'setStERR', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'clearStERR', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'shutdownInitiated', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'init', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getDsIPPC', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getDsADAPT', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'initCtx', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IGABean', 'getConnADAPT', arguments);
};

dwr.engine._setObject("IGABean", p);
}
})();

