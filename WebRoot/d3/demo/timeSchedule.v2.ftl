<!--
  @author      ZhengWei(HY)
  @createDate  2018-11-01
  @version     v1.0
-->
<!DOCTYPE html>
<html>
<head>

	<title>时间进度页面</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<script type="text/javascript" charset="utf-8" src="../d3/d3.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="../jquery/jquery.min.js" ></script>
	<script type="text/javascript" charset="utf-8" src="../jquery/jquery-ui.min.js"></script>
	
	<link rel="stylesheet" href="../jquery/jquery-ui.min.css" />
	
	<style type="text/css">
	body {
	  font-family: 'Open Sans', sans-serif;
	  font-size: 12px;
	  font-weight: 400;
	  background-color: #fff;
	}
	
	#workingTimesTooltip {
		background: white;
	    display: inline-block;
	    position: absolute;
	    padding: 0px 0px;
	    border-radius: 0px;
	    border: 0px solid #DDD;
	    z-index: 99999;
		opacity: 0;
	}
	
	#videoTooltip {
		background: white;
	    display: inline-block;
	    position: absolute;
	    padding: 5px 5px;
	    margin: 0px;
	    border-radius: 5px;
	    border: 1px solid #DDD;
	   	z-index: 99999;
		opacity: 0;
	}
	
	#openVideo {
		background: white;
	    display: inline-block;
	    position: absolute;
	    padding: 5px 5px;
	    margin: 0px;
	   	z-index: 99999;
		opacity: 0;
	}
	
	.frameClass {
		padding: 0px; 
		margin: 0px;
	}
	
	#progressbar .ui-progressbar {
    	position: relative;
	}
	
	.ui-progressbar-value {
		background: #6AB975;
	}
	
	.progress-label {
		position: absolute;
		left: 25%;
		top: 1px;
		text-shadow: 1px 1px 0 #fff;
	}
	</style>
	
</head>
<body>

	<svg width="2000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
	
		<defs>
		
			<filter id="shadow">
		        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur>
		        <feOffset in="blur" dx="2" dy="2" result="offset"></feOffset>
		        <feMerge>
		        <feMergeNode in="offset"></feMergeNode>
		        <feMergeNode in="SourceGraphic"></feMergeNode>
		        </feMerge>
	        </filter>
	        
		</defs>
		
	</svg>
	
	<div id="workingTimesTooltip"></div>
	<div id="videoTooltip"></div>
	

<script type="text/javascript">

var v_Images = {
				 "合同评审" : "node001.png"
				,"排产确认" : "node002.png"
				,"商品计划" : "node003.png"
				,"产品设计" : "node004.png"
				,"工艺设计" : "node005.png"
				,"零件计划" : "node006.png"
				,"生产计划" : "node014.png"
				,"外购件"   : "node007.png"
				,"外购阀门" : "node008.png"
				,"铸造"    : "node015.png"
				,"零件精加" : "node009.png"
				,"装配"    : "node010.png"
				,"入库"    : "node011.png"
				,"采机加件" : "node012.png"
			    ,"采装配件" : "node013.png"
				,"入库"    : "node011.png"
				,"包装发运" : "node999.png"
               };
var v_Colors = {
				"finish":  "#6AB975",
				"working": "#FFB941",
				"timeout": "#FF4444",
				"wait":    "#BBBBBB"
		       };
var v_Schedules = ${root}.datas;
var b           = {w:50 ,h:51 ,s:3 ,t:10 ,l:120 ,top:50 ,r:16};
var v_SVG       = d3.select("body").select("svg").attr("width" ,(v_Schedules.length * b.w + 200));
var v_GEnter    = v_SVG.selectAll("g").data(v_Schedules).enter();
var v_OldData   = null;
var v_OldG      = null;



