<!DOCTYPE html>
<html>
<head>

	<title>${templateName}${version}的流程图</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<script type="text/javascript" charset="utf-8" src="../d3/d3.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="../jquery/jquery.min.js" ></script>
	<script type="text/javascript" charset="utf-8" src="../jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="../jquery/colpick.js"></script>
	
	<link rel="stylesheet" href="../jquery/jquery-ui.min.css" />
	<link rel="stylesheet" href="../jquery/colpick.css" />
	
	<style type="text/css">
	body {
	  font-family: 'Open Sans', sans-serif;
	  font-size: 12px;
	  font-weight: 400;
	  background-color: #fff;
	}
	
	#operations {
		width: 60px; 
		height: 15px; 
		position: fixed;
		right: 10px;
		top: 10px;
		font-size: 10px;
	}
	
	#colorPicker {
		background: white;
	    display: inline-block;
	    position: absolute;
	    padding: 0px;
	    border-radius: 0px;
	    border: 0px solid #DDD;
	    z-index: 99999;
	}
	
	#createdBy {
		width: 155px; 
		height: 15px; 
		position: fixed;
		right: 10px;
		bottom: 10px;
		font-size: 11px;
	}
	
	#createdBy a { 
		color: #4F4F4F; 
		text-decoration: none; 
		outline: none;
	}
	
	#createdBy a:hover {
		color: #1E90FF;
		text-decoration: none;
	}
	</style>
	
