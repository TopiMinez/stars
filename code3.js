gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.GDSettingTextObjects1= [];
gdjs.SettingsCode.GDSettingTextObjects2= [];
gdjs.SettingsCode.GDBGObjects1= [];
gdjs.SettingsCode.GDBGObjects2= [];
gdjs.SettingsCode.GDStarObjects1= [];
gdjs.SettingsCode.GDStarObjects2= [];
gdjs.SettingsCode.GDBalanceObjects1= [];
gdjs.SettingsCode.GDBalanceObjects2= [];
gdjs.SettingsCode.GDBackButtonObjects1= [];
gdjs.SettingsCode.GDBackButtonObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackButtonObjects1[k] = gdjs.SettingsCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDSettingTextObjects1.length = 0;
gdjs.SettingsCode.GDSettingTextObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDStarObjects1.length = 0;
gdjs.SettingsCode.GDStarObjects2.length = 0;
gdjs.SettingsCode.GDBalanceObjects1.length = 0;
gdjs.SettingsCode.GDBalanceObjects2.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1.length = 0;
gdjs.SettingsCode.GDBackButtonObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDSettingTextObjects1.length = 0;
gdjs.SettingsCode.GDSettingTextObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDStarObjects1.length = 0;
gdjs.SettingsCode.GDStarObjects2.length = 0;
gdjs.SettingsCode.GDBalanceObjects1.length = 0;
gdjs.SettingsCode.GDBalanceObjects2.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1.length = 0;
gdjs.SettingsCode.GDBackButtonObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