function getNodeName(i_NodeName)
{
	var v_Ret = i_NodeName;
	
	if ( v_Ret == "商品计划下达" )
	{
		v_Ret = "商品计划";
	}
	else if ( v_Ret == "零件计划下达" )
	{
		v_Ret = "零件计划";
	}
	else if ( v_Ret == "零件加工" )
	{
		v_Ret = "零件精加";
	}
	else if ( v_Ret == "零件精加工" )
	{
		v_Ret = "零件精加";
	}
	else if ( v_Ret == "采购_1" )
	{
		v_Ret = "采机加件";
	}
	else if ( v_Ret == "采购_2" )
	{
		v_Ret = "采装配件";
	}
	
	return v_Ret;
}



function getNodeImage(i_NodeName)
{
	var v_Ret = v_Images[i_NodeName];
	
	if ( v_Ret == null )
	{
		v_Ret = "node000.png";
	}
	
	return v_Ret;
}



function breadcrumbPoints(d ,i)
{
	var points = [];
	points.push("0,0");
	points.push(b.w + ",0");
	points.push(b.w + b.t + "," + (b.h / 2));
	points.push(b.w + "," + b.h);
	points.push("0," + b.h);
	if ( i > 0 )
	{ 
		points.push(b.t + "," + (b.h / 2));
	}
	return points.join(" ");
}



v_GEnter.append("g")
.attr("class" ,"ScheduleClass")
.attr("transform", function(d ,i) 
{
    return "translate(" + b.l + "," + (i * (b.w + b.s) + b.top) + ")";
});

v_SVG.selectAll("g").data(v_Schedules).each(function(d ,i)
{
	var v_MyG = d3.select(this);
	
	/* 阶段图框 */
	d3.select(this).append("circle")
	.attr("r" ,b.r)
	.style("fill"  ,function(d ,i)
	{
		if ( d.finishPercentage >= 100 )
		{
			return v_Colors.finish;
		}
		else if ( d.finishPercentage >= 0 )
		{
			return v_Colors.working;
		}
		else
		{
			return v_Colors.wait;
		}
	});
	
	/* 阶段图标 */
	d3.select(this).append("image")
	.attr("xlink:href" ,function()
	{
		return "../images/rs/" + getNodeImage(getNodeName(d.mainTask));		
	})
	.attr("x" ,-9)
	.attr("y" ,-9)
	.attr("height" ,"18px")
	.attr("width"  ,"18px");
	
	/* 阶段间的连接线 */
	if ( i > 0 )
	{
		d3.select(this).append("line")
		.attr("x1" ,0)
		.attr("y1" ,-(b.w + b.s - b.r))
		.attr("x2" ,0)
		.attr("y2" ,-15)
		.attr("stroke-width" ,2)
		.attr("stroke" ,function()
		{
			if ( d.finishPercentage >= 100 )
			{
				return v_Colors.finish;
			}
			else if ( d.finishPercentage >= 0 )
			{
				return v_Colors.working;
			}
			else
			{
				return v_Colors.wait;
			}	
		});
	}
	
	/* 阶段前的时间（计划开始时间、实际开始时间） */
	d3.select(this).append("text")
	.attr("x", -55)
	.attr("y", 4)
	.attr("text-anchor", "middle")
	.attr("font-size" ,"11")
	.attr("fill" ,"black")
	.text(function(d) 
	{ 
		if ( d.state == "canceled" )
		{
			return "已取消"; 
		}
		else
		{
			if ( 0 > d.finishPercentage )
			{
				return d.planStartTime;
			}
			else if ( 0 <= d.finishPercentage && d.finishPercentage < 100 )
			{
				return d.startTime; 
			}
			else
			{
				return d.startTime; 
			}
		}
	});
	
	/* 阶段名称 */
	d3.select(this).append("text")
	.attr("x", (b.r + b.s * 3))
	.attr("y", 4)
	.attr("text-anchor", "left")
	.attr("font-weight" ,"bold")
	.attr("fill" ,"Black")
	.text(function(d) 
	{ 
		var v_Title = getNodeName(d.mainTask);
		
		if ( 0 > d.finishPercentage || d.state == "canceled" )
		{
			return v_Title;
		}
		else if ( 0 <= d.finishPercentage && d.finishPercentage < 100 )
		{
			return v_Title + " " + Math.floor(d.finishPercentage) + "%"; 
		}
		else
		{
			return v_Title; 
		}
	});
	
	/* 阶段时间 */
	d3.select(this).append("text")
	.attr("x", (b.r + b.s * 3) + 100)
	.attr("y", 4)
	.attr("text-anchor", "left")
	.attr("fill" ,v_Colors.wait)
	.text(function(d) 
	{ 
		if ( d.state == "canceled" )
		{
			return "";
		}
		else if ( 0 > d.finishPercentage )
		{
			return "计划开始时间：" + d.planStartTime; 
		}
		else if ( 0 <= d.finishPercentage && d.finishPercentage < 100 )
		{
			return "计划完成时间：" + d.planEndTime; 
		}
		else
		{
			return "实际完成时间：" + d.endTime; 
		}
	});
	
	if ( d.state != "canceled" )
	{
		/* 阶段文档 */
		d3.select(this).append("text")
		.attr("x", (b.r + b.s * 3) + 270)
		.attr("y", 4)
		.attr("text-anchor", "left")
		.attr("fill" ,v_Colors.working)
		.style("cursor" ,"pointer")
		.text("阶段文档")
		.on("click" ,function()
		{
			window.open('showDocumentList.z?contractNo=${orderNo}&businessStage=' + d.code ,"_blank");	
		});
	}
	
	/* 阶段视频 */
	if ( d.state != "canceled" && 0 <= d.finishPercentage && d.finishPercentage < 100 && d.ipAddress != "" )
	{
		d3.select(this).append("text")
		.attr("x", (b.r + b.s * 3) + 270 + 70)
		.attr("y", 4)
		.attr("text-anchor", "left")
		.attr("fill" ,v_Colors.working)
		.style("cursor" ,"pointer")
		.text("阶段视频")
		.on("click" ,function()
		{
			openVideo(560 ,(i * (b.w + b.s) + b.top) - 30 ,d.code);	
		});
	}
});



