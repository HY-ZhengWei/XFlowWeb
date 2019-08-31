/** Html元素的拖动事件 */
var v_HtmlX    = 0;
var v_HtmlY    = 0;
var v_HtmlDrag = d3.drag()
.on("start" ,function()
{ 
	v_HtmlX = d3.select(this).style("left").replace('px' ,'');
	v_HtmlY = d3.select(this).style("top") .replace('px' ,'');
	
	/* 处理百分比的情况 */
	if ( v_HtmlX.indexOf("%") > 0 )
	{
		v_HtmlX = document.body.clientWidth * v_HtmlX.replace('%' ,'') / 100;
	}
	
	/* 处理百分比的情况 */
	if ( v_HtmlY.indexOf("%") > 0 )
	{
		v_HtmlY = document.body.clientHeight * v_HtmlY.replace('%' ,'') / 100;
	}
	
	v_HtmlX = d3.event.x - v_HtmlX;
	v_HtmlY = d3.event.y - v_HtmlY;
})
.on("drag", function()
{
	d3.select(this)
	.style("left", (d3.event.x - v_HtmlX) + "px")
	.style("top" , (d3.event.y - v_HtmlY) + "px");                    
});





/**
 * 获取G元素的XY坐标位置
 * 
 * @author      ZhengWei(HY)
 * @createDate  2018-10-23
 * @version     v1.0
 */
function getGXY(i_G)
{
	var v_Ret = i_G.attr("transform").replace("translate(" ,"").replace(")" ,"");
	
	if ( v_Ret.indexOf(",") >= 0 )
	{
		return v_Ret.split(",");
	}
	else if ( v_Ret.indexOf(" ") >= 0 )
	{
		/* IE浏览器有用空格分割位置XY的情况 */
		return v_Ret.split(" ");
	}
	else
	{
		return (v_Ret + ",0").split(",");
	}
}



/**
 * 计算圆上任意角度圆周上点的XY位置。
 * 
 * @author      ZhengWei(HY)
 * @createDate  2019-102-21
 * @version     v1.0
 *
 * @param i_CircleX  圆心的X坐标
 * @param i_CircleY  圆心的Y坐标
 * @param i_Radius   圆的半径
 * @param i_Angle    角度
 * @return [x ,y]
 */
function calcCirclePoint(i_CircleX ,i_CircleY ,i_Radius ,i_Angle)
{
	return [calcCirclePointX(i_CircleX ,i_Radius ,i_Angle) 
		   ,calcCirclePointY(i_CircleY ,i_Radius ,i_Angle)];
}



/**
 * 计算圆上任意角度圆周上点的X坐标位置。
 *
 * @author      ZhengWei(HY)
 * @createDate  2019-02-21
 * @version     v1.0
 *
 * @param i_CircleX  圆心的X坐标
 * @param i_Radius   圆的半径
 * @param i_Angle    角度
 * @return           X
 */
function calcCirclePointX(i_CircleX ,i_Radius ,i_Angle)
{
	return i_CircleX + Math.cos(i_Angle * 2 * Math.PI / 360) * i_Radius;
}



/**
 * 计算圆上任意角度圆周上点的Y坐标位置。
 *
 * @author      ZhengWei(HY)
 * @createDate  2019-02-21
 * @version     v1.0
 *
 * @param i_CircleY  圆心的Y坐标
 * @param i_Radius   圆的半径
 * @param i_Angle    角度
 * @return [x ,y]
 */
function calcCirclePointY(i_CircleY ,i_Radius ,i_Angle)
{
	return i_CircleY + Math.sin(i_Angle * 2 * Math.PI / 360) * i_Radius;
}



/**
 * 计算背景最大圆的半径
 *
 * @author      ZhengWei(HY)
 * @createDate  2019-08-30
 * @version     v1.0
 *
 * @param i_MenuItemSize   菜单项的大小。一般为圆的半径。
 * @param i_MenuSize       按顺时针环绕菜单项的数量。
 */
function calcSuperRadius(i_MenuItemSize ,i_MenuSize)
{
	var v_MenuMargin = [1 ,2.2 ,2.2 ,2 ,1.7 ,1.5 ,1.3 ,1.2 ,1.1];   /* 不同菜单个数下，扩展大小的系数，元素0无效 */
	
	if ( i_MenuSize == 1 )
	{
		return i_MenuItemSize * v_MenuMargin[i_MenuSize];
	}
	
	var v_Angle     = 360 / i_MenuSize;
	var v_HalfAngle = v_Angle / 2; 
	var v_X         = 2 * Math.PI / 360 * v_HalfAngle;
	var v_SinX      = Math.sin(v_X);
	var v_Margin    = i_MenuSize > v_MenuMargin.length - 1 ? v_MenuMargin[v_MenuMargin.length - 1] : v_MenuMargin[i_MenuSize];
	
	return (i_MenuItemSize * v_Margin) / v_SinX;
}