</head>
<body>

	<svg width="100%" height="2000" version="1.1" xmlns="http://www.w3.org/2000/svg">
	
		<defs>
		
			<filter id="shadow">
		        <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"></feGaussianBlur>
		        <feOffset in="blur" dx="1" dy="1" result="offset"></feOffset>
		        <feMerge>
		        <feMergeNode in="offset"></feMergeNode>
		        <feMergeNode in="SourceGraphic"></feMergeNode>
		        </feMerge>
	        </filter>
	        
	        <marker id="arrowTo" 
					markerUnits="strokerWidth"
					markerWidth="6"
					markerHeight="6"
					viewBox="0 0 12 12"
					refX="9"
					refY="6"
					orient="auto">
				<path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill:#6AB975;" />
			</marker>
			
			<marker id="arrowTo_Reject" 
					markerUnits="strokerWidth"
					markerWidth="6"
					markerHeight="6"
					viewBox="0 0 12 12"
					refX="9"
					refY="6"
					orient="auto">
				<path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill:#FF4444;" />
			</marker>
			
			<marker id="arrowToFirebox" 
					markerUnits="strokerWidth"
					markerWidth="18"
					markerHeight="18"
					viewBox="0 0 12 12"
					refX="9"
					refY="6"
					orient="auto">
				<path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill:#6AB975;" />
			</marker>
			
			<marker id="arrowToFirebox_Reject" 
					markerUnits="strokerWidth"
					markerWidth="18"
					markerHeight="18"
					viewBox="0 0 12 12"
					refX="9"
					refY="6"
					orient="auto">
				<path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill:#FF4444;" />
			</marker>
    		
		</defs>
	
	</svg>
	
	<div id="operations">
	</div>
	
	<div id="colorPicker">
	</div>
	
	<div id="createdBy">
		<a href="https://github.com/HY-ZhengWei/XFlowWeb" target="_brank">Source code by <b>XFlowWeb</b></a>
	</div>
	
	<script type="text/javascript">
	
	var N         = {width:130 ,height:40 ,lineWidth:1 ,flagWidth:18 };
	var Colors    = {backgroudColor:"white" ,routeColor:"#6AB975" ,routeRejectColor:"#FF4444" ,markLineColor:"#0099CC"}; 
	var v_SVG     = d3.select("body").select("svg");
	var v_Datas   = ${activitys}.datas;
	var v_Routes  = ${routes}.datas;

	var v_RouteMap   = makeRouteMap (v_Routes);  /* 可通过路由ID定位路由信息 */
	var v_RouteRefs  = makeRouteRefs(v_Routes);  /* 可通过节点ID定位到与其有关联的所有路由ID */
	var v_XOffset    = 0;                        /* 移动时相对鼠标的偏移量X */
	var v_YOffset    = 0;                        /* 移动时相对鼠标的偏移量Y */
	var v_ClickFlag  = null;                     /* 当前点击的d3节点标记对象 */
	var v_ClickColor = null;                     /* 当前点击的d3节点标记的颜色 */
	var v_HLineTMax  = 0;                        /* 水平标线（上）离移动节点最近的值 */
	var v_HLineBMin  = 99999;                    /* 水平标线（下）离移动节点最近的值 */
	var v_VLineLMax  = 0;                        /* 垂直标线（左）离移动节点最近的值 */
	var v_VLineRMin  = 99999;                    /* 垂直标线（右）离移动节点最近的值 */
	var v_ToPoints   = d3.map();                 /* 节点链接线的到达点的位置集合信息map.key为XY坐标值，map.value为数量 */
	var v_Drag       = d3.drag()
    .on("start" ,function()
    {
		var v_XY = getGXY(d3.select(this));
		v_XOffset = d3.event.x - v_XY[0];
		v_YOffset = d3.event.y - v_XY[1];
    })
    .on("drag" ,function(d)
    {
    	var v_G        = d3.select(this);
    	var v_NodeID   = v_G.attr("id");
    	var v_RouteIDs = v_RouteRefs[v_NodeID];
    	var v_X        = d3.event.x - v_XOffset;
    	var v_Y        = d3.event.y - v_YOffset;
    	v_HLineTMax    = 0;
    	v_HLineBMin    = 99999;
    	v_VLineLMax    = 0;
    	v_VLineRMin    = 99999;
    	
    	v_G.attr("transform" ,"translate(" + v_X + "," + v_Y + ")");
    	
    	for (var i=0; i<v_RouteIDs.length; i++)
   		{
    		var v_RouteData = v_RouteMap.get(v_RouteIDs[i]);
    		var v_RounteObj = d3.select("#" + v_RouteData.activityRouteID);
    		var v_FromG     = d3.select("#" + v_RouteData.activityID);
    		var v_ToG       = d3.select("#" + v_RouteData.nextActivityID);
    		var v_XYs       = calcRouteXY(v_FromG ,v_ToG ,v_G ,v_RouteData);
    		
    		v_RounteObj.attr("points" ,v_XYs);
    		moveLineText(v_RounteObj);
   		}
    	
    	/* 计算节点的中心点，计算标线状态，计算标线交叉点磁吸效果 */
    	var v_VtoX    = v_VLine.attr("x1");
    	var v_HtoY    = v_HLine.attr("y1");
    	var v_ChangeX = v_X;
    	var v_ChangeY = v_Y;
    	var v_IsChage = false;
    	
    	v_X = v_X + (N.width / 2);
    	v_Y = v_Y + (N.height / 2);
    	
    	if ( Math.abs(v_VtoX - v_X) > 5 )
   		{
   			hideVLine();
   		}
    	else if ( v_VtoX - v_X == 0 )
   		{
    		/* Nothing. */
   		}
    	else
   		{
    		v_ChangeX = v_VtoX - (N.width / 2);
    		v_IsChage = true;
   		}
    	
    	if ( Math.abs(v_HtoY - v_Y) > 5 )
   		{
   			hideHLine();
   		}
    	else if ( v_HtoY - v_Y == 0 )
   		{
    		/* Nothing. */
   		}
    	else
   		{
    		v_ChangeY = v_HtoY - (N.height / 2);
    		v_IsChage = true;
   		}
    	
    	if ( v_IsChage )
   		{
    		v_G.attr("transform" ,"translate(" + v_ChangeX + "," + v_ChangeY + ")");
    		
    		for (var i=0; i<v_RouteIDs.length; i++)
       		{
        		var v_RouteData = v_RouteMap.get(v_RouteIDs[i]);
        		var v_RounteObj = d3.select("#" + v_RouteData.activityRouteID);
        		var v_FromG     = d3.select("#" + v_RouteData.activityID);
        		var v_ToG       = d3.select("#" + v_RouteData.nextActivityID);
        		var v_XYs       = calcRouteXY(v_FromG ,v_ToG ,v_G ,v_RouteData);
        		
        		v_RounteObj.attr("points" ,v_XYs);
        		moveLineText(v_RounteObj);
       		}
   		}
    })
    .on("end" ,function(d)
	{
    	hideHVLine();
    });
	
	
	
	d3.select("body")
	.on("click" ,function()
	{
		// $("#colorPicker").css("opacity" ,0);
	});
	
	
	
	/* 水平标线 */
	var v_HLine = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,0)
	.attr("y1" ,-99999)
	.attr("x2" ,v_SVG.attr("width"))
	.attr("y2" ,-99999);
	
	/* 水平标线(上)，与水平标线成对出现，水平标线(上)不独立出现 */
	var v_HLineT = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,0)
	.attr("y1" ,-99999)
	.attr("x2" ,v_SVG.attr("width"))
	.attr("y2" ,-99999);
	
	/* 水平标线(下)，与水平标线成对出现，水平标线(下)不独立出现 */
	var v_HLineB = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,0)
	.attr("y1" ,-99999)
	.attr("x2" ,v_SVG.attr("width"))
	.attr("y2" ,-99999);
	
	/* 垂直标线 */
	var v_VLine = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,-99999)
	.attr("y1" ,0)
	.attr("x2" ,-99999)
	.attr("y2" ,v_SVG.attr("height"));
	
	/* 垂直标线(左)，与垂直标线成对出现，垂直标线(左)不独立出现 */
	var v_VLineL = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,-99999)
	.attr("y1" ,0)
	.attr("x2" ,-99999)
	.attr("y2" ,v_SVG.attr("height"));
	
	/* 垂直标线(右)，与垂直标线成对出现，垂直标线(右)不独立出现 */
	var v_VLineR = v_SVG.append("line")
	.attr("stroke" ,Colors.markLineColor)
	.attr("stroke-width" ,"3")
	.attr("stroke-dasharray" ,"5,2")
	.attr("x1" ,-99999)
	.attr("y1" ,0)
	.attr("x2" ,-99999)
	.attr("y2" ,v_SVG.attr("height"));
	
	
	
	/**
	 * 移动水平标线
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-24
	 * @version     v1.0
	 *
	 * @param i_HtoY  水平标记的Y坐标值
	 */
	function moveHLine(i_HtoY)
	{
		v_HLine
		.attr("y1" ,i_HtoY)
		.attr("y2" ,i_HtoY);
	}
	
	
	
	/**
	 * 移动水平标线(上)
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-25
	 * @version     v1.0
	 *
	 * @param i_HtoY  水平标记的Y坐标值
	 */
	function moveHLineT(i_HtoY)
	{
		v_HLineT
		.attr("y1" ,i_HtoY)
		.attr("y2" ,i_HtoY);
	}
	
	
	
	/**
	 * 移动水平标线(下)
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-25
	 * @version     v1.0
	 *
	 * @param i_HtoY  水平标记的Y坐标值
	 */
	function moveHLineB(i_HtoY)
	{
		v_HLineB
		.attr("y1" ,i_HtoY)
		.attr("y2" ,i_HtoY);
	}
	
	
	
	/**
	 * 移动垂直标线
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-24
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function moveVLine(i_VtoX)
	{
		v_VLine
		.attr("x1" ,i_VtoX)
		.attr("x2" ,i_VtoX);
	}
	
	
	
	/**
	 * 移动垂直标线(左)
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-25
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function moveVLineL(i_VtoX)
	{
		v_VLineL
		.attr("x1" ,i_VtoX)
		.attr("x2" ,i_VtoX);
	}
	
	
	
	/**
	 * 移动垂直标线(右)
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-25
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function moveVLineR(i_VtoX)
	{
		v_VLineR
		.attr("x1" ,i_VtoX)
		.attr("x2" ,i_VtoX);
	}
	
	
	
	/**
	 * 隐藏水平标线及垂直标线
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-24
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function hideHVLine()
	{
		hideHLine();
		hideVLine();
	}
	
	
	
	/**
	 * 隐藏水平标线
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-24
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function hideHLine()
	{
		moveHLine (-99999);
		moveHLineT(-99999);
		moveHLineB(-99999);
	}
	
	
	
	/**
	 * 隐藏垂直标线
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-24
	 * @version     v1.0
	 *
	 * @param i_VtoX  垂直标记的X坐标值
	 */
	function hideVLine()
	{
		moveVLine (-99999);
		moveVLineL(-99999);
		moveVLineR(-99999);
	}
	
	
	
	/**
	 * 绘制流程节点
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-09-09
	 * @version     v1.0
	 */
	function drawNode(i_G ,i_Data)
	{
		var v_NodeRect = i_G.append("rect")
		.attr("width"        ,N.width)
		.attr("height"       ,N.height)
		.attr("stroke-width" ,N.lineWidth)
		.attr("id"           ,"NGR" + i_Data.activityID)
		.attr("stroke"       ,i_Data.lineColor)
		.attr("fill"         ,i_Data.backgroudColor);
		
		var v_NodeFlag = i_G.append("polygon")
		.attr("stroke-width" ,N.lineWidth)
		.attr("id"           ,"NGF" + i_Data.activityID)
		.attr("stroke"       ,i_Data.lineColor)
		.attr("fill"         ,i_Data.flagColor)
		.attr("points" ,function()
		{
			var v_StartX = 7;
			return v_StartX + ",0 "
			     + (v_StartX + N.flagWidth) + ",0 "
			     + (v_StartX + N.flagWidth) + "," + N.height + " "
			     + (v_StartX + N.flagWidth / 2) + "," + (N.height - N.flagWidth / 2) + " "
			     + v_StartX + "," + N.height;
		})
		.on("click" ,function() 
		{
			v_ClickFlag  = d3.select(this);
			v_ClickColor = v_ClickFlag.attr("fill");
			
			$("#colorPicker").colpick({
			    flat: true,
			    layout: 'full',
			    colorScheme: 'light',
			    submit: true,
			    onSubmit: function(hsb,hex,rgb,el,bySetColor)
			    {
			    	$("#colorPicker").css("opacity" ,0);
			    	v_ClickFlag.attr("fill" ,'#' + hex);
			    },
				onChange: function (hsb,hex,rgb,el,bySetColor) 
				{
					v_ClickFlag.attr("fill" ,'#' + hex);
		        }
			});
			$("#colorPicker").colpickSetColor(v_ClickColor ,true);
			$("#colorPicker").css("left" ,(d3.event.pageX + N.width) + "px");
			$("#colorPicker").css("top"  ,(d3.event.pageY - 20) + "px");
			$("#colorPicker").css("opacity" ,100); 
		});
		
		var v_NodeName = i_G.append("text")
		.attr("id"          ,"NGT" + i_Data.activityID)
		.attr("x"           ,N.width  / 2)
		.attr("y"           ,N.height / 2)
		.attr("dy"          ,"0.35em")
		.attr("text-anchor" ,"middle")
		.attr("font-weight" ,"bold")
		.attr("fill"        ,"black")
		.text(i_Data.activityName);
	}
	
	
	
	/**
	 * 用路由数组生成路由Map，可通过路由ID定位路由信息。
	 *    Map.key   为路由ID
	 *    Map.value 为路由信息
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-23
	 * @version     v1.0
	 */
	function makeRouteMap(i_Routes)
	{
		var v_Map = d3.map();
		
		for (var i=0; i<i_Routes.length; i++)
		{
			v_Map.set(i_Routes[i].activityRouteID ,i_Routes[i]);
		}
		
		return v_Map;
	}
	
	
	
	/**
	 * 用路由数组生成路由节点关系，可通过节点ID定位到与其有关联的所有路由ID。
	 *    
	 *    返回结构为：Object.节点ID1.["路由ID1-2" ,"路由ID1-3"]
	 *                    .节点ID2.["路由ID1-2" ,"路由ID2-3"]
	 *                    .节点ID3.["路由ID1-3" ,"路由ID2-3"]
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-23
	 * @version     v1.0
	 */
	function makeRouteRefs(i_Routes)
	{
		var v_Refs = new Object();
		
		for (var i=0; i<i_Routes.length; i++)
		{
			if ( v_Refs[i_Routes[i].activityID] == null )
			{
				v_Refs[i_Routes[i].activityID] = new Array();
			}
			if ( v_Refs[i_Routes[i].nextActivityID] == null )
			{
				v_Refs[i_Routes[i].nextActivityID] = new Array();
			}
			
			v_Refs[i_Routes[i].activityID    ].push(i_Routes[i].activityRouteID);
			v_Refs[i_Routes[i].nextActivityID].push(i_Routes[i].activityRouteID);
		}
		
		return v_Refs;
	}
	
	
	
	/**
	 * 获取G元素的XY坐标位置
	 * 
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-23
	 * @version     v1.0
	 */
	function getGXY(i_G)
	{
		return i_G.attr("transform").replace("translate(" ,"").replace(")" ,"").split(",");
	}
	
	
	
	/**
	 * 移动链接的文字说明信息
	 * 
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-30
	 * @version     v1.0
	 *
	 * @param i_Line  节点间的链接线对象
	 */
	function moveLineText(i_Line)
	{
		var v_XYArr   = i_Line.attr("points").split(" ");
		var v_TextObj = d3.select("#" + i_Line.attr("id") + "_TEXT");
		var v_FromXY  = new Array();
		var v_ToXY    = new Array();
		var v_Type    = "";   /* H水平方向； V垂直方向*/
		
		if ( v_XYArr.length <= 1 )
		{
			return;
		}
		else
		{
			var v_Len = 0;
			
			for (var i=1; i<v_XYArr.length; i++)
			{
				var v_TempFromXY = v_XYArr[i-1].split(",");
				var v_TempToXY   = v_XYArr[i]  .split(",");
				var v_TempLen    = 0;
				var v_TempType   = "";
				
				if ( v_TempFromXY[0] == v_TempToXY[0] )
				{
					v_TempLen  = Number(v_TempFromXY[1]) - Number(v_TempToXY[1]);
					v_TempType = "V";
				}
				else if ( v_TempFromXY[1] == v_TempToXY[1] )
				{
					v_TempLen  = Number(v_TempFromXY[0]) - Number(v_TempToXY[0]);
					v_TempType = "H";
				}
				
				if ( Math.abs(v_TempLen) > v_Len )
				{
					v_FromXY = v_TempFromXY;
					v_ToXY   = v_TempToXY;
					v_Len    = Math.abs(v_TempLen); 
					v_Type   = v_TempType;
				}
			}
		}
		
		if ( v_Type == "H" )
		{
			v_TextObj
			.attr("x"  ,Number(v_FromXY[0]) + (Number(v_ToXY[0]) - Number(v_FromXY[0])) / 2)
			.attr("y"  ,v_FromXY[1])
			.attr("dy" ,"-0.35em");
		}
		else if ( v_Type == "V" )
		{
			v_TextObj
			.attr("x"  ,v_FromXY[0])
			.attr("y"  ,Number(v_FromXY[1]) + (Number(v_ToXY[1]) - Number(v_FromXY[1])) / 2)
			.attr("dy" ,"0.35em");
		}
	}
	
	
	
	/**
	 * 计算两元素XY坐标位置的关系
	 *
	 * 返回以元素A为中心点，元素B所在的位置（E东、W西、S南、N北、ES东南。。。）
	 * 
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-23
	 * @version     v1.0
	 *
	 * @param i_X1  A元素的X坐标
	 * @param i_Y1  A元素的Y坐标
	 * @param i_X2  B元素的X坐标
	 * @param i_Y2  B元素的Y坐标
	 */
	function calcPositionRelation(i_X1 ,i_Y1 ,i_X2 ,i_Y2 ,i_AWidth ,i_AHeight ,i_BWidth ,i_BHeight)
	{
		var v_Position  = "";  /* 以元素A为中心点，元素B所在的位置（E东、W西、S南、N北、ES东南。。。） */
		var v_TopBottom = 0;   /* 两元素上下空隙。大于等于0时，为真空隙。负值时，两元素上下有重叠的坐标 */
		var v_LeftRight = 0;   /* 两元素左右空隙。大于等于0时，为真空隙。负值时，两元素左右有重叠的坐标 */
		
		/* AB两元素，垂直上下关系，A在上，B在下 */
		if ( i_X1 == i_X2 && i_Y1 < i_Y2 )
		{
			v_Position  = "S";
			v_TopBottom = i_Y2 - (i_Y1 + i_AHeight);
			v_LeftRight = 0;
		}
		/* AB两元素，垂直上下关系，A在下，B在上 */
		else if ( i_X1 == i_X2 && i_Y1 > i_Y2 )
		{
			v_Position  = "N";
			v_TopBottom = i_Y1 - (i_Y2 + i_BHeight);
			v_LeftRight = 0;
		}
		/* AB两元素，水平左右关系，A在左，B在右 */
		else if ( i_X1 < i_X2 && i_Y1 == i_Y2 )
		{
			v_Position  = "E";
			v_TopBottom = 0;
			v_LeftRight = i_X2 - (i_X1 + i_AWidth);
		}
		/* AB两元素，水平左右关系，A在右，B在左 */
		else if ( i_X1 > i_X2 && i_Y1 == i_Y2 )
		{
			v_Position  = "W";
			v_TopBottom = 0;
			v_LeftRight = i_X1 - (i_X2 + i_BWidth);
		}
		/* AB两元素，B在A的左下方 */
		else if ( i_X1 > i_X2 && i_Y1 < i_Y2 )
		{
			v_Position  = "WS";
			v_TopBottom = i_Y2 - (i_Y1 + i_AHeight);
			v_LeftRight = i_X1 - (i_X2 + i_BWidth);
		}
		/* AB两元素，B在A的右下方 */
		else if ( i_X1 < i_X2 && i_Y1 < i_Y2 )
		{
			v_Position  = "ES";
			v_TopBottom = i_Y2 - (i_Y1 + i_AHeight);
			v_LeftRight = i_X2 - (i_X1 + i_AWidth);
		}
		/* AB两元素，B在A的左上方 */
		else if ( i_X1 > i_X2 && i_Y1 > i_Y2 )
		{
			v_Position  = "WN";
			v_TopBottom = i_Y1 - (i_Y2 + i_BHeight);
			v_LeftRight = i_X1 - (i_X2 + i_BWidth);
		}
		/* AB两元素，B在A的右上方 */
		else if ( i_X1 < i_X2 && i_Y1 > i_Y2 )
		{
			v_Position  = "EN";
			v_TopBottom = i_Y1 - (i_Y2 + i_BHeight);
			v_LeftRight = i_X2 - (i_X1 + i_AWidth);
		}
		
		return {"position":v_Position ,"topBottom":v_TopBottom ,"leftRight":v_LeftRight};
	}
	
	
	
	/**
	 * 计算两元素间的路由坐标位置
	 *
	 * @author      ZhengWei(HY)
	 * @createDate  2018-10-23
	 * @version     v1.0
	 *
	 * @param i_FromG      从哪来的元素节点
	 * @param i_ToG        到哪去的元素节点
	 * @param i_MoveG      现在移动的元素节点（可为空）
	 * @param i_RouteData  路由信息数据
	 */
	function calcRouteXY(i_FromG ,i_ToG ,i_MoveG ,i_RouteData)
	{
		var v_FromXY = getGXY(i_FromG);
		var v_ToXY   = getGXY(i_ToG);
		var v_MidAXY = null;
		var v_MidBXY = null;
		var v_PR     = calcPositionRelation(Number(v_FromXY[0])
				                           ,Number(v_FromXY[1])
				                           ,Number(v_ToXY[0])
				                           ,Number(v_ToXY[1])
				                           ,N.width
				                           ,N.height
				                           ,N.width
				                           ,N.height);
		
		/* 移动节点时，绘制的定位对齐标线 */
		if ( i_MoveG != null )
		{
			var v_MoveXY     = getGXY(i_MoveG);
			var v_XDiff      = Math.abs(Number(v_FromXY[0]) - Number(v_ToXY[0]));
			var v_YDiff      = Math.abs(Number(v_FromXY[1]) - Number(v_ToXY[1]));
			var v_IsMoveFrom = i_MoveG.attr("id") == i_FromG.attr("id");
			var v_TempValue  = 0;
			
			if ( v_XDiff != 0 && v_XDiff % (N.width / 2) == 0 )
			{
				moveVLine(Number(v_MoveXY[0]) + (N.width / 2));
				
				if ( v_IsMoveFrom )
				{
					v_TempValue = Number(v_ToXY[0]) + (N.width / 2);
					
					if ( Number(v_ToXY[0]) < Number(v_FromXY[0]) )
					{
						if ( v_VLineLMax < v_TempValue )
						{
							moveVLineL(v_TempValue);
							v_VLineLMax = v_TempValue;
						}
					}
					else
					{
						if ( v_VLineRMin > v_TempValue )
						{
							moveVLineR(v_TempValue);
							v_VLineRMin = v_TempValue;
						}
					}
				}
				else
				{
					v_TempValue = Number(v_FromXY[0]) + (N.width / 2);
					
					if ( Number(v_FromXY[0]) < Number(v_ToXY[0]) )
					{
						if ( v_VLineLMax < v_TempValue )
						{
							moveVLineL(v_TempValue);
							v_VLineLMax = v_TempValue;
						}
					}
					else
					{
						if ( v_VLineRMin > v_TempValue )
						{
							moveVLineR(v_TempValue);
							v_VLineRMin = v_TempValue;
						}
					}
				}
			}
			
			if ( v_YDiff != 0 && v_YDiff % N.height == 0 )
			{
				moveHLine(Number(v_MoveXY[1]) + (N.height / 2));
				
				if ( v_IsMoveFrom )
				{
					v_TempValue = Number(v_ToXY[1]) + (N.height / 2);
					
					if ( Number(v_ToXY[1]) < Number(v_MoveXY[1]) )
					{
						if ( v_HLineTMax < v_TempValue )
						{
							moveHLineT(v_TempValue);
							v_HLineTMax = v_TempValue;
						}
					}
					else
					{
						if ( v_HLineBMin > v_TempValue )
						{
							moveHLineB(v_TempValue);
							v_HLineBMin = v_TempValue;
						}
					}
				}
				else
				{
					v_TempValue = Number(v_FromXY[1]) + (N.height / 2);
					
					if ( Number(v_FromXY[1]) < Number(v_MoveXY[1]) )
					{
						if ( v_HLineTMax < v_TempValue )
						{
							moveHLineT(v_TempValue);
							v_HLineTMax = v_TempValue;
						}
					}
					else
					{
						if ( v_HLineBMin > v_TempValue )
						{
							moveHLineB(v_TempValue);
							v_HLineBMin = v_TempValue;
						}
					}
				}
			}
		}
		
		if ( i_RouteData.routeType.routeType == "驳回" )
		{
			if ( v_PR.position == "E" || v_PR.position == "W" )
			{
				/* n字型连接线 */
				v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
				v_FromXY[1] = Number(v_FromXY[1]) + 0;
				
				v_ToXY[0]   = Number(v_ToXY[0]) + (N.width / 2);
				v_ToXY[1]   = Number(v_ToXY[1]) + 0;
				
				v_MidAXY    = new Array();
				v_MidAXY[0] = v_FromXY[0];
				v_MidAXY[1] = v_FromXY[1] - N.height;
				
				v_MidBXY    = new Array();
				v_MidBXY[0] = v_ToXY[0];
				v_MidBXY[1] = v_ToXY[1] - N.height;
				
				moveHLine(v_FromXY[1] + (N.height / 2));
			}
			else if ( v_PR.position == "N" || v_PR.position == "S" )
			{
				/* 防止同一位置上绘制的链接线过多，分成奇数链接左边、偶数链接右边 */
				var v_IsDrawLeft = true; 
				if ( i_MoveG != null )
				{
					var v_IsMoveFrom = i_MoveG.attr("id") == i_FromG.attr("id");
					if ( v_IsMoveFrom )
					{
						var v_LeftKey    = (Number(v_ToXY[0]) + 0)       + "," + (Number(v_ToXY[1]) + (N.height / 2));
						var v_RightKey   = (Number(v_ToXY[0]) + N.width) + "," + (Number(v_ToXY[1]) + (N.height / 2));
						var v_LeftCount  = v_ToPoints.get(v_LeftKey);
						var v_RightCount = v_ToPoints.get(v_RightKey);
						
						if ( !v_ToPoints.has(v_LeftKey) )
						{
							v_IsDrawLeft = true;
							v_ToPoints.set(v_LeftKey ,1);
						}
						else if ( !v_ToPoints.has(v_RightKey) )
						{
							v_IsDrawLeft = false;
							v_ToPoints.set(v_RightKey ,1);
						}
						else if ( v_LeftCount > v_RightCount )
						{
							v_IsDrawLeft = false;
							v_ToPoints.set(v_RightKey ,v_RightCount + 1);
						}
						else
						{
							v_IsDrawLeft = true;
							v_ToPoints.set(v_LeftKey ,v_LeftCount + 1);
						}
					}
				}
				
				moveVLine(Number(v_FromXY[0]) + (N.width / 2));
				
				if ( v_IsDrawLeft )
				{
					/* C字型连接线 */
					v_FromXY[0] = Number(v_FromXY[0]) + 0;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + 0;
					v_ToXY[1]   = Number(v_ToXY[1]) + (N.height / 2);
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_FromXY[0] - (N.width / 2);
					v_MidAXY[1] = v_FromXY[1];
					
					v_MidBXY    = new Array();
					v_MidBXY[0] = v_ToXY[0] - (N.width / 2);
					v_MidBXY[1] = v_ToXY[1];
				}
				else
				{
					/* 反C字型连接线 */
					v_FromXY[0] = Number(v_FromXY[0]) + N.width;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + N.width;
					v_ToXY[1]   = Number(v_ToXY[1]) + (N.height / 2);
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_FromXY[0] + (N.width / 2);
					v_MidAXY[1] = v_FromXY[1];
					
					v_MidBXY    = new Array();
					v_MidBXY[0] = v_ToXY[0] + (N.width / 2);
					v_MidBXY[1] = v_ToXY[1];
				}
			}
			else if ( v_PR.position == "EN" || v_PR.position == "ES" )
			{
				/* 反C字型连接线 */
				v_FromXY[0] = Number(v_FromXY[0]) + N.width;
				v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
				
				v_ToXY[0]   = Number(v_ToXY[0]) + N.width;
				v_ToXY[1]   = Number(v_ToXY[1]) + (N.height / 2);
				
				v_MidAXY    = new Array();
				v_MidAXY[0] = v_ToXY[0] + (N.width / 2);
				v_MidAXY[1] = v_FromXY[1];
				
				v_MidBXY    = new Array();
				v_MidBXY[0] = v_ToXY[0] + (N.width / 2);
				v_MidBXY[1] = v_ToXY[1];
			}
			else if ( v_PR.position == "WN" || v_PR.position == "WS" )
			{
				v_FromXY[0] = Number(v_FromXY[0]) + 0;
				v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
				
				v_ToXY[0]   = Number(v_ToXY[0]) + 0;
				v_ToXY[1]   = Number(v_ToXY[1]) + (N.height / 2);
				
				v_MidAXY    = new Array();
				v_MidAXY[0] = v_ToXY[0] - (N.width / 2);
				v_MidAXY[1] = v_FromXY[1];
				
				v_MidBXY    = new Array();
				v_MidBXY[0] = v_ToXY[0] - (N.width / 2);
				v_MidBXY[1] = v_ToXY[1];
			}
		}
		else
		{
			if ( v_PR.position == "E" )
			{
				v_FromXY[0] = Number(v_FromXY[0]) + N.width;
				v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
				
				v_ToXY[0] = Number(v_ToXY[0]) + 0;
				v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				
				moveHLine(v_FromXY[1]);
	 		}
			else if ( v_PR.position == "W" )
			{
				v_FromXY[0] = Number(v_FromXY[0]) + 0;
				v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
				
				v_ToXY[0] = Number(v_ToXY[0]) + N.width;
				v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				
				moveHLine(v_FromXY[1]);
			}
			else if ( v_PR.position == "N" )
			{
				v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
				v_FromXY[1] = Number(v_FromXY[1]) + 0;
				
				v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
				v_ToXY[1] = Number(v_ToXY[1]) + N.height;
				
				moveVLine(v_FromXY[0]);
			}
			else if ( v_PR.position == "S" )
			{
				v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
				v_FromXY[1] = Number(v_FromXY[1]) + N.height;
				
				v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
				v_ToXY[1] = Number(v_ToXY[1]) + 0;
				
				moveVLine(v_FromXY[0]);
			}
			else if ( v_PR.position == "EN" )
			{
				/* B全部在A的右边。B全部在A的上边 */
				if ( v_PR.leftRight >= 0 && v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + N.width;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1]   = Number(v_ToXY[1]) + N.height;
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_ToXY[0];
					v_MidAXY[1] = v_FromXY[1];
				}
				else if ( v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
					v_FromXY[1] = Number(v_FromXY[1]) + 0;
					
					v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1] = Number(v_ToXY[1]) + N.height;
				}
				else if ( v_PR.leftRight >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + N.width;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0] = Number(v_ToXY[0]) + 0;
					v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				}
			}
			else if ( v_PR.position == "ES" )
			{
				/* B全部在A的右边。B全部在A的下边 */
				if ( v_PR.leftRight >= 0 && v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + N.width;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1]   = Number(v_ToXY[1]) + 0;
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_ToXY[0];
					v_MidAXY[1] = v_FromXY[1];
				}
				else if ( v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
					v_FromXY[1] = Number(v_FromXY[1]) + N.height;
					
					v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1] = Number(v_ToXY[1]) + 0;
				}
				else if ( v_PR.leftRight >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + N.width;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0] = Number(v_ToXY[0]) + 0;
					v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				}
			}
			else if ( v_PR.position == "WN" )
			{
				/* B全部在A的左边。B全部在A的上边 */
				if ( v_PR.leftRight >= 0 && v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + 0;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1]   = Number(v_ToXY[1]) + N.height;
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_ToXY[0];
					v_MidAXY[1] = v_FromXY[1];
				}
				else if ( v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
					v_FromXY[1] = Number(v_FromXY[1]) + 0;
					
					v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1] = Number(v_ToXY[1]) + N.height;
				}
				else if ( v_PR.leftRight >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + 0;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0] = Number(v_ToXY[0]) + N.width;
					v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				}
			}
			else if ( v_PR.position == "WS" )
			{
				/* B全部在A的左边。B全部在A的下边 */
				if ( v_PR.leftRight >= 0 && v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + 0;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0]   = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1]   = Number(v_ToXY[1]) + 0;
					
					v_MidAXY    = new Array();
					v_MidAXY[0] = v_ToXY[0];
					v_MidAXY[1] = v_FromXY[1];
				}
				else if ( v_PR.topBottom >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + (N.width / 2);
					v_FromXY[1] = Number(v_FromXY[1]) + N.height;
					
					v_ToXY[0] = Number(v_ToXY[0]) + (N.width / 2);
					v_ToXY[1] = Number(v_ToXY[1]) + 0;
				}
				else if ( v_PR.leftRight >= 0 )
				{
					v_FromXY[0] = Number(v_FromXY[0]) + 0;
					v_FromXY[1] = Number(v_FromXY[1]) + (N.height / 2);
					
					v_ToXY[0] = Number(v_ToXY[0]) + N.width;
					v_ToXY[1] = Number(v_ToXY[1]) + (N.height / 2);
				}
			}
		}
		
		if ( v_MidAXY == null )
		{
			return v_FromXY[0] + "," + v_FromXY[1] + " " + v_ToXY[0] + "," + v_ToXY[1]; 
		}
		else if ( v_MidBXY == null )
		{
			return v_FromXY[0] + "," + v_FromXY[1] + " " 
			     + v_MidAXY[0] + "," + v_MidAXY[1] + " " 
			     + v_ToXY[0]   + "," + v_ToXY[1]; 
		}
		else
		{
			return v_FromXY[0] + "," + v_FromXY[1] + " " 
		         + v_MidAXY[0] + "," + v_MidAXY[1] + " "
		         + v_MidBXY[0] + "," + v_MidBXY[1] + " "
		         + v_ToXY[0]   + "," + v_ToXY[1]; 
		}
	}
	
	
	
	v_SVG.selectAll("polyline").data(v_Routes)
	.enter()
	.append("polyline")
	.attr("id" ,function(d ,i)
	{
		return d.activityRouteID;	
	})
	.attr("fill" ,"#00000000")
	.attr("stroke-width" ,3)
	.attr("stroke" ,function(d ,i)
	{
		if ( d.routeType.routeType == "驳回" )
		{
			return Colors.routeRejectColor;
		}
		else
		{
			return Colors.routeColor;
		}
	})
	.attr("stroke-dasharray" ,function(d ,i)
	{
		if ( d.routeType.routeType == "驳回" )
		{
			return "5,5";
		}
		else
		{
			return "1,0";
		}
	})
	.attr("marker-end" ,function(d ,i)
	{
		var v_Flag = "";
		if ( d.routeType.routeType == "驳回" )
		{
			v_Flag = "_Reject";
		}
		
		var v_UserAgent = navigator.userAgent.toLowerCase();
		if ( v_UserAgent.indexOf("firefox") >= 0 ) 
		{
			return "url(#arrowToFirebox" + v_Flag + ")";
		}
		else
		{
			return "url(#arrowTo" + v_Flag + ")";
		}
	});
	
	
	v_SVG.selectAll("g").data(v_Datas)
	.enter()
	.append("g")
	.attr("id" ,function(d ,i)
	{
		return d.activityID; 
	})
	.attr("transform", function(d ,i) 
	{
	    return "translate(" + d.x + "," + d.y + ")";
	})
	.attr("filter" ,"url(#shadow)")
	.call(v_Drag);
	
	v_SVG.selectAll("g").data(v_Datas)
	.each(function(d ,i)
	{
		drawNode(d3.select(this) ,d);
	});
	
	
	/* 使节点均在连接线之上，防止出现选不中节点的问题 */
	v_SVG.selectAll("polyline").data(v_Routes)
	.attr("points" ,function(d ,i)
	{
		var v_FromG  = d3.select("#" + d.activityID);
		var v_ToG    = d3.select("#" + d.nextActivityID);
		
		return calcRouteXY(v_FromG ,v_ToG ,null ,d);
	});
	
	
	v_SVG.selectAll(".lineText").data(v_Routes)
	.enter()
	.append("text")
	.attr("id" ,function(d ,i)
	{
		return d.activityRouteID + "_TEXT";	
	})
	.attr("class"       ,"lineText")
	.attr("text-anchor" ,"middle")
	.attr("fill"        ,"black")
	.text(function(d ,i)
	{
		return d.activityRouteName;	
	})
	.each(function(d ,i)
	{
		moveLineText(d3.select("#" + d.activityRouteID));
	});
	
	
	hideHVLine();
	
	
	<#if isShowOperations ??>
	
	d3.select("#operations").append("a")
	.attr("id" ,"saveTemplate")
	.attr("class" ,"ui-button ui-widget ui-corner-all")
	.attr("href" ,"#")
	.text("保存")
	.on("click" ,function()
	{
		$("#colorPicker").css("opacity" ,0);
		
		for (var i=0; i<v_Datas.length; i++)
		{
			var v_NodeFlag = d3.select("#NGF" + v_Datas[i].activityID);
			var v_G        = d3.select("#"    + v_Datas[i].activityID);
			var v_XY       = getGXY(v_G);
			
			v_Datas[i].x         = v_XY[0];
			v_Datas[i].y         = v_XY[1];
			v_Datas[i].flagColor = v_NodeFlag.attr("fill");
		}
		
		var v_Json = JSON.stringify(v_Datas);
		
		$.ajax(
		{
            url: "saveFlowTemplate"
           ,type: 'post'
           ,data: {templateID:"${templateID}" ,activityXY:v_Json}
           ,dataType: "json"
           ,success: function(data)
            {
                alert(data);
            }
        });
	});
	
	</#if>
	
	</script>
	
</body>
</html>