function showTooltips(i_MyG ,d ,i ,i_IsTransition)
{
	if ( v_OldG != null )
	{
		v_OldG.selectAll("rect").remove();
		v_OldG.selectAll("line").remove();
		d3.select("#videoTooltip").selectAll("a").remove();
		d3.select("#videoTooltip").selectAll("iframe").remove();
		
		$("#workingTimesTooltip").css("opacity" ,0);
		$("#videoTooltip")       .css("opacity" ,0);
	}
	v_OldG = i_MyG;
		
	var v_Width        = 235;
	var v_Height       = 200;
	var v_Space        = 30;                  /* 与进度块的间隔 */
	var v_WidthPadding = (v_Width - b.w) / 2; /* 相对于进度块两边各扩展的宽度 */
	var v_Radius       = 8;                   /* 圆角大小 */
	var v_StrokeWidth  = 3;
	var v_LineColor    = (d.finishPercentage < 100) ? v_Colors.working : v_Colors.finish;
	
	/* 上位引线框 */
	var v_Rect = i_MyG.append("rect")
	.attr("fill" ,"white")
	.attr("stroke" ,v_LineColor)
	.attr("stroke-width" ,v_StrokeWidth)
	.attr("width" ,v_Width)
	.attr("height" ,v_Height)
	.attr("rx" ,v_Radius) 
	.attr("ry" ,v_Radius) 
	.attr("x" ,function()
	{
		return -v_WidthPadding;	
	})
	.attr("y" ,function()
	{
		return (v_Space + v_Height) * -1;	
	});
	
	if ( i_IsTransition )
	{
		v_Rect.attr("opacity" ,0)
		.transition()
		.duration(2000)
		.attr("opacity" ,1);
	}
	
	
	/* 上位引线框的遮盖线 */
	i_MyG.append("line")
	.attr("fill" ,"white")
	.attr("stroke" ,"white")
	.attr("stroke-width" ,v_StrokeWidth + 1)
	.attr("x1" ,(v_WidthPadding) * -1)
	.attr("y1" ,-v_Space)
	.attr("x2" ,(b.w / 2 + 20)) 
	.attr("y2" ,-v_Space);
	
	/* 上位引线框的斜引线 */
	var v_Line = i_MyG.append("line")
	.attr("fill" ,"white")
	.attr("stroke" ,v_LineColor)
	.attr("stroke-width" ,v_StrokeWidth)
	.attr("x1" ,(v_WidthPadding - 2) * -1)
	.attr("y1" ,(v_Space + 2.5) * -1)
	.attr("x2" ,(b.w / 2)) 
	.attr("y2" ,0);
	
	if ( i_IsTransition )
	{
		v_Line.attr("opacity" ,0)
		.transition()
		.duration(2000)
		.attr("opacity" ,1);
	}
	
	$("#workingTimesTooltip").html(makeWorkingTimesTooltipText(d));
	$("#workingTimesTooltip").css("left" ,(i * b.w + i * b.s - 50 + b.l) + "px");    
	$("#workingTimesTooltip").css("top"  ,(b.top - v_Height - v_Space + 15) + "px");
	$("#workingTimesTooltip").css("opacity" ,1);
	
	if ( 0 <= d.finishPercentage && d.finishPercentage < 100 && d.ipAddress != "" )
	{
		/* 下位引线的竖线 */
		i_MyG.append("line")
		.attr("fill" ,"white")
		.attr("stroke" ,v_LineColor)
		.attr("stroke-width" ,v_StrokeWidth)
		.attr("x1" ,(b.w / 2))
		.attr("y1" ,b.h)
		.attr("x2" ,(b.w / 2))
		.attr("y2" ,(b.h + v_Space))
		.attr("opacity" ,0)
		.transition()
		.duration(2000)
		.attr("opacity" ,1);
		
		/* 下位引线的横线 */
		i_MyG.append("line")
		.attr("fill" ,"white")
		.attr("stroke" ,v_LineColor)
		.attr("stroke-width" ,v_StrokeWidth)
		.attr("x1" ,(b.w / 2 + v_WidthPadding) * -1)
		.attr("y1" ,(b.h + v_Space))
		.attr("x2" ,(b.w +  b.w / 2 + v_WidthPadding)) 
		.attr("y2" ,(b.h + v_Space))
		.attr("opacity" ,0)
		.transition()
		.duration(2000)
		.attr("opacity" ,1);
		
		$("#videoTooltip").css("left" ,(i * b.w + i * b.s - 110 + b.l) + "px");   
		$("#videoTooltip").css("top"  ,(b.top + b.h + v_Space + 15) + "px");
		$("#videoTooltip").css("opacity" ,1);
		$("#videoTooltip").css("width" ,"300");
		$("#videoTooltip").css("height" ,"240");
		
		d3.select("#videoTooltip").append("a")
		.attr("id" ,"openVideo")
		.attr("class" ,"ui-button ui-widget ui-corner-all")
		.attr("href" ,"#")
		.text("查看视频")
		.on("click" ,openVideo);
		
		$("#openVideo").css("top" ,"100px");
		$("#openVideo").css("left" ,"110px");
	}
}