/**
 * 创建聪明的右击菜单
 *
 * @author      ZhengWei(HY)
 * @createDate  2019-08-30
 * @version     v1.0
 *
 * @param i_Stage          绘制右击菜单的舞台。可以是SVG，G等元素       
 * @param i_MenuItemSize   菜单项的大小。一般为圆的半径。
 * @param i_Menus          菜单数据，为数组类型，格式如下
 *                         i_Menus[i].name            菜单名称
 *                         i_Menus[i].bgColor         菜单背景色
 *                         i_Menus[i].bgColorMouse    菜单背景色，鼠标放在上面时
 *                         i_Menus[i].bgColorClick    菜单背景色，鼠标点击时
 *                         i_Menus[i].fontSize        菜单文字大小
 *                         i_Menus[i].fontColor       菜单文字颜色
 *                         i_Menus[i].fontColorMouse  菜单文字颜色，鼠标放在上面时
 *                         i_Menus[i].onClick         菜单被点击后执行方法的引用
 *                         首元素为最中间的菜单，之后的元素按顺时针环绕。
 *                         
 * 注：如果外部定义了 id="shadow" 的过滤器，则会自动启用。并用于菜单按钮的阴影样式。
 */
function createSmartContextMenu(i_Super ,i_MenuItemSize ,i_Menus)
{
	var v_SuperRadius  = calcSuperRadius(i_MenuItemSize ,i_Menus.length - 1);   /* 背景圆的半径 */
	var v_SuperPadding = 30; 
	var v_SuperCX      = v_SuperRadius + i_MenuItemSize / 3 + v_SuperPadding;   /* 所有圆的中心点 */
	var v_SuperCY      = v_SuperRadius + i_MenuItemSize / 3 + v_SuperPadding;   /* 所有圆的中心点 */
	var v_OffsetAngle  = (360 / (i_Menus.length - 1)) * -1 - 90;
	
	
	/* 背景最大的圆 */
	i_Super.append("circle")
	.attr("cx" ,v_SuperCX)
	.attr("cy" ,v_SuperCY)
	.attr("r"  ,v_SuperRadius + i_MenuItemSize / 3)
	.attr("fill" ,"none")
	.attr("stroke-width" ,i_MenuItemSize / 4 * 3)
	.attr("stroke" ,"#363636")
	.attr("opacity" ,0.5);
	
	
	/* 绘制菜单项的圆 */
	i_Super.selectAll(".SmartMenuItem").data(i_Menus).enter()
	.append("circle")
	.attr("id" ,function(d ,i)
	{
		return 	"SmartMenuItem_" + i;
	})
	.attr("class" ,"SmartMenuItem")
	.attr("cx" ,function(d ,i)
	{
		if ( i == 0 )
		{
			d.x = v_SuperCX;
		}
		else if ( i == 1 && i_Menus.length - 1 == 1 )
		{
			d.x = calcCirclePointX(v_SuperCX ,v_SuperRadius ,-90);
		}
		else
		{
			d.x = calcCirclePointX(v_SuperCX ,v_SuperRadius ,360 / (i_Menus.length - 1) * i + v_OffsetAngle);
		}
		
		return d.x;
	})
	.attr("cy" ,function(d ,i)
	{
		if ( i == 0 )
		{
			d.y = v_SuperCY; 
		}
		else if ( i == 1 && i_Menus.length - 1 == 1 )
		{
			d.y = calcCirclePointY(v_SuperCY ,v_SuperRadius ,-90);
		}
		else 
		{
			d.y = calcCirclePointY(v_SuperCY ,v_SuperRadius ,360 / (i_Menus.length - 1) * i + v_OffsetAngle);
		}
		
		return d.y;
	})
	.attr("r"  ,i_MenuItemSize)
	.attr("fill" ,function(d ,i)
	{
		return d.bgColor;
	})
	.attr("filter" ,function(d ,i)
	{
		if ( d3.select("#shadow").empty() )
		{
			return "";
		}
		else
		{
			return "url(#shadow)";
		}
	})
	.on("mouseover" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColorMouse);
		i_Super.select("#SmartMenuItemName_" + i).attr("fill" ,d.fontColorMouse);
	})
	.on("mouseout" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColor);
		i_Super.select("#SmartMenuItemName_" + i).attr("fill" ,d.fontColor);
	})
	.on("click" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColorClick);
		if ( d.onClick )
		{
			d.onClick.call(this ,d ,i);
		}
	});
	
	
	/* 绘制菜单项的名称 */
	i_Super.selectAll(".SmartMenuItemName").data(i_Menus).enter()
	.append("text")
	.attr("id" ,function(d ,i)
	{
		return 	"SmartMenuItemName_" + i;
	})
	.attr("class" ,"SmartMenuItemName")
	.attr("x" ,function(d ,i)
	{
		return d.x;
	})
	.attr("y" ,function(d ,i)
	{
		return d.y;
	})
	.attr("dx" ,function(d ,i)
	{
		return d.fontSize * d.name.length / 2 * -1;	
	})
	.attr("dy" ,function(d ,i)
	{
		return d.fontSize / 5 * 2;	
	})
	.attr("fill" ,function(d ,i)
	{
		return d.fontColor;	
	})
	.attr("font-size" ,function(d ,i)
	{
		return d.fontSize;	
	})
	.text(function(d ,i)
	{
		return d.name;
	})
	.on("mouseover" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColorMouse);
		i_Super.select("#SmartMenuItemName_" + i).attr("fill" ,d.fontColorMouse);
	})
	.on("mouseout" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColor);
		i_Super.select("#SmartMenuItemName_" + i).attr("fill" ,d.fontColor);
	})
	.on("click" ,function(d ,i)
	{
		i_Super.select("#SmartMenuItem_"     + i).attr("fill" ,d.bgColorClick);
		if ( d.onClick )
		{
			d.onClick.call(this ,d ,i);
		}
	});
}