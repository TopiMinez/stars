gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDStarObjects1= [];
gdjs.MainCode.GDStarObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.MainCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.MainCode.GDStarsEmitterObjects1= [];
gdjs.MainCode.GDStarsEmitterObjects2= [];
gdjs.MainCode.GDNewTiledSpriteObjects1= [];
gdjs.MainCode.GDNewTiledSpriteObjects2= [];
gdjs.MainCode.GDRewardTextObjects1= [];
gdjs.MainCode.GDRewardTextObjects2= [];
gdjs.MainCode.GDRewardText2Objects1= [];
gdjs.MainCode.GDRewardText2Objects2= [];
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1= [];
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.MainCode.GDStarObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects1Objects = Hashtable.newFrom({"StarsEmitter": gdjs.MainCode.GDStarsEmitterObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.MainCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.MainCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.MainCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Reward"));
}
}
if (isConditionTrue_0) {
gdjs.MainCode.GDStarsEmitterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStarsEmitterObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(0.00001);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "Starss", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 5)));
}
}}

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
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "rwm", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Reward");
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "Starss", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow2"), gdjs.MainCode.GDPurpleButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPurpleButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPurpleButtonWithShadow2Objects1[k] = gdjs.MainCode.GDPurpleButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Reward");
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MainCode.GDStarsEmitterObjects1.length = 0;
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDRewardTextObjects1.length = 0;
gdjs.MainCode.GDRewardTextObjects2.length = 0;
gdjs.MainCode.GDRewardText2Objects1.length = 0;
gdjs.MainCode.GDRewardText2Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDStarObjects1.length = 0;
gdjs.MainCode.GDStarObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MainCode.GDStarsEmitterObjects1.length = 0;
gdjs.MainCode.GDStarsEmitterObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDRewardTextObjects1.length = 0;
gdjs.MainCode.GDRewardTextObjects2.length = 0;
gdjs.MainCode.GDRewardText2Objects1.length = 0;
gdjs.MainCode.GDRewardText2Objects2.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.MainCode.GDPurpleButtonWithShadow2Objects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
