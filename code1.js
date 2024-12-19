gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDStarsEmitterObjects1= [];
gdjs.MainCode.GDStarsEmitterObjects2= [];
gdjs.MainCode.GDStarsEmitterObjects3= [];
gdjs.MainCode.GDNewTiledSpriteObjects1= [];
gdjs.MainCode.GDNewTiledSpriteObjects2= [];
gdjs.MainCode.GDNewTiledSpriteObjects3= [];
gdjs.MainCode.GDRewardTextObjects1= [];
gdjs.MainCode.GDRewardTextObjects2= [];
gdjs.MainCode.GDRewardTextObjects3= [];
gdjs.MainCode.GDRewardText2Objects1= [];
gdjs.MainCode.GDRewardText2Objects2= [];
gdjs.MainCode.GDRewardText2Objects3= [];
gdjs.MainCode.GDAntiClickerObjects1= [];
gdjs.MainCode.GDAntiClickerObjects2= [];
gdjs.MainCode.GDAntiClickerObjects3= [];
gdjs.MainCode.GDBlueFlatBarObjects1= [];
gdjs.MainCode.GDBlueFlatBarObjects2= [];
gdjs.MainCode.GDBlueFlatBarObjects3= [];
gdjs.MainCode.GDShopButtonObjects1= [];
gdjs.MainCode.GDShopButtonObjects2= [];
gdjs.MainCode.GDShopButtonObjects3= [];
gdjs.MainCode.GDGameButtonObjects1= [];
gdjs.MainCode.GDGameButtonObjects2= [];
gdjs.MainCode.GDGameButtonObjects3= [];
gdjs.MainCode.GDSettingsButtonObjects1= [];
gdjs.MainCode.GDSettingsButtonObjects2= [];
gdjs.MainCode.GDSettingsButtonObjects3= [];
gdjs.MainCode.GDIDtextObjects1= [];
gdjs.MainCode.GDIDtextObjects2= [];
gdjs.MainCode.GDIDtextObjects3= [];
gdjs.MainCode.GDBGObjects1= [];
gdjs.MainCode.GDBGObjects2= [];
gdjs.MainCode.GDBGObjects3= [];
gdjs.MainCode.GDStarObjects1= [];
gdjs.MainCode.GDStarObjects2= [];
gdjs.MainCode.GDStarObjects3= [];
gdjs.MainCode.GDBalanceObjects1= [];
gdjs.MainCode.GDBalanceObjects2= [];
gdjs.MainCode.GDBalanceObjects3= [];
gdjs.MainCode.GDBackButtonObjects1= [];
gdjs.MainCode.GDBackButtonObjects2= [];
gdjs.MainCode.GDBackButtonObjects3= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.MainCode.GDStarObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects2Objects = Hashtable.newFrom({"StarsEmitter": gdjs.MainCode.GDStarsEmitterObjects2});
gdjs.MainCode.asyncCallback11486756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Star"), gdjs.MainCode.GDStarObjects3);

