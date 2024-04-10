<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>工作流实例列表</title>
<style type="text/css"> 
html,body { overflow:hidden; margin:0px;width:100%;height:100%;}
.Column_logininfobody{ width:100%;height:100%;overflow-y:scroll;overflow-x:auto;}
.Column_logininfo{ width:1300px;margin:0 auto;}
.Column_logininfo1{ width:1300px;margin:0 auto;}
.Column_labeTag,.Column_WorkID_Title,.Column_ServiceDataID_Title,.Column_Creater_Title,.Column_CreateTime_Title,.Column_LastUser_Title,.Column_LastTime_Title,.Column_Operate_Title {float:left; height:30px; line-height:30px; font-weight:bold;font-family:"微软雅黑";   font-size:14px; background-color:#D5DDF6;}
.Column_labeTag1,.Column_WorkID,.Column_ServiceDataID,.Column_Creater,.Column_CreateTime,.Column_LastUser,.Column_LastTime,.Column_Operate {float:left; height:30px; line-height:30px;font-family:"微软雅黑";   font-size:12px;}
.Column_labeTag2,.Column_WorkID_Other,.Column_ServiceDataID_Other,.Column_Creater_Other,.Column_CreateTime_Other,.Column_LastUser_Other,.Column_LastTime_Other,.Column_Operate_Other {float:left; height:30px; line-height:30px;font-family:"微软雅黑";   font-size:12px;border:#97B0F8 solid 0px;}

.Column_clearTag  {clear:both;height:36px;margin-top:0px;position:absolute;z-index:2008;} 
.Column_clearTag1 {clear:both;height:36px;margin-top:0px;} 

.Column_labeTag             { width:40px;  vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; } 
.Column_WorkID_Title        { width:300px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_ServiceDataID_Title { width:260px; vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_Creater_Title       { width:150px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_CreateTime_Title    { width:135px; vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_LastUser_Title      { width:150px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px;}
.Column_LastTime_Title      { width:135px; vertical-align:middle; text-align:center; border:#97B0F8 solid 1px; }
.Column_Operate_Title       { width:100px; vertical-align:middle; text-align:center; border-top: #97B0F8 solid 1px;border-bottom: #97B0F8 solid 1px; border-right: #97B0F8 solid 1px;}

.Column_labeTag1      { width:40px;  text-align:center;border:#97B0F8 solid 1px;  } 
.Column_WorkID        { width:300px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_ServiceDataID { width:260px; text-align:center; border:#97B0F8 solid 1px; }  
.Column_Creater       { width:150px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_CreateTime    { width:135px; text-align:center; border:#97B0F8 solid 1px; }  
.Column_LastUser      { width:150px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px;}  
.Column_LastTime      { width:135px; text-align:center; border:#97B0F8 solid 1px; }  
.Column_Operate       { width:100px; text-align:center; border-top: #97B0F8 solid 1px; border-bottom: #97B0F8 solid 1px; border-right: #97B0F8 solid 1px;}  

.Column_labeTag2            { width:40px;  text-align:center;} 
.Column_WorkID_Other        { width:300px; text-align:center;} 
.Column_ServiceDataID_Other { width:260px; text-align:center;}  
.Column_Creater_Other       { width:150px; text-align:center;} 
.Column_CreateTime_Other    { width:135px; text-align:center;} 
.Column_LastUser_Other      { width:150px; text-align:center;} 
.Column_LastTime_Other      { width:135px; text-align:center;} 
.Column_Operate_Other       { width:100px; text-align:center;} 

.cont_show_WorkID        { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; }
.cont_show_ServiceDataID { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_Creater       { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_CreateTime    { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_LastUser      { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_LastTime      { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 
.cont_show_Operate       { margin-left:0px; white-space:nowrap; overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; } 

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
            <div class="Column_WorkID_Title">实例ID</div>
            <div class="Column_ServiceDataID_Title">业务ID</div>
            <div class="Column_Creater_Title">创建人员</div>
            <div class="Column_CreateTime_Title">创建时间</div>
            <div class="Column_LastUser_Title">最后操作人员</div>
            <div class="Column_LastTime_Title">最后操作时间</div>
            <div class="Column_Operate_Title">操作</div>
        </div>
    </div> 
       
    <div id="info_fill" class="Column_logininfo1"> 
    
        <div class="Column_clearTag1">
            <div class="Column_labeTag1"></div>
            <div class="Column_WorkID"></div>
            <div class="Column_ServiceDataID"></div>
            <div class="Column_Creater"></div>
            <div class="Column_CreateTime"></div>
            <div class="Column_LastUser"></div>
            <div class="Column_LastTime"></div>
            <div class="Column_Operate"></div>
        </div> 
        
        <#list flows as item>
        <div class="Column_clearTag1">
            <div class="Column_labeTag1">${item_index+1}</div>
            
            <div class="Column_WorkID">
                <div class="cont_show_WorkID"><a href="showFlow?templateID=${item.flowTemplateID}&workID=${item.workID}" target="_blank">${item.workID}</a></div>
            </div>
            
            <div class="Column_ServiceDataID">
                <div class="cont_show_ServiceDataID">
                <#if item.serviceDataID ??>
                    <a href="showFlow?templateID=${item.flowTemplateID}&serviceDataID=${item.serviceDataID}" target="_blank">${item.serviceDataID}</a>
                <#else>
                    -
                </#if>
                </div>
            </div>
            
            <div class="Column_Creater">
                <div class="cont_show_Creater">
                <#if item.creater ??>
                    ${item.creater}
                <#else>
                    ${item.createrID}
                </#if>
                </div>
            </div>
            
            <div class="Column_CreateTime">
                <div class="cont_show_CreateTime">${item.createTime.full}</div>
            </div>
            
            <div class="Column_LastUser">
                <div class="cont_show_LastUser">
                <#if item.lastUser ??>
                    ${item.lastUser}
                <#else>
                    ${item.lastUserID}
                </#if>
                </div>
            </div>
            
            <div class="Column_LastTime">
                <div class="cont_show_LastTime">${item.lastTime.full}</div>
            </div>
            
            <div class="Column_Operate">
                <div class="cont_show_Operate">
                    <a href="showFlow?templateID=${item.flowTemplateID}&workID=${item.workID}" target="_blank">流程图</a>
                </div>
            </div>
        </div>
        </#list>
        
    </div>

</body>
</html>
