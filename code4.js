gdjs.MiniGameCode = {};
gdjs.MiniGameCode.localVariables = [];
gdjs.MiniGameCode.GDNewTextObjects1= [];
gdjs.MiniGameCode.GDNewTextObjects2= [];
gdjs.MiniGameCode.GDSnowmanObjects1= [];
gdjs.MiniGameCode.GDSnowmanObjects2= [];
gdjs.MiniGameCode.GDYellowJellyButtonObjects1= [];
gdjs.MiniGameCode.GDYellowJellyButtonObjects2= [];
gdjs.MiniGameCode.GDTimeObjects1= [];
gdjs.MiniGameCode.GDTimeObjects2= [];
gdjs.MiniGameCode.GDNewSpriteObjects1= [];
gdjs.MiniGameCode.GDNewSpriteObjects2= [];
gdjs.MiniGameCode.GDBGObjects1= [];
gdjs.MiniGameCode.GDBGObjects2= [];
gdjs.MiniGameCode.GDStarObjects1= [];
gdjs.MiniGameCode.GDStarObjects2= [];
gdjs.MiniGameCode.GDBalanceObjects1= [];
gdjs.MiniGameCode.GDBalanceObjects2= [];
gdjs.MiniGameCode.GDBackButtonObjects1= [];
gdjs.MiniGameCode.GDBackButtonObjects2= [];


gdjs.MiniGameCode.mapOfGDgdjs_9546MiniGameCode_9546GDSnowmanObjects1Objects = Hashtable.newFrom({"Snowman": gdjs.MiniGameCode.GDSnowmanObjects1});
gdjs.MiniGameCode.mapOfGDgdjs_9546MiniGameCode_9546GDSnowmanObjects1Objects = Hashtable.newFrom({"Snowman": gdjs.MiniGameCode.GDSnowmanObjects1});
gdjs.MiniGameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Snowman"), gdjs.MiniGameCode.GDSnowmanObjects1);
{for(var i = 0, len = gdjs.MiniGameCode.GDSnowmanObjects1.length ;i < len;++i) {
    gdjs.MiniGameCode.GDSnowmanObjects1[i].getBehavior("Resizable").setSize(250, 250);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}{gdjs.evtsExt__GamePushAds__ShowFullscreen.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.MiniGameCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MiniGameCode.GDYellowJellyButtonObjects1.length;i<l;++i) {
    if ( gdjs.MiniGameCode.GDYellowJellyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MiniGameCode.GDYellowJellyButtonObjects1[k] = gdjs.MiniGameCode.GDYellowJellyButtonObjects1[i];
        ++k;
    }
}
gdjs.MiniGameCode.GDYellowJellyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Play");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Play");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn") >= 0.25;
if (isConditionTrue_0) {
gdjs.MiniGameCode.GDSnowmanObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MiniGameCode.mapOfGDgdjs_9546MiniGameCode_9546GDSnowmanObjects1Objects, gdjs.randomInRange(100, 650), -(100), "");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Snowman"), gdjs.MiniGameCode.GDSnowmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.MiniGameCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.MiniGameCode.GDSnowmanObjects1.length ;i < len;++i) {
    gdjs.MiniGameCode.GDSnowmanObjects1[i].addForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.MiniGameCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.MiniGameCode.GDTimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(15 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time"), 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snowman"), gdjs.MiniGameCode.GDSnowmanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGameCode.mapOfGDgdjs_9546MiniGameCode_9546GDSnowmanObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MiniGameCode.GDSnowmanObjects1 */
{for(var i = 0, len = gdjs.MiniGameCode.GDSnowmanObjects1.length ;i < len;++i) {
    gdjs.MiniGameCode.GDSnowmanObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(0.002);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "0", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.MiniGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MiniGameCode.GDNewTextObjects1.length = 0;
gdjs.MiniGameCode.GDNewTextObjects2.length = 0;
gdjs.MiniGameCode.GDSnowmanObjects1.length = 0;
gdjs.MiniGameCode.GDSnowmanObjects2.length = 0;
gdjs.MiniGameCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.MiniGameCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.MiniGameCode.GDTimeObjects1.length = 0;
gdjs.MiniGameCode.GDTimeObjects2.length = 0;
gdjs.MiniGameCode.GDNewSpriteObjects1.length = 0;
gdjs.MiniGameCode.GDNewSpriteObjects2.length = 0;
gdjs.MiniGameCode.GDBGObjects1.length = 0;
gdjs.MiniGameCode.GDBGObjects2.length = 0;
gdjs.MiniGameCode.GDStarObjects1.length = 0;
gdjs.MiniGameCode.GDStarObjects2.length = 0;
gdjs.MiniGameCode.GDBalanceObjects1.length = 0;
gdjs.MiniGameCode.GDBalanceObjects2.length = 0;
gdjs.MiniGameCode.GDBackButtonObjects1.length = 0;
gdjs.MiniGameCode.GDBackButtonObjects2.length = 0;

gdjs.MiniGameCode.eventsList0(runtimeScene);
gdjs.MiniGameCode.GDNewTextObjects1.length = 0;
gdjs.MiniGameCode.GDNewTextObjects2.length = 0;
gdjs.MiniGameCode.GDSnowmanObjects1.length = 0;
gdjs.MiniGameCode.GDSnowmanObjects2.length = 0;
gdjs.MiniGameCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.MiniGameCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.MiniGameCode.GDTimeObjects1.length = 0;
gdjs.MiniGameCode.GDTimeObjects2.length = 0;
gdjs.MiniGameCode.GDNewSpriteObjects1.length = 0;
gdjs.MiniGameCode.GDNewSpriteObjects2.length = 0;
gdjs.MiniGameCode.GDBGObjects1.length = 0;
gdjs.MiniGameCode.GDBGObjects2.length = 0;
gdjs.MiniGameCode.GDStarObjects1.length = 0;
gdjs.MiniGameCode.GDStarObjects2.length = 0;
gdjs.MiniGameCode.GDBalanceObjects1.length = 0;
gdjs.MiniGameCode.GDBalanceObjects2.length = 0;
gdjs.MiniGameCode.GDBackButtonObjects1.length = 0;
gdjs.MiniGameCode.GDBackButtonObjects2.length = 0;


return;

}

gdjs['MiniGameCode'] = gdjs.MiniGameCode;