/**
 * 延时显示或隐藏对象
 * 
 * @param i_ID            JQuery标记ID
 * @param i_Duration      持续时间
 * @param i_OpacityStart  开始显示值(0~1)
 * @param i_OpacityEnd    结束显示值(0~1)
 */
function opacityTransition(i_ID ,i_Duration ,i_OpacityStart ,i_OpacityEnd)
{
	var v_Step    = Math.abs(i_OpacityEnd - i_OpacityStart) / (i_Duration / 100);
	var v_Opacity = i_OpacityStart + v_Step;
	
	setTimeout(function()
	{
		$(i_ID).css("opacity" ,v_Opacity);
		
		if ( v_Opacity < i_OpacityEnd )
		{
			opacityTransition(i_ID ,i_Duration ,v_Opacity ,i_OpacityEnd);
		}
	} ,100);
}



function openVideo(i_Left ,i_Top ,i_OrderNodeCode)
{
	$("#videoTooltip").css("left" ,i_Left + "px");   
	$("#videoTooltip").css("top"  ,i_Top  + "px");
	$("#videoTooltip").css("opacity" ,1);
	$("#videoTooltip").css("width" ,"300");
	$("#videoTooltip").css("height" ,"240");
	
	d3.select("#videoTooltip").select("iframe").remove();
	d3.select("#videoTooltip").append("iframe")
	.attr("class" ,"frameClass")
	.attr("src" ,"showPlayer.z?orderNo=${orderNo}&orderNodeCode=" + i_OrderNodeCode)
	.attr("width" ,"100%")
	.attr("height" ,"100%")
	.attr("frameborder" ,"0")
	.attr("scrolling" ,"no");
}



