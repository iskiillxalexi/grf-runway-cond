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
if (dwr.engine._getObject("Flightplans") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'main', arguments);
};








p.doProcessFlightPlanTemplate_mgmt = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'doProcessFlightPlanTemplate_mgmt', arguments);
};




p.invalidateFplSession = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'invalidateFplSession', arguments);
};






p.generatePureFplMessage = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'generatePureFplMessage', arguments);
};







p.getFlightplan_admin = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getFlightplan_admin', arguments);
};






p.verifyChangeRequests = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'verifyChangeRequests', arguments);
};












p.changeRequest_CHG_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_CHG_mgmt', arguments);
};





p.generateFplTextCopy = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'generateFplTextCopy', arguments);
};




p.updateFplTimestamp2 = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'updateFplTimestamp2', arguments);
};




p.retLastFplUpdateTime = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'retLastFplUpdateTime', arguments);
};














p.changeRequest_ARR_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_ARR_mgmt', arguments);
};










p.retrieveFplBasedOnCallsign = function(p0, p1, p2, p3, p4, p5, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'retrieveFplBasedOnCallsign', arguments);
};






p.saveAftnFplToErrorDb = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'saveAftnFplToErrorDb', arguments);
};





p.admin_getFlightplan = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'admin_getFlightplan', arguments);
};






p.changeRequest_CNL_nm = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_CNL_nm', arguments);
};




p.logStopPollFplStatus = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'logStopPollFplStatus', arguments);
};






p.doProcessTheFlightplan = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'doProcessTheFlightplan', arguments);
};





p.pollFilingStatusMessages = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'pollFilingStatusMessages', arguments);
};





p.pollFilingStatusMessages = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'pollFilingStatusMessages', arguments);
};












p.changeRequest_DLA_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_DLA_mgmt', arguments);
};












p.changeRequest_CNL_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_CNL_mgmt', arguments);
};






p.changeRequest_DLA_nm = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_DLA_nm', arguments);
};




p.getNewSessionTimeout = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getNewSessionTimeout', arguments);
};





p.logStartPollFplStatus = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'logStartPollFplStatus', arguments);
};








p.saveAftnFpl = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'saveAftnFpl', arguments);
};







p.saveAftnFpl = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'saveAftnFpl', arguments);
};






p.fplPrinterfriendly = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'fplPrinterfriendly', arguments);
};







p.fplPrinterfriendly = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'fplPrinterfriendly', arguments);
};







p.proposeRoute = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'proposeRoute', arguments);
};





p.convert2JSON = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'convert2JSON', arguments);
};





p.pollFilingStatus = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'pollFilingStatus', arguments);
};







p.getFlightplan_user = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getFlightplan_user', arguments);
};




p.getTodaysEOBD = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getTodaysEOBD', arguments);
};





p.extractList = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'extractList', arguments);
};





p.convert2JSON_st = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'convert2JSON_st', arguments);
};




p.getAllFpls_Mgmt = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getAllFpls_Mgmt', arguments);
};




p.htmlFplHead = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'htmlFplHead', arguments);
};






p.changeRequest_DLA = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_DLA', arguments);
};





p.retTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'retTemplate', arguments);
};




p.isNrOfFplOk = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'isNrOfFplOk', arguments);
};







p.getFlightplan = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getFlightplan', arguments);
};




p.getAllFplTemplates = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getAllFplTemplates', arguments);
};




p.retHtmlFlightPlan = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'retHtmlFlightPlan', arguments);
};






p.changeRequest_CHG = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_CHG', arguments);
};






p.getOneFpl_union = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getOneFpl_union', arguments);
};





p.getAllFlightPlans = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getAllFlightPlans', arguments);
};





p.pollFplStatusNM = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'pollFplStatusNM', arguments);
};





p.processFplTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'processFplTemplate', arguments);
};






p.changeRequest_CNL = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_CNL', arguments);
};





p.validateFpl_IFR_WS = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'validateFpl_IFR_WS', arguments);
};




p.startCFMUTest = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'startCFMUTest', arguments);
};





p.deleteFplTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'deleteFplTemplate', arguments);
};








p.changeRequest_ARR = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'changeRequest_ARR', arguments);
};





p.convertAftnToFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'convertAftnToFpl', arguments);
};





p.isOverlapping = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'isOverlapping', arguments);
};





p.pollFplStatusAis = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'pollFplStatusAis', arguments);
};





p.validateFpl_IFR = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'validateFpl_IFR', arguments);
};





p.validateFpl_IFR = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'validateFpl_IFR', arguments);
};




p.getCurrFpl = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getCurrFpl', arguments);
};






p.sendEmail = function(p0, p2, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'sendEmail', arguments);
};





p.sendEmail = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'sendEmail', arguments);
};






p.getOneFpl = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getOneFpl', arguments);
};




p.htmlFplEnd = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'htmlFplEnd', arguments);
};





p.getAllFpls = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'getAllFpls', arguments);
};





p.findFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'findFpl', arguments);
};




p.testEmail = function(callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'testEmail', arguments);
};






p.retFpl = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'retFpl', arguments);
};





p.archiveFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'archiveFpl', arguments);
};





p.deleteFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'Flightplans', 'deleteFpl', arguments);
};

dwr.engine._setObject("Flightplans", p);
}
})();

