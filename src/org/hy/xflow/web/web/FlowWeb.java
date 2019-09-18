package org.hy.xflow.web.web;

import java.util.ArrayList;
import java.util.List;

import org.hy.common.Help;
import org.hy.common.TablePartitionLink;
import org.hy.common.xml.annotation.XRequest;
import org.hy.common.xml.annotation.Xjava;
import org.hy.common.xml.plugins.AppMessage;
import org.hy.xflow.engine.XFlowEngine;
import org.hy.xflow.engine.bean.ActivityRoute;
import org.hy.xflow.engine.bean.FlowData;
import org.hy.xflow.engine.bean.FlowInfo;
import org.hy.xflow.engine.bean.FlowProcess;
import org.hy.xflow.engine.bean.NextRoutes;
import org.hy.xflow.web.common.BaseWeb;





/**
 * 工作流的Web服务
 *
 * @author      ZhengWei(HY)
 * @createDate  2018-05-17
 * @version     v1.0
 */
@Xjava
public class FlowWeb extends BaseWeb
{
    
    /**
     * 按工作流模板名称创建工作流实例。
     * 
     * 将按模板名称查询版本号最大的有效的工作流模板，用它来创建工作流实例。
     * 
     * 创建的工作流实例，当前活动节点为  "开始" 节点。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I001Create")
    public AppMessage<Object> create(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        FlowInfo           v_Flow        = null;
        
        try
        {
            if ( Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_Flow = v_XFlowEngine.createByName(v_FlowData.getUser() ,v_FlowData.getTemplateName() ,v_FlowData.getVersionNo());
            }
            else
            {
                v_Flow = v_XFlowEngine.createByName(v_FlowData.getUser() ,v_FlowData.getTemplateName() ,v_FlowData.getServiceDataID() ,v_FlowData.getVersionNo());
            }
            
            v_Ret.setBody(v_Flow);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 1. 按工作流实例ID，查询用户可以走的路由。
     * 2. 按第三方使用系统的业务数据ID，查询用户可以走的路由。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I002QueryNextRoutes")
    public AppMessage<Object> queryNextRoutes(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object>  v_Ret         = i_AppMsg.clone();
        FlowData            v_FlowData    = i_AppMsg.getBody();
        XFlowEngine         v_XFlowEngine = XFlowEngine.getInstance();
        NextRoutes          v_NextRouts   = null;
        List<ActivityRoute> v_RetRoutes   = null;
        
        try
        {
            if ( Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_NextRouts = v_XFlowEngine.queryNextRoutes(v_FlowData.getUser() ,v_FlowData.getWorkID());
            }
            else 
            {
                v_NextRouts = v_XFlowEngine.queryNextRoutesByServiceDataID(v_FlowData.getUser() ,v_FlowData.getServiceDataID());
            }
            
            // 防止递归引用，删除部分对象引用
            if ( !Help.isNull(v_NextRouts.getRoutes()) )
            {
                v_RetRoutes = new ArrayList<ActivityRoute>();
                
                for (ActivityRoute v_Route : v_NextRouts.getRoutes())
                {
                    ActivityRoute v_NewRoute = new ActivityRoute();
                    
                    v_NewRoute.initNotNull(v_Route);
                    v_NewRoute.setActivity(null);
                    v_NewRoute.setNextActivity(null);
                    
                    v_RetRoutes.add(v_NewRoute);
                }
            }
            
            v_Ret.setBody(v_RetRoutes);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 1. 按工作流实例ID，向下一个活动节点流转
     * 2. 按第三方使用系统的业务数据ID，向下一个活动节点流转
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I003ToNext")
    public AppMessage<Object> toNext(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        FlowProcess        v_Process     = null;
        
        
        try
        {
            if ( Help.isNull(v_FlowData.getServiceDataID()) )
            {
                if ( Help.isNull(v_FlowData.getParticipants()) )
                {
                    v_Process = v_XFlowEngine.toNext(v_FlowData.getUser() 
                                                    ,v_FlowData.getWorkID() 
                                                    ,(FlowProcess)null
                                                    ,v_FlowData.getActivityRouteCode());
                }
                else
                {
                    v_Process = v_XFlowEngine.toNext(v_FlowData.getUser() 
                                                    ,v_FlowData.getWorkID() 
                                                    ,null
                                                    ,v_FlowData.getActivityRouteCode()
                                                    ,v_FlowData.getParticipants());
                }
            }
            else 
            {
                if ( Help.isNull(v_FlowData.getParticipants()) )
                {
                    v_Process = v_XFlowEngine.toNextByServiceDataID(v_FlowData.getUser() 
                                                                   ,v_FlowData.getServiceDataID()
                                                                   ,null
                                                                   ,v_FlowData.getActivityRouteCode());
                }
                else
                {
                    v_Process = v_XFlowEngine.toNextByServiceDataID(v_FlowData.getUser() 
                                                                   ,v_FlowData.getServiceDataID()
                                                                   ,null
                                                                   ,v_FlowData.getActivityRouteCode()
                                                                   ,v_FlowData.getParticipants());
                }
            }
            
            v_Ret.setBody(v_Process);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 获取用户可以处理（或叫待办）的工作流实例ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I004QueryWorkIDs")
    public AppMessage<Object> queryWorkIDs(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        List<String>       v_WorkIDs     = null;
        
        try
        {
            v_WorkIDs = v_XFlowEngine.queryWorkIDs(v_FlowData.getUser());
            
            v_Ret.setBody(v_WorkIDs);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 获取用户可以处理（或叫待办）的工作流实例对应的第三方使用系统的业务数据ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I005QueryServiceDataIDs")
    public AppMessage<Object> queryServiceDataIDs(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret            = i_AppMsg.clone();
        FlowData           v_FlowData       = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine    = XFlowEngine.getInstance();
        List<String>       v_ServiceDataIDs = null;
        
        try
        {
            v_ServiceDataIDs = v_XFlowEngine.queryServiceDataIDs(v_FlowData.getUser());
            
            v_Ret.setBody(v_ServiceDataIDs);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 获取用户已处理过的工作流实例ID。
     * 
     *   1. 通过用户ID查询。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-06-11
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I006QueryWorkIDsByDone")
    public AppMessage<Object> queryWorkIDsByDone(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        List<String>       v_WorkIDs     = null;
        
        try
        {
            v_WorkIDs = v_XFlowEngine.queryWorkIDsByDone(v_FlowData.getUser());
            
            v_Ret.setBody(v_WorkIDs);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 获取用户已处理过的工作流实例对应的第三方使用系统的业务数据ID。
     * 
     *   1. 通过用户ID查询。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-06-11
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I007QueryServiceDataIDsByDone")
    public AppMessage<Object> queryServiceDataIDsByDone(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        List<String>       v_WorkIDs     = null;
        
        try
        {
            v_WorkIDs = v_XFlowEngine.queryServiceDataIDsByDone(v_FlowData.getUser());
            
            v_Ret.setBody(v_WorkIDs);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
    
    
    /**
     * 查询历次的汇总情况。首次为最新的流转（即按时间顺序倒排的）
     * 
     *   1. 可通过实例ID查询。
     *   2. 可通过业务ID查询。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2019-09-18
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I008querySummarys")
    public AppMessage<Object> querySummarysByWorkID(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object>                      v_Ret         = i_AppMsg.clone();
        FlowData                                v_FlowData    = i_AppMsg.getBody();
        XFlowEngine                             v_XFlowEngine = XFlowEngine.getInstance();
        TablePartitionLink<String ,FlowProcess> v_Summarys    = null;
        
        try
        {
            if ( !Help.isNull(v_FlowData.getWorkID()) )
            {
                v_Summarys = v_XFlowEngine.querySummarysByWorkID(v_FlowData.getWorkID());
            }
            else if ( !Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_Summarys = v_XFlowEngine.querySummarysByServiceDataID(v_FlowData.getServiceDataID());
            }
            
            v_Ret.setBody(v_Summarys);
            v_Ret.setResult(true);
        }
        catch (Exception exce)
        {
            exce.printStackTrace();
            v_Ret.setBody(null);
            v_Ret.setResult(false);
            if ( exce.getCause() != null )
            {
                v_Ret.setRi(exce.getCause().toString() + "   " + Help.isNull(exce.getMessage()));
            }
            else
            {
                v_Ret.setRi(exce.getMessage());
            }
        }
        
        return v_Ret;
    }
    
}
