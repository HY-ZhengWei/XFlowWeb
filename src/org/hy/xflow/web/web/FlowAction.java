package org.hy.xflow.web.web;

import java.util.ArrayList;
import java.util.List;

import org.hy.common.Help;
import org.hy.common.TablePartition;
import org.hy.common.xml.XJSON;
import org.hy.common.xml.XJava;
import org.hy.xflow.engine.bean.ActivityInfo;
import org.hy.xflow.engine.bean.ActivityRoute;
import org.hy.xflow.engine.bean.FlowInfo;
import org.hy.xflow.engine.bean.FlowProcess;
import org.hy.xflow.engine.bean.Template;
import org.hy.xflow.engine.service.IFlowInfoService;
import org.hy.xflow.engine.service.IFlowProcessService;
import org.hy.xflow.engine.service.ITemplateService;

import com.opensymphony.xwork2.ActionSupport;





/**
 * 工作流流程图页面呈现Action
 *
 * @author      ZhengWei(HY)
 * @createDate  2018-10-31
 * @version     v1.0
 */
public class FlowAction extends ActionSupport 
{

    private static final long serialVersionUID = 1206259536207222380L;
    
    private List<Template> templates;
    
    private List<FlowInfo> flows;
    
    /** 模板ID */
    private String templateID;
    
    /** 模板版本号 */
    private String version;
    
    /** 模板名称 */
    private String templateName;
    
    /** 模板的所有活动节点的Json信息 */
    private String activitys;
    
    /** 模板的所有路由的Json信息 */
    private String routes;
    
    /** 用于Json数据的返回，而不是页面跳转 */
    private String retJsonData;
    
    /** 是否显示操作工具栏（如，保存功能） */
    private String showOperations;
    
    /** 工作流实例ID */
    private String workID;
    
    /** 第三方使用系统的业务数据ID。即支持用第三方ID也能找到工作流信息 */
    private String serviceDataID;
    
    
    
    /**
     * 列表显示所有工作流模板
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-10-31
     * @version     v1.0
     */
    public String showFlowTemplates()
    {
        ITemplateService v_ITemplateService = (ITemplateService)XJava.getObject("TemplateService");
        
        this.templates = v_ITemplateService.queryAll();
        
        return SUCCESS;
    }
    
    
    
    /**
     * 显示工作流模板流程图
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-11-01
     * @version     v1.0
     */
    public String showFlowTemplate()
    {
        if ( Help.isNull(this.templateID) )
        {
            return "toList";
        }
        
        ITemplateService v_ITemplateService = (ITemplateService)XJava.getObject("TemplateService");
        Template         v_Template         = v_ITemplateService.queryByID(this.templateID);
        if ( v_Template == null )
        {
            return "toList";
        }
        
        try
        {
            this.templateID   = v_Template.getTemplateID(); 
            this.templateName = v_Template.getTemplateName();
            this.version      = v_Template.getVersion();
            
            List<ActivityInfo> v_Activitys     = Help.toList(v_Template.getActivityRouteTree().getActivitys());
            List<ActivityInfo> v_TempActivitys = new ArrayList<ActivityInfo>();
            
            for (ActivityInfo v_Activity : v_Activitys)
            {
                ActivityInfo v_New = new ActivityInfo();
                
                v_New.setActivityID(             v_Activity.getActivityID());
                v_New.setActivityCode(           v_Activity.getActivityCode());
                v_New.setActivityName(           v_Activity.getActivityName());
                v_New.setX(             Help.NVL(v_Activity.getX()));
                v_New.setY(             Help.NVL(v_Activity.getY()));
                v_New.setBackgroudColor(Help.NVL(v_Activity.getBackgroudColor() ,"#FFFFFF"));
                v_New.setLineColor(     Help.NVL(v_Activity.getLineColor()      ,"#000000"));
                v_New.setFlagColor(     Help.NVL(v_Activity.getFlagColor()      ,"#FFFFFF"));
                v_New.setFontColor(     Help.NVL(v_Activity.getFontColor()      ,"#000000"));
                
                v_TempActivitys.add(v_New);
            }
            
            List<ActivityRoute> v_Routes     = Help.toList(v_Template.getActivityRouteTree().getActivityRoutes());
            List<ActivityRoute> v_TempRoutes = new ArrayList<ActivityRoute>();
            
            for (ActivityRoute v_Route : v_Routes)
            {
                ActivityRoute v_New = new ActivityRoute();
                
                v_New.setActivityRouteID  ( v_Route.getActivityRouteID());
                v_New.setActivityRouteCode( v_Route.getActivityRouteCode());
                v_New.setActivityRouteName( v_Route.getActivityRouteName());
                v_New.setActivityID(        v_Route.getActivityID());
                v_New.setNextActivityID(    v_Route.getNextActivityID());
                v_New.setRouteType(         v_Route.getRouteType());
                v_New.setLineColor(         v_Route.getLineColor());
                v_New.setFontColor(Help.NVL(v_Route.getFontColor() ,"#000000"));
                
                v_TempRoutes.add(v_New);
            }
            
            XJSON v_XJSON = new XJSON();
            v_XJSON.setReturnNVL(false);
            
            this.activitys      = v_XJSON.toJson(v_TempActivitys ,"datas").toJSONString();
            this.routes         = v_XJSON.toJson(v_TempRoutes    ,"datas").toJSONString();
            this.showOperations = "1";
            
            return SUCCESS;
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
        }
        
        return "toList";
    }
    
    
    
