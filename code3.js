gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.GDNewTextObjects1= [];
gdjs.SettingsCode.GDNewTextObjects2= [];
gdjs.SettingsCode.GDEnemyObjects1= [];
gdjs.SettingsCode.GDEnemyObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "re");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "en");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "re") >= 0.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.SettingsCode.GDEnemyObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "re");
}{for(var i = 0, len = gdjs.SettingsCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDEnemyObjects1[i].setPosition(gdjs.randomInRange(-(55), 311),gdjs.randomInRange(147, 858));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.SettingsCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDEnemyObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDEnemyObjects1[k] = gdjs.SettingsCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(0.1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "Stars", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "en") >= 15;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "mg", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewTextObjects1.length = 0;
gdjs.SettingsCode.GDNewTextObjects2.length = 0;
gdjs.SettingsCode.GDEnemyObjects1.length = 0;
gdjs.SettingsCode.GDEnemyObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDNewTextObjects1.length = 0;
gdjs.SettingsCode.GDNewTextObjects2.length = 0;
gdjs.SettingsCode.GDEnemyObjects1.length = 0;
gdjs.SettingsCode.GDEnemyObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