function openVideoV1(i_Left ,i_Top)
{
	$("#videoTooltip").css("left" ,i_Left + "px");   
	$("#videoTooltip").css("top"  ,i_Top  + "px");
	$("#videoTooltip").css("opacity" ,1);
	$("#videoTooltip").css("width" ,"300");
	$("#videoTooltip").css("height" ,"240");
	
	d3.select("#videoTooltip").select("iframe").remove();
	d3.select("#videoTooltip").append("iframe")
	.attr("class" ,"frameClass")
	.attr("src" ,"http://10.1.90.23/calc/xt/xt.html?ip=10.1.130.68")
	.attr("width" ,"100%")
	.attr("height" ,"100%")
	.attr("frameborder" ,"0")
	.attr("scrolling" ,"no");
}



function showNodeProgress(i_FinishPercentage)
{
	var v_PBar   = $("#progressbar");
    var v_PTitle = $("#progressbar .progress-label");
    var v_PValue = 0;
 
    v_PBar.progressbar(
    {
		value: i_FinishPercentage,
		change: function() 
		{
			v_PTitle.text( v_PBar.progressbar( "value" ) + "%" );
		},
		complete: function() 
		{
			v_PTitle.text( i_FinishPercentage + "%" );
		}
    });
    
    function progress() 
    {
    	v_PValue = v_PValue + 1;
    	
		if ( v_PValue <= i_FinishPercentage ) 
		{
			i_PBar.progressbar("value" ,v_PValue);
			setTimeout(progress ,50);
		}
		else
		{
			i_PBar.progressbar("value" ,i_FinishPercentage);
		}
    }
    
    if ( i_FinishPercentage > 0  )
    {
    	
	}
}



