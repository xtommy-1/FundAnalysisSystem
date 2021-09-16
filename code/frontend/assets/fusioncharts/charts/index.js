import Column2D from "../viz/column2d";import Column3D from "../viz/column3d";import Line from "../viz/line";import Area from "../viz/area2d";import Bar2D from "../viz/bar2d";import Bar3D from "../viz/bar3d";import Pie2D from "../viz/pie2d";import Pie3D from "../viz/pie3d";import Doughnut2D from "../viz/doughnut2d";import Doughnut3D from "../viz/doughnut3d";import Pareto2D from "../viz/pareto2d";import Pareto3D from "../viz/pareto3d";import ScrollCombiDy2D from "../viz/scrollcombidy2d";import ScrollCombi2D from "../viz/scrollcombi2d";import ScrollStackedColumn2D from "../viz/scrollstackedcolumn2d";import ScrollMSStackedColumn2D from "../viz/scrollmsstackedcolumn2d";import ScrollMSStackedColumn2dLineDY from "../viz/scrollmsstackedcolumn2dlinedy";import ScrollStackedBar2D from "../viz/scrollstackedbar2d";import ScrollArea2D from "../viz/scrollarea2d";import ScrollLine2D from "../viz/scrollline2d";import ScrollColumn2D from "../viz/scrollcolumn2d";import ScrollBar2D from "../viz/scrollbar2d";import Bubble from "../viz/bubble";import Scatter from "../viz/scatter";import MSStackedColumn2D from "../viz/msstackedcolumn2d";import StackedArea2D from "../viz/stackedarea2d";import StackedBar3D from "../viz/stackedbar3d";import StackedBar2D from "../viz/stackedbar2d";import StackedColumn3D from "../viz/stackedcolumn3d";import StackedColumn2D from "../viz/stackedcolumn2d";import MSStackedColumn2DLineDy from "../viz/msstackedcolumn2dlinedy";import StackedColumn3DLineDy from "../viz/stackedcolumn3dlinedy";import MSColumn3DLineDy from "../viz/mscolumn3dlinedy";import MSCombidy2D from "../viz/mscombidy2d";import MSCombidy3D from "../viz/mscombidy3d";import StackedColumn3DLine from "../viz/stackedcolumn3dline";import StackedColumn2DLine from "../viz/stackedcolumn2dline";import MSColumnLine3D from "../viz/mscolumnline3d";import MSCombi3D from "../viz/mscombi3d";import MSCombi2D from "../viz/mscombi2d";import Marimekko from "../viz/marimekko";import MSArea from "../viz/msarea";import MSBar3D from "../viz/msbar3d";import MSBar2D from "../viz/msbar2d";import MSLine from "../viz/msline";import MSColumn3D from "../viz/mscolumn3d";import MSColumn2D from "../viz/mscolumn2d";import Spline from "../viz/spline";import Splinearea from "../viz/splinearea";import Msspline from "../viz/msspline";import MSSplineDy from "../viz/mssplinedy";import Mssplinearea from "../viz/mssplinearea";import StackedColumn2DLineDy from "../viz/stackedcolumn2dlinedy";import StackedArea2DLineDy from "../viz/stackedarea2dlinedy";export{Column2D,Column3D,Line,Area,Bar2D,Bar3D,Pie2D,Pie3D,Doughnut2D,Doughnut3D,Pareto2D,Pareto3D,ScrollCombiDy2D,ScrollCombi2D,ScrollStackedColumn2D,ScrollMSStackedColumn2D,ScrollMSStackedColumn2dLineDY,ScrollStackedBar2D,ScrollArea2D,ScrollLine2D,ScrollColumn2D,ScrollBar2D,Bubble,Scatter,MSStackedColumn2D,StackedArea2D,StackedBar3D,StackedBar2D,StackedColumn3D,StackedColumn2D,MSStackedColumn2DLineDy,StackedColumn2DLineDy,StackedArea2DLineDy,StackedColumn3DLineDy,MSColumn3DLineDy,MSCombidy2D,MSCombidy3D,StackedColumn3DLine,StackedColumn2DLine,MSColumnLine3D,MSCombi3D,MSCombi2D,Marimekko,MSArea,MSBar3D,MSBar2D,MSLine,MSColumn3D,MSColumn2D,Spline,Splinearea,MSSplineDy,Msspline,Mssplinearea};export default{name:"charts",type:"package",requiresFusionCharts:true,extension:FusionCharts=>{FusionCharts.addDep(Column2D);FusionCharts.addDep(Column3D);FusionCharts.addDep(Line);FusionCharts.addDep(Area);FusionCharts.addDep(Bar2D);FusionCharts.addDep(Bar3D);FusionCharts.addDep(Pie2D);FusionCharts.addDep(Pie3D);FusionCharts.addDep(Doughnut2D);FusionCharts.addDep(Doughnut3D);FusionCharts.addDep(Pareto2D);FusionCharts.addDep(Pareto3D);FusionCharts.addDep(ScrollCombiDy2D);FusionCharts.addDep(ScrollCombi2D);FusionCharts.addDep(ScrollStackedColumn2D);FusionCharts.addDep(ScrollMSStackedColumn2D);FusionCharts.addDep(ScrollMSStackedColumn2dLineDY);FusionCharts.addDep(ScrollStackedBar2D);FusionCharts.addDep(ScrollArea2D);FusionCharts.addDep(ScrollLine2D);FusionCharts.addDep(ScrollColumn2D);FusionCharts.addDep(ScrollBar2D);FusionCharts.addDep(Bubble);FusionCharts.addDep(Scatter);FusionCharts.addDep(MSStackedColumn2D);FusionCharts.addDep(StackedArea2D);FusionCharts.addDep(StackedBar3D);FusionCharts.addDep(StackedBar2D);FusionCharts.addDep(StackedColumn3D);FusionCharts.addDep(StackedColumn2D);FusionCharts.addDep(MSStackedColumn2DLineDy);FusionCharts.addDep(StackedColumn3DLineDy);FusionCharts.addDep(StackedColumn2DLineDy);FusionCharts.addDep(StackedArea2DLineDy);FusionCharts.addDep(MSColumn3DLineDy);FusionCharts.addDep(MSCombidy2D);FusionCharts.addDep(MSCombidy3D);FusionCharts.addDep(StackedColumn3DLine);FusionCharts.addDep(StackedColumn2DLine);FusionCharts.addDep(MSColumnLine3D);FusionCharts.addDep(MSCombi3D);FusionCharts.addDep(MSCombi2D);FusionCharts.addDep(Marimekko);FusionCharts.addDep(MSArea);FusionCharts.addDep(MSBar3D);FusionCharts.addDep(MSBar2D);FusionCharts.addDep(MSLine);FusionCharts.addDep(MSColumn3D);FusionCharts.addDep(MSColumn2D);FusionCharts.addDep(Spline);FusionCharts.addDep(Splinearea);FusionCharts.addDep(MSSplineDy);FusionCharts.addDep(Msspline);FusionCharts.addDep(Mssplinearea)}};