    /**
     * 保存工作流模板流程图
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-11-01
     * @version     v1.0
     */
    public String saveFlowTemplate()
    {
        boolean v_Ret = false;
        
        try
        {
            XJSON v_XJson = new XJSON();
            
            List<ActivityInfo>  v_Activitys        = v_XJson.toJavaList(this.activitys ,ActivityInfo.class);
            List<ActivityRoute> v_Routes           = v_XJson.toJavaList(this.routes    ,ActivityRoute.class);
            ITemplateService    v_ITemplateService = (ITemplateService)XJava.getObject("TemplateService");
            
            v_Ret = v_ITemplateService.saves(this.templateID ,v_Activitys ,v_Routes);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
        }
        
        this.retJsonData = v_Ret ? "OK" : "Error";
        return SUCCESS;
    }
    
    
    
    /**
     * 刷新缓存，重新从数据库中加载工作流模板的信息
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-11-17
     * @version     v1.0
     */
    public String refreshTemplateCache()
    {
        boolean v_Ret = false;
        
        try
        {
            ITemplateService v_ITemplateService = (ITemplateService)XJava.getObject("TemplateService");
            
            v_Ret = v_ITemplateService.refreshCache(this.templateID);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
        }
        
        this.retJsonData = v_Ret ? "OK" : "Error";
        return SUCCESS;
    }
    
    
    
    /**
     * 列表显示所有工作流实例
     * 
     * @author      ZhengWei(HY)
     * @createDate  2019-08-29
     * @version     v1.0
     */
    public String showFlows()
    {
        IFlowInfoService v_FlowInfoService = (IFlowInfoService)XJava.getObject("FlowInfoService");
        
        if ( Help.isNull(this.templateID) )
        {
            this.flows = new ArrayList<FlowInfo>();
        }
        else
        {
            this.flows = v_FlowInfoService.queryActivitys(this.templateID);
        }
        
        return SUCCESS;
    }
    
    
    