{for(var i = 0, len = gdjs.MainCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDStarObjects3[i].getBehavior("Resizable").setSize(500, 500);
}
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDStarObjects2) asyncObjectsList.addObject("Star", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.MainCode.asyncCallback11486756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.MainCode.GDShopButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDShopButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDShopButtonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDShopButtonObjects2[k] = gdjs.MainCode.GDShopButtonObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDShopButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Anti"));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GameButton"), gdjs.MainCode.GDGameButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDGameButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDGameButtonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDGameButtonObjects2[k] = gdjs.MainCode.GDGameButtonObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDGameButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Anti"));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MiniGame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainCode.GDSettingsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDSettingsButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDSettingsButtonObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDSettingsButtonObjects2[k] = gdjs.MainCode.GDSettingsButtonObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDSettingsButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Anti"));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.MainCode.GDStarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Anti"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDStarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDStarObjects2[i].getVariableNumber(gdjs.MainCode.GDStarObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDStarObjects2[k] = gdjs.MainCode.GDStarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDStarObjects2.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDStarObjects2 */
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(0.001);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "0", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.MainCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDStarObjects2[i].getBehavior("Resizable").setSize(490, 490);
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Reward");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.MainCode.GDBalanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueFlatBar"), gdjs.MainCode.GDBlueFlatBarObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 3)));
}
}{for(var i = 0, len = gdjs.MainCode.GDBlueFlatBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFlatBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "10", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "0", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Reward");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IDtext"), gdjs.MainCode.GDIDtextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDIDtextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDIDtextObjects1[i].getBehavior("Text").setText("UID " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDStarsEmitterObjects1.length = 0;
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;
gdjs.MainCode.GDStarsEmitterObjects3.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MainCode.GDRewardTextObjects1.length = 0;
gdjs.MainCode.GDRewardTextObjects2.length = 0;
gdjs.MainCode.GDRewardTextObjects3.length = 0;
gdjs.MainCode.GDRewardText2Objects1.length = 0;
gdjs.MainCode.GDRewardText2Objects2.length = 0;
gdjs.MainCode.GDRewardText2Objects3.length = 0;
gdjs.MainCode.GDAntiClickerObjects1.length = 0;
gdjs.MainCode.GDAntiClickerObjects2.length = 0;
gdjs.MainCode.GDAntiClickerObjects3.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects1.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects2.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects3.length = 0;
gdjs.MainCode.GDShopButtonObjects1.length = 0;
gdjs.MainCode.GDShopButtonObjects2.length = 0;
gdjs.MainCode.GDShopButtonObjects3.length = 0;
gdjs.MainCode.GDGameButtonObjects1.length = 0;
gdjs.MainCode.GDGameButtonObjects2.length = 0;
gdjs.MainCode.GDGameButtonObjects3.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects3.length = 0;
gdjs.MainCode.GDIDtextObjects1.length = 0;
gdjs.MainCode.GDIDtextObjects2.length = 0;
gdjs.MainCode.GDIDtextObjects3.length = 0;
gdjs.MainCode.GDBGObjects1.length = 0;
gdjs.MainCode.GDBGObjects2.length = 0;
gdjs.MainCode.GDBGObjects3.length = 0;
gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDStarObjects3.length = 0;
gdjs.MainCode.GDBalanceObjects1.length = 0;
gdjs.MainCode.GDBalanceObjects2.length = 0;
gdjs.MainCode.GDBalanceObjects3.length = 0;
gdjs.MainCode.GDBackButtonObjects1.length = 0;
gdjs.MainCode.GDBackButtonObjects2.length = 0;
gdjs.MainCode.GDBackButtonObjects3.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);
gdjs.MainCode.GDStarsEmitterObjects1.length = 0;
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;
gdjs.MainCode.GDStarsEmitterObjects3.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MainCode.GDRewardTextObjects1.length = 0;
gdjs.MainCode.GDRewardTextObjects2.length = 0;
gdjs.MainCode.GDRewardTextObjects3.length = 0;
gdjs.MainCode.GDRewardText2Objects1.length = 0;
gdjs.MainCode.GDRewardText2Objects2.length = 0;
gdjs.MainCode.GDRewardText2Objects3.length = 0;
gdjs.MainCode.GDAntiClickerObjects1.length = 0;
gdjs.MainCode.GDAntiClickerObjects2.length = 0;
gdjs.MainCode.GDAntiClickerObjects3.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects1.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects2.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects3.length = 0;
gdjs.MainCode.GDShopButtonObjects1.length = 0;
gdjs.MainCode.GDShopButtonObjects2.length = 0;
gdjs.MainCode.GDShopButtonObjects3.length = 0;
gdjs.MainCode.GDGameButtonObjects1.length = 0;
gdjs.MainCode.GDGameButtonObjects2.length = 0;
gdjs.MainCode.GDGameButtonObjects3.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects3.length = 0;
gdjs.MainCode.GDIDtextObjects1.length = 0;
gdjs.MainCode.GDIDtextObjects2.length = 0;
gdjs.MainCode.GDIDtextObjects3.length = 0;
gdjs.MainCode.GDBGObjects1.length = 0;
gdjs.MainCode.GDBGObjects2.length = 0;
gdjs.MainCode.GDBGObjects3.length = 0;
gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDStarObjects3.length = 0;
gdjs.MainCode.GDBalanceObjects1.length = 0;
gdjs.MainCode.GDBalanceObjects2.length = 0;
gdjs.MainCode.GDBalanceObjects3.length = 0;
gdjs.MainCode.GDBackButtonObjects1.length = 0;
gdjs.MainCode.GDBackButtonObjects2.length = 0;
gdjs.MainCode.GDBackButtonObjects3.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
