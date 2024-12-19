gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDNewTextObjects1= [];
gdjs.LoadCode.GDNewTextObjects2= [];
gdjs.LoadCode.GDBGObjects1= [];
gdjs.LoadCode.GDBGObjects2= [];
gdjs.LoadCode.GDStarObjects1= [];
gdjs.LoadCode.GDStarObjects2= [];
gdjs.LoadCode.GDBalanceObjects1= [];
gdjs.LoadCode.GDBalanceObjects2= [];
gdjs.LoadCode.GDBackButtonObjects1= [];
gdjs.LoadCode.GDBackButtonObjects2= [];


gdjs.LoadCode.asyncCallback12220596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{gdjs.evtsExt__GamePushAds__ShowFullscreen.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoadCode.asyncCallback12220596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamePushAds__Initialization.func(runtimeScene, "17515", "AMI2KwNIiSv1kxFPMdl3N23bh2b1Yqt5", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "10", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "9", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "8", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "7", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "6", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "5", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "4", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "3", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "2", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("a", "1", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.LoadCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "3", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(10000000, 99999999));
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "2", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDBGObjects1.length = 0;
gdjs.LoadCode.GDBGObjects2.length = 0;
gdjs.LoadCode.GDStarObjects1.length = 0;
gdjs.LoadCode.GDStarObjects2.length = 0;
gdjs.LoadCode.GDBalanceObjects1.length = 0;
gdjs.LoadCode.GDBalanceObjects2.length = 0;
gdjs.LoadCode.GDBackButtonObjects1.length = 0;
gdjs.LoadCode.GDBackButtonObjects2.length = 0;

gdjs.LoadCode.eventsList1(runtimeScene);
gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDBGObjects1.length = 0;
gdjs.LoadCode.GDBGObjects2.length = 0;
gdjs.LoadCode.GDStarObjects1.length = 0;
gdjs.LoadCode.GDStarObjects2.length = 0;
gdjs.LoadCode.GDBalanceObjects1.length = 0;
gdjs.LoadCode.GDBalanceObjects2.length = 0;
gdjs.LoadCode.GDBackButtonObjects1.length = 0;
gdjs.LoadCode.GDBackButtonObjects2.length = 0;


return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
