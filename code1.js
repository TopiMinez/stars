gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDStarObjects1= [];
gdjs.MainCode.GDStarObjects2= [];
gdjs.MainCode.GDStarObjects3= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDNewTextObjects3= [];
gdjs.MainCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.MainCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.MainCode.GDPurpleButtonWithShadowObjects3= [];
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
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1= [];
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2= [];
gdjs.MainCode.GDPurpleButtonWithShadow2Objects3= [];
gdjs.MainCode.GDAntiClickerObjects1= [];
gdjs.MainCode.GDAntiClickerObjects2= [];
gdjs.MainCode.GDAntiClickerObjects3= [];
gdjs.MainCode.GDPurpleButtonWithShadow3Objects1= [];
gdjs.MainCode.GDPurpleButtonWithShadow3Objects2= [];
gdjs.MainCode.GDPurpleButtonWithShadow3Objects3= [];
gdjs.MainCode.GDBlueFlatBarObjects1= [];
gdjs.MainCode.GDBlueFlatBarObjects2= [];
gdjs.MainCode.GDBlueFlatBarObjects3= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.MainCode.GDStarObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects2Objects = Hashtable.newFrom({"StarsEmitter": gdjs.MainCode.GDStarsEmitterObjects2});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.MainCode.GDPurpleButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDPurpleButtonWithShadowObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPurpleButtonWithShadowObjects2[k] = gdjs.MainCode.GDPurpleButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length = k;
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
}
}
}
if (isConditionTrue_0) {
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(0.00001);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "Stars", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow2"), gdjs.MainCode.GDPurpleButtonWithShadow2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDPurpleButtonWithShadow2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPurpleButtonWithShadow2Objects2[k] = gdjs.MainCode.GDPurpleButtonWithShadow2Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Anti"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Reward");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AntiClicker"), gdjs.MainCode.GDAntiClickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueFlatBar"), gdjs.MainCode.GDBlueFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 5)));
}
}{for(var i = 0, len = gdjs.MainCode.GDAntiClickerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDAntiClickerObjects1[i].getBehavior("Text").setText("Авто-кликер запрещен. (" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "/3)");
}
}{for(var i = 0, len = gdjs.MainCode.GDBlueFlatBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFlatBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "anti") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= 15;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "anti");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "anti") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 21;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Anti");
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "war", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "anti");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 3;
}
if (isConditionTrue_0) {
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 20707436;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "rw", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Reward");
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "Stars", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "anti");
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDStarObjects3.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects3.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects3.length = 0;
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
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects3.length = 0;
gdjs.MainCode.GDAntiClickerObjects1.length = 0;
gdjs.MainCode.GDAntiClickerObjects2.length = 0;
gdjs.MainCode.GDAntiClickerObjects3.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects3.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects1.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects2.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects3.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);
gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDStarObjects3.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects3.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects3.length = 0;
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
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects3.length = 0;
gdjs.MainCode.GDAntiClickerObjects1.length = 0;
gdjs.MainCode.GDAntiClickerObjects2.length = 0;
gdjs.MainCode.GDAntiClickerObjects3.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow3Objects3.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects1.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects2.length = 0;
gdjs.MainCode.GDBlueFlatBarObjects3.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
