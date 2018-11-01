package org.hy.xflow.web.web;

import java.util.ArrayList;
import java.util.List;

import org.hy.common.Help;
import org.hy.common.xml.XJSON;
import org.hy.common.xml.XJava;
import org.hy.xflow.engine.bean.ActivityInfo;
import org.hy.xflow.engine.bean.ActivityRoute;
import org.hy.xflow.engine.bean.Template;
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
                v_New.setBackgroudColor(Help.NVL(v_Activity.getBackgroudColor() ,"White"));
                v_New.setLineColor(     Help.NVL(v_Activity.getLineColor()      ,"Black"));
                v_New.setFlagColor(     Help.NVL(v_Activity.getFlagColor()      ,"White"));
                
                v_TempActivitys.add(v_New);
            }
            
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
                
                v_TempRoutes.add(v_New);
            }
            
            XJSON v_XJSON = new XJSON();
            v_XJSON.setReturnNVL(false);
            
            this.activitys = v_XJSON.toJson(v_TempActivitys ,"datas").toJSONString();
            this.routes    = v_XJSON.toJson(v_TempRoutes    ,"datas").toJSONString();
            
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
    
}