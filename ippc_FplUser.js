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
if (dwr.engine._getObject("FplUser") == undefined) {
var p;

p = {};




p.logout = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'logout', arguments);
};






p.updateNewPasswordForUsersWithEmail = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'updateNewPasswordForUsersWithEmail', arguments);
};




p.getPasswordRules = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getPasswordRules', arguments);
};




p.isAuthenticatedAndHasClient = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isAuthenticatedAndHasClient', arguments);
};





p.recoverForgottenPassword2 = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'recoverForgottenPassword2', arguments);
};





p.recoverForgottenUsername = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'recoverForgottenUsername', arguments);
};




p.generateRandomPassword = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'generateRandomPassword', arguments);
};





p.sendResetPasswordLink = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'sendResetPasswordLink', arguments);
};






p.userNeedToUpdateInfo = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'userNeedToUpdateInfo', arguments);
};






p.adviceShowResetPassword = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'adviceShowResetPassword', arguments);
};




p.isAuthenticated = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isAuthenticated', arguments);
};






p.getFplUserRecord = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUserRecord', arguments);
};





p.getFplUserRecord = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUserRecord', arguments);
};




p.getUser = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getUser', arguments);
};




p.isFplOpen = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isFplOpen', arguments);
};







p.okLogon = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'okLogon', arguments);
};







p.insertString = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'insertString', arguments);
};





p.isPasswordValid = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isPasswordValid', arguments);
};





p.userStatusOk = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'userStatusOk', arguments);
};






p.isPasswordsValid = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isPasswordsValid', arguments);
};








p.saveUserPibDefs = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'saveUserPibDefs', arguments);
};






p.getUsersPibDefs = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getUsersPibDefs', arguments);
};




p.hasEADClient = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'hasEADClient', arguments);
};





p.setOK_LOGGED_ON = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'setOK_LOGGED_ON', arguments);
};




p.hasGDPRAgreed = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'hasGDPRAgreed', arguments);
};





p.userHasClientAtEad = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'userHasClientAtEad', arguments);
};




p.isLOGGING_ON = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isLOGGING_ON', arguments);
};




p.isOK_LOGGED_ON = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'isOK_LOGGED_ON', arguments);
};




p.unAuthorize = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'unAuthorize', arguments);
};




p.getFplUserName = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUserName', arguments);
};







p.getUsersPibDef = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getUsersPibDef', arguments);
};





p.deleteUsersPibDef = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'deleteUsersPibDef', arguments);
};






p.getFplUserStatus = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUserStatus', arguments);
};







p.processUserInfo = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'processUserInfo', arguments);
};





p.setLOGGING_ON = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'setLOGGING_ON', arguments);
};





p.validate = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'validate', arguments);
};




p.getErrorCode = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getErrorCode', arguments);
};




p.assertClientApproval = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'assertClientApproval', arguments);
};




p.getFplUserRecord = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUserRecord', arguments);
};





p.setUser = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'setUser', arguments);
};




p.addNewuser = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'addNewuser', arguments);
};




p.getFplUser = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'getFplUser', arguments);
};





p.logon = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'logon', arguments);
};




p.updateUser = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'updateUser', arguments);
};




p.updateLastLogon = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'updateLastLogon', arguments);
};





p.setFplUserRecord = function(p0, callback) {
return dwr.engine._execute(p._path, 'FplUser', 'setFplUserRecord', arguments);
};




p.retUserStatus = function(callback) {
return dwr.engine._execute(p._path, 'FplUser', 'retUserStatus', arguments);
};

dwr.engine._setObject("FplUser", p);
}
})();