    /**
     * 显示工作流实例的流程图
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-11-16
     * @version     v1.0
     */
    public String showFlow()
    {
        IFlowProcessService v_ProcessService = (IFlowProcessService)XJava.getObject("FlowProcessService");
        List<FlowProcess>   v_Processes      = null;
        
        if ( !Help.isNull(this.workID) )
        {
            v_Processes = v_ProcessService.queryByWorkID(this.workID);
        }
        else if ( !Help.isNull(this.serviceDataID) )
        {
            v_Processes = v_ProcessService.queryByServiceDataID(this.serviceDataID);
        }
        else
        {
            return "error";
        }
        
        ITemplateService v_ITemplateService = (ITemplateService)XJava.getObject("TemplateService");
        Template         v_Template         = v_ITemplateService.queryByID(this.templateID);
        if ( v_Template == null )
        {
            return "error";
        }
        
        TablePartition<String  ,FlowProcess> v_ProcessRoutes    = new TablePartition<String  ,FlowProcess>();
        TablePartition<String  ,FlowProcess> v_ProcessActivitys = new TablePartition<String  ,FlowProcess>();
        for (FlowProcess v_Process : v_Processes)
        {
            v_ProcessActivitys.putRow(Help.NVL(v_Process.getCurrentActivityID()) ,v_Process);
            v_ProcessRoutes   .putRow(Help.NVL(v_Process.getCurrentActivityID()) + "-" + Help.NVL(v_Process.getNextActivityID()) ,v_Process);
        }
        
        try
        {
            this.templateID   = v_Template.getTemplateID(); 
            this.templateName = v_Template.getTemplateName();
            this.version      = v_Template.getVersion();
            
            
            // 设置活动的样式
            List<ActivityInfo> v_Activitys     = Help.toList(v_Template.getActivityRouteTree().getActivitys());
            List<ActivityInfo> v_TempActivitys = new ArrayList<ActivityInfo>();
            for (ActivityInfo v_Activity : v_Activitys)
            {
                ActivityInfo v_New = new ActivityInfo();
                
                v_New.setActivityID(             v_Activity.getActivityID());
                v_New.setActivityCode(           v_Activity.getActivityCode());
                v_New.setActivityName(           v_Activity.getActivityName());
                v_New.setX(             Help.NVL(v_Activity.getX()));
                v_New.setY(             Help.NVL(v_Activity.getY()));
                
                List<FlowProcess> v_NodeProcess = v_ProcessActivitys.get(v_Activity.getActivityID());
                if ( !Help.isNull(v_NodeProcess) )
                {
                    FlowProcess v_LastProcess = v_NodeProcess.get(v_NodeProcess.size() - 1);
                    
                    v_New.setBackgroudColor(Help.NVL(v_Activity.getBackgroudColor() ,"#FFFFFF"));
                    v_New.setLineColor(     Help.NVL(v_Activity.getLineColor()      ,"#000000"));
                    v_New.setFlagColor(     Help.NVL(v_Activity.getFlagColor()      ,"#FFFFFF"));
                    v_New.setFontColor(     Help.NVL(v_Activity.getFontColor()      ,"#000000"));
                    
                    if ( Help.isNull(v_LastProcess.getNextActivityID()) )
                    {
                        v_New.setActivityName("《 " + v_New.getActivityName() + " 》");
                    }
                }
                else
                {
                    v_New.setBackgroudColor("#FFFFFF");
                    v_New.setLineColor(     "#000000");
                    v_New.setFlagColor(     "#FFFFFF");
                    v_New.setFontColor(     "gainsboro");
                }
                
                v_TempActivitys.add(v_New);
            }
            
            
            // 设置路由的样式
            List<ActivityRoute> v_Routes     = Help.toList(v_Template.getActivityRouteTree().getActivityRoutes());
            List<ActivityRoute> v_TempRoutes = new ArrayList<ActivityRoute>();
            for (ActivityRoute v_Route : v_Routes)
            {
                ActivityRoute v_New = new ActivityRoute();
                
                v_New.setActivityRouteID  (v_Route.getActivityRouteID());
                v_New.setActivityRouteCode(v_Route.getActivityRouteCode());
                v_New.setActivityRouteName(v_Route.getActivityRouteName());
                v_New.setActivityID(       v_Route.getActivityID());
                v_New.setNextActivityID(   v_Route.getNextActivityID());
                v_New.setRouteType(        v_Route.getRouteType());
                
                List<FlowProcess> v_NodeProcess = v_ProcessRoutes.get(v_Route.getActivityID() + "-" + v_Route.getNextActivityID());
                if ( !Help.isNull(v_NodeProcess) )
                {
                    FlowProcess v_LastProcess = v_NodeProcess.get(v_NodeProcess.size() - 1);
                    
                    if ( !Help.isNull(v_Route.getLineColor()) )
                    {
                        v_New.setLineColor(v_Route.getLineColor());
                    }
                    if ( "驳回".equals(v_Route.getRouteType().getRouteType()) )
                    {
                        v_New.setLineColor("#FF4444");
                    }
                    else
                    {
                        v_New.setLineColor("#6AB975");
                    }
                    
                    v_New.setFontColor(Help.NVL(v_Route.getFontColor() ,"#000000"));
                    v_New.setActivityRouteName(v_New.getActivityRouteName() + "（" + Help.NVL(v_LastProcess.getOperateUser() ,v_LastProcess.getOperateUserID()) + "）");
                }
                else
                {
                    v_New.setLineColor("gainsboro");
                    v_New.setFontColor("gainsboro");
                }
                
                v_TempRoutes.add(v_New);
            }
            
            
            XJSON v_XJSON = new XJSON();
            v_XJSON.setReturnNVL(false);
            
            this.activitys      = v_XJSON.toJson(v_TempActivitys ,"datas").toJSONString();
            this.routes         = v_XJSON.toJson(v_TempRoutes    ,"datas").toJSONString();
            this.showOperations = "0";
            
            return SUCCESS;
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
        }
        
        return "toList";
    }
    
    
    