function makeWorkingTimesTooltipText(d)
{
	var v_Text = "";
	
	v_Text += "<table width='180px'>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>计划开始：</font></td>";
	v_Text += "<td>" + d.planStartTime + "</td>";
	v_Text += "<td>&nbsp;</td>";
	v_Text += "</tr>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>实际开始：</font></td>";
	v_Text += "<td>" + d.startTime + "</td>";
	if ( d.planStartTime >= d.startTime && d.planStartTime != "" && d.startTime != "" )
	{
		var v_PngName = "";
		if ( d.planStartTime == d.startTime )
		{
			v_PngName = "finish";
		}
		else
		{
			v_PngName = "good";
		}
		
		v_Text += "<td><img src='../images/rs/" + v_PngName + ".png' width='16px' height='16px'></td>";
	}
	else
	{
		v_Text += "<td>&nbsp;</td>";
	}
	v_Text += "</tr>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>计划结束：</font></td>";
	v_Text += "<td>" + d.planEndTime + "</td>";
	v_Text += "<td>&nbsp;</td>";
	v_Text += "</tr>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>实际结束：</font></td>";
	v_Text += "<td>" + d.endTime + "</td>";
	if ( d.planEndTime >= d.endTime && d.planEndTime != "" && d.endTime != "" )
	{
		var v_PngName = "";
		if ( d.planEndTime == d.endTime )
		{
			v_PngName = "finish";
		}
		else
		{
			v_PngName = "good";
		}
		
		v_Text += "<td><img src='../images/rs/" + v_PngName + ".png' width='16px' height='16px'></td>";
	}
	else
	{
		v_Text += "<td>&nbsp;</td>";
	}
	v_Text += "</tr>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>阶段完工率：</font></td>";
	v_Text += "<td><div id='progressbar' style='height:18px' ><div class='progress-label'>" + d.finishPercentage + "%</div></div></td>";
	v_Text += "<td>&nbsp;</td>";
	v_Text += "</tr>";
	v_Text += "<script type='text/javascript'>showNodeProgress(" + d.finishPercentage + ");</" + "script>";
	
	v_Text += "<tr>";
	v_Text += "<td><font color='gray'>阶段状态：</font></td>";
	if ( d.state == "canceled" )
	{
		v_Text += "<td>已取消</td>";
	}
	else if ( d.planEndTime >= d.endTime && d.planEndTime != "" && d.endTime != "" && d.isDelay != "是" && d.finishPercentage >= 100 )
	{
		var v_TimeoutName = "";
		if ( d.planEndTime == d.endTime )
		{
			v_TimeoutName = "已完成";
		}
		else
		{
			if ( d.dayCount > 0 )
			{
				v_TimeoutName = "提前 " + d.dayCount + "天完成";
			}
			else
			{
				v_TimeoutName = "提前完成";			
			}
		}
		
		v_Text += "<td>" + v_TimeoutName + "</td>";
		v_Text += "<td><img src='../images/rs/" + v_PngName + ".png' width='16px' height='16px'></td>";
	}
	else
	{
		var v_TimeoutName = "正常";
		if ( d.isDelay == "是" )
		{
			v_TimeoutName = "已超时";
			if ( d.dayCount > 0 )
			{
				v_TimeoutName = "超时 " + d.dayCount + "天"; 
			}
		}
		else if ( d.dayCount > 0 )
		{
			v_TimeoutName = "预计 " + d.dayCount + "天后完成"; 
		}
		v_Text += "<td>" + v_TimeoutName + "</td>";
		v_Text += "<td>&nbsp;</td>";
	}
	v_Text += "</tr>";
	
	v_Text += "<tr>";
	v_Text += "<td><a href='showDocumentList.z?contractNo=${orderNo}&businessStage=" + d.code + "' target='_blank' class='ui-button ui-widget ui-corner-all'><font size='0.6em'>阶段文档</font></a></td>";
	v_Text += "<td>&nbsp;</td>";
	v_Text += "<td>&nbsp;</td>";
	v_Text += "</tr>";
	
	v_Text += "</table>";
	
	return v_Text
}



function showTFP(i_TFP)
{
	var v_PBar   = $("#TFP");
    var v_PTitle = $("#TFP .progress-label");
    var v_PValue = 0;
    
    if ( i_TFP < 100 )
	{
    	var v_LastFinishTime = v_Schedules[v_Schedules.length - 1].planEndTime;
		if ( v_TPDayCount > 0 )
		{
			$("#TPDayCount").html("超期" + v_TPDayCount + "天；预计" + v_LastFinishTime + "发货");
		}
		else if ( i_TPDayCount < 0 )
		{
			$("#TPDayCount").html("预计" + Math.abs(v_TPDayCount) + "天后完成；预计" + v_LastFinishTime + "发货");
		}
	}
 
    v_PBar.progressbar(
    {
		value: false,
		change: function() 
		{
			v_PTitle.text( v_PBar.progressbar( "value" ) + "%" );
		},
		complete: function() 
		{
			v_PTitle.text( i_TFP + "%" );
		}
    });
    
    function TFProgress() 
    {
    	v_PValue = v_PValue + 1;
    	
		if ( v_PValue <= i_TFP ) 
		{
			v_PBar.progressbar("value" ,v_PValue);
			setTimeout(TFProgress ,50);
		}
		else
		{
			v_PBar.progressbar("value" ,i_TFP);
		}
    }
    
    setTimeout(TFProgress ,500);
}



showTFP(${TFP});

</script>

</body>
</html>