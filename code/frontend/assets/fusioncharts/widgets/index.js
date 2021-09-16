import Bulb from "../viz/bulb";import Cylinder from "../viz/cylinder";import AngularGauge from "../viz/angulargauge";import Hled from "../viz/hled";import Vled from "../viz/vled";import Hlineargauge from "../viz/hlineargauge";import Thermometer from "../viz/thermometer";import SparkLine from "../viz/sparkline";import SparkColumn from "../viz/sparkcolumn";import SparkWinLoss from "../viz/sparkwinloss";import RealTimeArea from "../viz/realtimearea";import RealTimeColumn from "../viz/realtimecolumn";import RealTimeLine from "../viz/realtimeline";import RealTimeStackedArea from "../viz/realtimestackedarea";import RealTimeStackedColumn from "../viz/realtimestackedcolumn";import RealTimeLineDY from "../viz/realtimelinedy";import HorizontalBullet from "../viz/hbullet";import VerticalBullet from "../viz/vbullet";import Funnel from "../viz/funnel";import Pyramid from "../viz/pyramid";import RadialBar from "../viz/radialbar";import DataStreamer from"@fusioncharts/widgets/src/chart/_internal/datastreamer";export{AngularGauge,Bulb,Cylinder,Hled,Vled,Hlineargauge,Thermometer,SparkLine,SparkColumn,SparkWinLoss,RealTimeArea,RealTimeColumn,RealTimeLine,RealTimeStackedArea,RealTimeStackedColumn,RealTimeLineDY,HorizontalBullet,VerticalBullet,Funnel,Pyramid,RadialBar};export default{name:"widgets",type:"package",requiresFusionCharts:true,extension:FusionCharts=>{FusionCharts.addDep(DataStreamer);FusionCharts.addDep(AngularGauge);FusionCharts.addDep(Bulb);FusionCharts.addDep(Cylinder);FusionCharts.addDep(Hled);FusionCharts.addDep(Vled);FusionCharts.addDep(Hlineargauge);FusionCharts.addDep(Thermometer);FusionCharts.addDep(SparkLine);FusionCharts.addDep(SparkColumn);FusionCharts.addDep(SparkWinLoss);FusionCharts.addDep(RealTimeArea);FusionCharts.addDep(RealTimeColumn);FusionCharts.addDep(RealTimeLine);FusionCharts.addDep(RealTimeStackedArea);FusionCharts.addDep(RealTimeStackedColumn);FusionCharts.addDep(RealTimeLineDY);FusionCharts.addDep(HorizontalBullet);FusionCharts.addDep(VerticalBullet);FusionCharts.addDep(Funnel);FusionCharts.addDep(Pyramid);FusionCharts.addDep(RadialBar)}};
