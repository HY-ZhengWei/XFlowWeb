<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>工作流模板列表</title>
<style type="text/css"> 
html,body { overflow:hidden; margin:0px;width:100%;height:100%;}
.Column_logininfobody{ width:100%;height:100%;overflow-y:scroll;overflow-x:auto;}
.Column_logininfo{ width:1300px;margin:0 auto;}
.Column_logininfo1{ width:1300px;margin:0 auto;}
.Column_labeTag,.Column_TemplateName_Title,.Column_Version_Title,.Column_LastTime_Title,.Column_IsValid_Title,.Column_IsDelete_Title,.Column_Comment_Title,.Column_Operate_Title {float:left; height:30px; line-height:30px; font-weight:bold;font-family:"微软雅黑";   font-size:14px; background-color:#D5DDF6;}
.Column_labeTag1,.Column_TemplateName,.Column_Version,.Column_LastTime,.Column_IsValid,.Column_IsDelete,.Column_Comment,.Column_Operate {float:left; height:30px; line-height:30px;font-family:"微软雅黑";   font-size:12px;}
.Column_labeTag2,.Column_TemplateName_Other,.Column_Version_Other,.Column_LastTime_Other,.Column_IsValid_Other,.Column_IsDelete_Other,.Column_Comment_Other,.Column_Operate_Other {float:left; height:30px; line-height:30px;font-family:"微软雅黑";   font-size:12px;border:#97B0F8 solid 0px;}

.Column_clearTag  {clear:both;height:36px;margin-top:0px;position:absolute;z-index:2008;} 
.Column_clearTag1 {clear:both;height:36px;margin-top:0px;} 

.Column_labeTag            { width:40px;  vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; } 
.Column_TemplateName_Title { width:200px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_Version_Title      { width:100px; vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_LastTime_Title     { width:135px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_IsValid_Title      { width:80px;  vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_IsDelete_Title     { width:80px;  vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_Comment_Title      { width:450px; vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_Operate_Title      { width:200px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px; border-right: #97B0F8 solid 1px;}

.Column_labeTag1     { width:40px;text-align:center;border:#97B0F8 solid 1px;  } 
.Column_TemplateName { width:200px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_Version      { width:100px; text-align:center; border:#97B0F8 solid 1px; }  
.Column_LastTime     { width:135px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_IsValid      { width:80px;  text-align:center; border:#97B0F8 solid 1px; }  
.Column_IsDelete     { width:80px;  text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_Comment      { width:450px; text-align:left;   border:#97B0F8 solid 1px; }  
.Column_Operate      { width:200px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px; border-right: #97B0F8 solid 1px;}  

.Column_labeTag2           { width:40px;  text-align:center;} 
.Column_TemplateName_Other { width:200px; text-align:center;} 
.Column_Version_Other      { width:100px; text-align:center;}  
.Column_LastTime_Other     { width:135px; text-align:center;} 
.Column_IsValid_Other      { width:80px;  text-align:center;} 
.Column_IsDelete_Other     { width:80px;  text-align:center;} 
.Column_Comment_Other      { width:450px; text-align:left;} 
.Column_Operate_Other      { width:200px; text-align:center;} 

.cont_show_TemplateName { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; }
.cont_show_Version      { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_LastTime     { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_IsValid      { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_IsDelete     { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_Comment      { margin-left:5px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_Operate      { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 

a{ color:#0099CC; text-decoration:none; outline:none;}
a:hover{color:#33B5E5;text-decoration:none;}

body {
	font-family: "微软雅黑";
	font-size: 12px;
}

</style>

<script type="text/javascript" src="../jquery/jquery.min.js"></script>
<script type="text/javascript" src="../jquery/jquery-ui.min.js"></script>

<link rel="stylesheet" href="../jquery/jquery-ui.min.css" />

</head>
<body> 
		
	<div class="Column_logininfobody">
		<div class="Column_logininfo" /> 
		<div class="Column_clearTag">
			<div class="Column_labeTag">编号</div>
			<div class="Column_TemplateName_Title">工作流模板名称</div>
			<div class="Column_Version_Title">版本号</div>
			<div class="Column_LastTime_Title">操作时间</div>
			<div class="Column_IsValid_Title">是否有效</div>
			<div class="Column_IsDelete_Title">是否删除</div>
			<div class="Column_Comment_Title">说明</div>
			<div class="Column_Operate_Title">操作</div>
		</div>
	</div> 
	   
	<div id="info_fill" class="Column_logininfo1"> 
	
		<div class="Column_clearTag1">
            <div class="Column_labeTag1"></div>
            <div class="Column_TemplateName"></div>
            <div class="Column_Version"></div>
            <div class="Column_LastTime"></div>
            <div class="Column_IsValid"></div>
            <div class="Column_IsDelete"></div>
            <div class="Column_Comment"></div>
            <div class="Column_Operate"></div>
 	    </div> 
		
		<#list templates as item>
		<div class="Column_clearTag1">
			<div class="Column_labeTag1">${item_index+1}</div>
			
			<div class="Column_TemplateName" title="${item.templateName}">
				<div class="cont_show_TemplateName"><a href="showFlowTemplate?templateID=${item.templateID}">${item.templateName}</a></div>
			</div>
			
			<div class="Column_Version" title="${item.version}">
				<div class="cont_show_Version">${item.version}</div>
			</div>
			
			<div class="Column_LastTime">
				<div class="cont_show_LastTime">${item.lastTime.full}</div>
			</div>
			
			<div class="Column_IsValid">
				<div class="cont_show_IsValid">
				<#if item.isValid == 1>
					<font color="#669900">有效</font>
				<#else>
					<font color="#FF4444">失效</font>
				</#if>
				</div>
			</div>
			
			<div class="Column_IsDelete">
				<div class="cont_show_IsDelete">
				<#if item.isDelete == 0>
					<font color="#669900">有效</font>
				<#else>
					<font color="#FF4444">已删除</font>
				</#if>
				</div>
			</div>
			
			<div class="Column_Comment" title="${item.infoComment}">
				<div class="cont_show_Comment">${item.infoComment}</div>
			</div>
			
			<div class="Column_Operate">
				<div class="cont_show_Operate">
					<a href='showFlows?templateID=${item.templateID}'>活动实例</a>
				</div>
			</div>
		</div>
		</#list>
		
	</div>

</body>
</html>
