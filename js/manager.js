'use strict';


module.exports = function (oAppData) {
	var
		App = require('%PathToCoreWebclientModule%/js/App.js'),
		
		bAnonimUser = App.getUserRole() === Enums.UserRole.Anonymous
	;
	
	if (!App.isPublic() && bAnonimUser)
	{
		return {
			/**
			 * Returns login view screen.
			 */
			getScreens: function () {
				var
					oScreens = {},
					ModulesManager = require('%PathToCoreWebclientModule%/js/ModulesManager.js'),
					sHashModuleName = ModulesManager.run('StandardRegisterFormWebclient', 'getHashModuleName')
				;
				oScreens[sHashModuleName] = function () {
					var oLoginScreenView = ModulesManager.run('StandardRegisterFormWebclient', 'getRegisterScreenView');
					oLoginScreenView.ViewTemplate = '%ModuleName%_RegisterView';
					return oLoginScreenView;
				};
				return oScreens;
			}
		};
	}
	
	return null;
};
