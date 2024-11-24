gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDInfoObjects1= [];
gdjs.ShopCode.GDInfoObjects2= [];
gdjs.ShopCode.GDBackButtonObjects1= [];
gdjs.ShopCode.GDBackButtonObjects2= [];
gdjs.ShopCode.GDBGObjects1= [];
gdjs.ShopCode.GDBGObjects2= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.ShopCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBackButtonObjects1[k] = gdjs.ShopCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDInfoObjects1.length = 0;
gdjs.ShopCode.GDInfoObjects2.length = 0;
gdjs.ShopCode.GDBackButtonObjects1.length = 0;
gdjs.ShopCode.GDBackButtonObjects2.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
gdjs.ShopCode.GDInfoObjects1.length = 0;
gdjs.ShopCode.GDInfoObjects2.length = 0;
gdjs.ShopCode.GDBackButtonObjects1.length = 0;
gdjs.ShopCode.GDBackButtonObjects2.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
