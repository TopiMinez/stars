gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDStarObjects1= [];
gdjs.ShopCode.GDStarObjects2= [];
gdjs.ShopCode.GDBalanceObjects1= [];
gdjs.ShopCode.GDBalanceObjects2= [];
gdjs.ShopCode.GDButtonObjects1= [];
gdjs.ShopCode.GDButtonObjects2= [];
gdjs.ShopCode.GDBearObjects1= [];
gdjs.ShopCode.GDBearObjects2= [];
gdjs.ShopCode.GDBorderObjects1= [];
gdjs.ShopCode.GDBorderObjects2= [];
gdjs.ShopCode.GDFlowersObjects1= [];
gdjs.ShopCode.GDFlowersObjects2= [];
gdjs.ShopCode.GDNewTiledSpriteObjects1= [];
gdjs.ShopCode.GDNewTiledSpriteObjects2= [];
gdjs.ShopCode.GDPriceObjects1= [];
gdjs.ShopCode.GDPriceObjects2= [];
gdjs.ShopCode.GDStar_9595BuyObjects1= [];
gdjs.ShopCode.GDStar_9595BuyObjects2= [];
gdjs.ShopCode.GDIDtextObjects1= [];
gdjs.ShopCode.GDIDtextObjects2= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bear"), gdjs.ShopCode.GDBearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flowers"), gdjs.ShopCode.GDFlowersObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDBearObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBearObjects1[i].play();
}
}{for(var i = 0, len = gdjs.ShopCode.GDFlowersObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDFlowersObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.ShopCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDButtonObjects1[k] = gdjs.ShopCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.ShopCode.GDBalanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("IDtext"), gdjs.ShopCode.GDIDtextObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 5)));
}
}{for(var i = 0, len = gdjs.ShopCode.GDIDtextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDIDtextObjects1[i].getBehavior("Text").setText("UID " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.ShopCode.GDPriceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDPriceObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDPriceObjects1[i].getVariableNumber(gdjs.ShopCode.GDPriceObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDPriceObjects1[k] = gdjs.ShopCode.GDPriceObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDPriceObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDPriceObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriceObjects1[i].getBehavior("Text").setText("43");
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDStarObjects1.length = 0;
gdjs.ShopCode.GDStarObjects2.length = 0;
gdjs.ShopCode.GDBalanceObjects1.length = 0;
gdjs.ShopCode.GDBalanceObjects2.length = 0;
gdjs.ShopCode.GDButtonObjects1.length = 0;
gdjs.ShopCode.GDButtonObjects2.length = 0;
gdjs.ShopCode.GDBearObjects1.length = 0;
gdjs.ShopCode.GDBearObjects2.length = 0;
gdjs.ShopCode.GDBorderObjects1.length = 0;
gdjs.ShopCode.GDBorderObjects2.length = 0;
gdjs.ShopCode.GDFlowersObjects1.length = 0;
gdjs.ShopCode.GDFlowersObjects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDStar_9595BuyObjects1.length = 0;
gdjs.ShopCode.GDStar_9595BuyObjects2.length = 0;
gdjs.ShopCode.GDIDtextObjects1.length = 0;
gdjs.ShopCode.GDIDtextObjects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
gdjs.ShopCode.GDStarObjects1.length = 0;
gdjs.ShopCode.GDStarObjects2.length = 0;
gdjs.ShopCode.GDBalanceObjects1.length = 0;
gdjs.ShopCode.GDBalanceObjects2.length = 0;
gdjs.ShopCode.GDButtonObjects1.length = 0;
gdjs.ShopCode.GDButtonObjects2.length = 0;
gdjs.ShopCode.GDBearObjects1.length = 0;
gdjs.ShopCode.GDBearObjects2.length = 0;
gdjs.ShopCode.GDBorderObjects1.length = 0;
gdjs.ShopCode.GDBorderObjects2.length = 0;
gdjs.ShopCode.GDFlowersObjects1.length = 0;
gdjs.ShopCode.GDFlowersObjects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDStar_9595BuyObjects1.length = 0;
gdjs.ShopCode.GDStar_9595BuyObjects2.length = 0;
gdjs.ShopCode.GDIDtextObjects1.length = 0;
gdjs.ShopCode.GDIDtextObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