    /**
     * 获取：查询所有工作流模板信息。内部组合生成关系数据网。
     */
    public List<Template> getTemplates()
    {
        return templates;
    }


    
    /**
     * 获取：模板ID
     */
    public String getTemplateID()
    {
        return templateID;
    }


    
    /**
     * 设置：模板ID
     * 
     * @param templateID 
     */
    public void setTemplateID(String templateID)
    {
        this.templateID = templateID;
    }


    
    /**
     * 获取：模板版本号
     */
    public String getVersion()
    {
        return version;
    }


    
    /**
     * 设置：模板版本号
     * 
     * @param version 
     */
    public void setVersion(String version)
    {
        this.version = version;
    }

    
    
    /**
     * 获取：模板名称
     */
    public String getTemplateName()
    {
        return templateName;
    }

    

    /**
     * 设置：模板名称
     * 
     * @param templateName 
     */
    public void setTemplateName(String templateName)
    {
        this.templateName = templateName;
    }


    
    /**
     * 获取：模板的所有活动节点的Json信息
     */
    public String getActivitys()
    {
        return activitys;
    }

    
    
    /**
     * 设置：模板的所有活动节点的Json信息
     * 
     * @param activitys 
     */
    public void setActivitys(String activitys)
    {
        this.activitys = activitys;
    }


    
    /**
     * 获取：模板的所有路由的Json信息
     */
    public String getRoutes()
    {
        return routes;
    }


    
    /**
     * 设置：模板的所有路由的Json信息
     * 
     * @param routes 
     */
    public void setRoutes(String routes)
    {
        this.routes = routes;
    }


    
    /**
     * 获取：用于Json数据的返回，而不是页面跳转
     */
    public String getRetJsonData()
    {
        return retJsonData;
    }


    
    /**
     * 获取：是否显示操作工具栏（如，保存功能）
     */
    public String getShowOperations()
    {
        return showOperations;
    }


    
    /**
     * 设置：是否显示操作工具栏（如，保存功能）
     * 
     * @param showOperations 
     */
    public void setShowOperations(String showOperations)
    {
        this.showOperations = showOperations;
    }


    
    /**
     * 获取：工作流实例ID
     */
    public String getWorkID()
    {
        return workID;
    }


    
    /**
     * 设置：工作流实例ID
     * 
     * @param workID 
     */
    public void setWorkID(String workID)
    {
        this.workID = workID;
    }


    
    /**
     * 获取：第三方使用系统的业务数据ID。即支持用第三方ID也能找到工作流信息
     */
    public String getServiceDataID()
    {
        return serviceDataID;
    }


    
    /**
     * 设置：第三方使用系统的业务数据ID。即支持用第三方ID也能找到工作流信息
     * 
     * @param serviceDataID 
     */
    public void setServiceDataID(String serviceDataID)
    {
        this.serviceDataID = serviceDataID;
    }


    
    /**
     * 获取：工作流实例
     */
    public List<FlowInfo> getFlows()
    {
        return flows;
    }
    
}