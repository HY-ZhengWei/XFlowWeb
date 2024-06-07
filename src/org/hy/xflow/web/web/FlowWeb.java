package org.hy.xflow.web.web;

import java.util.ArrayList;
import java.util.List;

import org.hy.common.Date;
import org.hy.common.Help;
import org.hy.common.PartitionMap;
import org.hy.common.TablePartition;
import org.hy.common.xml.XJava;
import org.hy.common.xml.annotation.XRequest;
import org.hy.common.xml.annotation.Xjava;
import org.hy.common.xml.plugins.AppMessage;
import org.hy.xflow.engine.XFlowEngine;
import org.hy.xflow.engine.bean.ActivityRoute;
import org.hy.xflow.engine.bean.FlowComment;
import org.hy.xflow.engine.bean.FlowData;
import org.hy.xflow.engine.bean.FlowDataActivity;
import org.hy.xflow.engine.bean.FlowDataRoute;
import org.hy.xflow.engine.bean.FlowInfo;
import org.hy.xflow.engine.bean.FlowProcess;
import org.hy.xflow.engine.bean.NextRoutes;
import org.hy.xflow.engine.bean.ProcessCounterSignatureLog;
import org.hy.xflow.engine.bean.Template;
import org.hy.xflow.engine.bean.UserParticipant;
import org.hy.xflow.engine.enums.RejectModeEnum;
import org.hy.xflow.engine.enums.RouteTypeEnum;
import org.hy.xflow.engine.service.ITemplateService;
import org.hy.xflow.web.common.BaseWeb;





/**
 * 工作流的Web服务
 *
 * @author      ZhengWei(HY)
 * @createDate  2018-05-17
 * @version     v1.0
 *              v2.0  2023-04-13  添加：I002QueryNextRoutes查询可走路由接口，返回下一节点的活动参与人
 *                                添加：refreshTemplate()方法
 *              v3.0  2024-02-23  添加：按人员信息查询待办时，可按流程模板名称过滤
 *                                添加：按人员信息查询已办时，可按流程模板名称过滤
 *                                添加：按人员信息查询督查时，可按流程模板名称过滤
 *                                添加：按人员信息查询督办时，可按流程模板名称过滤
 *              v4.0  2024-05-06  添加：待办查询：可按活动节点Code查询
 */
@Xjava
public class FlowWeb extends BaseWeb
{
    
    /**
     * 加载&更新工作流模板缓存。数据库更新成功后，应即时更新高速缓存
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-04-14
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I000RefreshTemplate")
    public AppMessage<Object> refreshTemplate(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object> v_Ret      = i_AppMsg.clone();
        FlowData           v_FlowData = i_AppMsg.getBody();
        
        try
        {
            v_Ret.setBody(null);
            if ( Help.isNull(v_FlowData.getTemplateName()) )
            {
                v_Ret.setRi("模板名称为空");
                v_Ret.setResult(false);
                return v_Ret;
            }
            
            ITemplateService v_TemplateService = (ITemplateService)XJava.getObject("TemplateService");
            List<Template>   v_Templates       = v_TemplateService.queryAll();
            for (Template v_Template : v_Templates)
            {
                if ( v_FlowData.getTemplateName().equals(v_Template.getTemplateName()) )
                {
                    v_Ret.setResult(v_TemplateService.refreshCache(v_Template.getTemplateID()));
                    
                    Template v_New   = v_TemplateService.queryByID(v_Template);
                    Template v_Clone = new Template();
                    
                    v_Clone.setTemplateID(  v_New.getTemplateID());
                    v_Clone.setVersion(     v_New.getVersion());
                    v_Clone.setVersionNo(   v_New.getVersionNo());
                    v_Clone.setTemplateName(v_New.getTemplateName());
                    v_Clone.setInfoComment( v_New.getInfoComment());
                    v_Clone.setCreaterID(   v_New.getCreaterID());
                    v_Clone.setCreater(     v_New.getCreater());
                    v_Clone.setCreateTime(  v_New.getCreateTime());
                    v_Clone.setLastUserID(  v_New.getLastUserID());
                    v_Clone.setLastUser(    v_New.getLastUser());
                    v_Clone.setLastTime(    v_New.getLastTime());
                    v_Clone.setIsValid(     v_New.getIsValid());
                    v_Clone.setIsDelete(    v_New.getIsDelete());
                    
                    v_Ret.setBody(v_Clone);
                    break;
                }
            }
            
            if ( v_Ret.getBody() == null )
            {
                v_Ret.setRi("未匹配到模板名称");
                v_Ret.setResult(false);
            }
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
     *              v2.0  添加：返回结果除了可走的路由外，将返回更多的信息，如当前流转信息、工作流实例信息、参与人信息、汇总信息
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
            
            // 没有可走的路由
            if ( Help.isNull(v_NextRouts.getRoutes()) )
            {
                v_NextRouts.setFlow(null);
                v_NextRouts.setCurrentProcess(null);
                v_NextRouts.setCurrentActivity(null);
                v_NextRouts.setFlowParticipants(null);
                v_NextRouts.setRoutes(new ArrayList<ActivityRoute>());
            }
            else
            {
                // 防止递归引用，删除部分对象引用
                if ( !Help.isNull(v_NextRouts.getRoutes()) )
                {
                    v_NextRouts.setFlowParticipants(null);
                    
                    List<ActivityRoute> v_RetRoutes = new ArrayList<ActivityRoute>();
                    
                    for (ActivityRoute v_Route : v_NextRouts.getRoutes())
                    {
                        ActivityRoute v_NewRoute = new ActivityRoute();
                        
                        v_NewRoute.initNotNull(v_Route);
                        
                        if ( v_NewRoute.getActivity() != null )
                        {
                            v_NewRoute.setActivity(v_NewRoute.getActivity().toSimple());
                        }
                        
                        if ( v_NewRoute.getNextActivity() != null )
                        {
                            v_NewRoute.setNextActivity(v_NewRoute.getNextActivity().toSimple());
                            // 2023-04-14 添加下一节点的活动参与人
                            v_NewRoute.getNextActivity().setParticipants(v_Route.getNextActivity().getParticipants());
                        }
                        
                        v_RetRoutes.add(v_NewRoute);
                    }
                    
                    v_NextRouts.setRoutes(v_RetRoutes);
                }
                
                // 防止递归引用，删除部分对象引用
                if ( v_NextRouts.getCurrentActivity() != null )
                {
                    v_NextRouts.setCurrentActivity(v_NextRouts.getCurrentActivity().toSimple());
                }
                
                if ( v_NextRouts.getFlow() != null )
                {
                    v_NextRouts.getFlow().setProcesses(null);
                }
                
                if ( v_NextRouts.getCurrentProcess() != null )
                {
                    // 判定：当前流转是否是从“汇总路由”过来的。即当前节点是汇总节点
                    if ( RouteTypeEnum.$ToSum.equals(RouteTypeEnum.get(v_NextRouts.getCurrentProcess().getPreviousOperateTypeID())) )
                    {
                        if ( !Help.isNull(v_FlowData.getWorkID()) )
                        {
                            v_NextRouts.setSummarys(v_XFlowEngine.querySummarysByWorkID(v_FlowData.getWorkID()));
                        }
                        else if ( !Help.isNull(v_FlowData.getServiceDataID()) )
                        {
                            v_NextRouts.setSummarys(v_XFlowEngine.querySummarysByServiceDataID(v_FlowData.getServiceDataID()));
                        }
                    }
                }
            }
            
            v_Ret.setBody(v_NextRouts);
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
     *              v2.0  2019-09-19  添加：汇总值、汇总人数、操作文件、操作数据、备注说明
     *              v3.0  2024-04-10  添加：汇签
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
        List<FlowProcess>  v_ProcessList = null;
        
        
        try
        {
            FlowProcess v_ProcessExtra = new FlowProcess();
            
            v_ProcessExtra.setSummary(     Help.NVL(v_FlowData.getSummary()));
            v_ProcessExtra.setCounter(     Help.NVL(v_FlowData.getCounter()));
            v_ProcessExtra.setOperateFiles(Help.NVL(v_FlowData.getOperateFiles()));
            v_ProcessExtra.setOperateDatas(Help.NVL(v_FlowData.getOperateDatas()));
            v_ProcessExtra.setInfoComment( Help.NVL(v_FlowData.getInfoComment()));
            v_ProcessExtra.setCounterSignature(     v_FlowData.getCounterSignature());
            
            if ( v_ProcessExtra.getCounterSignature() != null )
            {
                ProcessCounterSignatureLog v_CSInfo = v_ProcessExtra.getCounterSignature();
                v_CSInfo.setCsMaxUserCount(Help.max(Help.NVL(v_CSInfo.getCsMaxUserCount() ,0) ,0));
                v_CSInfo.setCsMinUserCount(Help.max(Help.NVL(v_CSInfo.getCsMinUserCount() ,0) ,0));
                v_CSInfo.setCsExpireTime(Help.NVL(v_CSInfo.getCsExpireTime() ,new Date("9999-12-31 23:59:59")));
            }
            
            // 单路流转信息
            PartitionMap<String ,UserParticipant> i_ActivityRouteCodes = new TablePartition<String ,UserParticipant>();
            if ( !Help.isNull(v_FlowData.getActivityRouteCode()) )
            {
                i_ActivityRouteCodes.putRows(v_FlowData.getActivityRouteCode() ,v_FlowData.getParticipants());
            }
            
            // 多路流转信息
            if ( !Help.isNull(v_FlowData.getRoutes()) )
            {
                for (FlowDataRoute v_RouteItem : v_FlowData.getRoutes())
                {
                    i_ActivityRouteCodes.putRows(v_RouteItem.getActivityRouteCode() ,v_RouteItem.getParticipants());
                }
            }
            
            if ( Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_ProcessList = v_XFlowEngine.toNext(v_FlowData.getUser()
                                                    ,v_FlowData.getWorkID()
                                                    ,v_ProcessExtra
                                                    ,i_ActivityRouteCodes);
            }
            else
            {
                v_ProcessList = v_XFlowEngine.toNextByServiceDataID(v_FlowData.getUser()
                                                                   ,v_FlowData.getServiceDataID()
                                                                   ,v_ProcessExtra
                                                                   ,i_ActivityRouteCodes);
            }
            
            v_Ret.setBody(v_ProcessList);
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
     * 1. 按工作流实例ID，自由驳回（未在工作流模板上预先配置驳回路由）
     * 2. 按第三方使用系统的业务数据ID，自由驳回（未在工作流模板上预先配置驳回路由）
     * 
     * 模板上预先配置驳回路由的方式：可用toNext()方法。
     * 自由驳回是对toNext()方法的专项定制扩展，允许未在模板上定义驳回路由
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-02-22
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I003ToReject")
    public AppMessage<Object> toReject(AppMessage<FlowData> i_AppMsg)
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
        List<FlowProcess>  v_ProcessList = null;
        
        
        try
        {
            if ( v_FlowData.getRejectMode() == null )
            {
                v_FlowData.setRejectModeEnum(RejectModeEnum.$Auto);
            }
            
            FlowProcess v_ProcessExtra = new FlowProcess();
            
            v_ProcessExtra.setOperateFiles(Help.NVL(v_FlowData.getOperateFiles()));
            v_ProcessExtra.setOperateDatas(Help.NVL(v_FlowData.getOperateDatas()));
            v_ProcessExtra.setInfoComment( Help.NVL(v_FlowData.getInfoComment()));
            
            // 单路流转信息
            PartitionMap<String ,UserParticipant> i_ActivityRouteCodes = new TablePartition<String ,UserParticipant>();
            if ( !Help.isNull(v_FlowData.getActivityCode()) )
            {
                i_ActivityRouteCodes.putRows(v_FlowData.getActivityCode() ,v_FlowData.getParticipants());
            }
            
            // 多路流转信息
            if ( !Help.isNull(v_FlowData.getActivitys()) )
            {
                for (FlowDataActivity v_ActivityItem : v_FlowData.getActivitys())
                {
                    i_ActivityRouteCodes.putRows(v_ActivityItem.getActivityCode() ,v_ActivityItem.getParticipants());
                }
            }
            
            if ( Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_ProcessList = v_XFlowEngine.toReject(v_FlowData.getUser()
                                                      ,v_FlowData.getWorkID()
                                                      ,v_FlowData.getRejectModeEnum()
                                                      ,v_ProcessExtra
                                                      ,i_ActivityRouteCodes);
            }
            else
            {
                v_ProcessList = v_XFlowEngine.toRejectByServiceDataID(v_FlowData.getUser()
                                                                     ,v_FlowData.getServiceDataID()
                                                                     ,v_FlowData.getRejectModeEnum()
                                                                     ,v_ProcessExtra
                                                                     ,i_ActivityRouteCodes);
            }
            
            v_Ret.setBody(v_ProcessList);
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
     *   4. 通过模板、活动Code查询
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *              v2.0  2024-02-23  1. 添加：按人员信息查询待办时，可按流程模板名称过滤
     *              v3.0  2024-05-06  1. 添加：可按活动节点Code查询
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
            if ( Help.isNull(v_FlowData.getActivityCode()) )
            {
                v_WorkIDs = v_XFlowEngine.queryWorkIDs(v_FlowData.getUser() ,v_FlowData.getTemplateName());
            }
            else
            {
                v_WorkIDs = v_XFlowEngine.queryWorkIDs(v_FlowData.getUser() ,v_FlowData.getTemplateName() ,v_FlowData.getActivityCode());
            }
            
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
     *   4. 通过模板、活动Code查询
     * 
     * @author      ZhengWei(HY)
     * @createDate  2018-05-17
     * @version     v1.0
     *              v2.0  2024-02-23  1. 添加：按人员信息查询待办时，可按流程模板名称过滤
     *              v3.0  2024-05-06  1. 添加：可按活动节点Code查询
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
            if ( Help.isNull(v_FlowData.getActivityCode()) )
            {
                v_ServiceDataIDs = v_XFlowEngine.queryServiceDataIDs(v_FlowData.getUser() ,v_FlowData.getTemplateName());
            }
            else
            {
                v_ServiceDataIDs = v_XFlowEngine.queryServiceDataIDs(v_FlowData.getUser() ,v_FlowData.getTemplateName() ,v_FlowData.getActivityCode());
            }
            
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
     *              v2.0  2024-02-23  1. 添加：按人员信息查询已办时，可按流程模板名称过滤
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
            v_WorkIDs = v_XFlowEngine.queryWorkIDsByDone(v_FlowData.getUser() ,Help.isNull(v_FlowData.getTemplateName()) ? null : v_FlowData.getTemplateName());
            
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
     *              v2.0  2024-02-23  1. 添加：按人员信息查询已办时，可按流程模板名称过滤
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
            v_WorkIDs = v_XFlowEngine.queryServiceDataIDsByDone(v_FlowData.getUser() ,Help.isNull(v_FlowData.getTemplateName()) ? null : v_FlowData.getTemplateName());
            
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
    @XRequest(id="I008QuerySummarys")
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
        
        AppMessage<Object> v_Ret         = i_AppMsg.clone();
        FlowData           v_FlowData    = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        List<FlowProcess>  v_Summarys    = null;
        
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
    
    
    
    /**
     * 获取用户督办（抄送的）的工作流实例ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-06-01
     * @version     v1.0
     *              v2.0  2024-02-23  添加：按人员信息查询督办时，可按流程模板名称过滤
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I009QuerySuperviseWorkIDs")
    public AppMessage<Object> querySuperviseWorkIDs(AppMessage<FlowData> i_AppMsg)
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
            v_FlowData.setTemplateName(Help.NVL(v_FlowData.getTemplateName() ,null));
            v_WorkIDs = v_XFlowEngine.querySuperviseWorkIDs(v_FlowData);
            
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
     * 获取用户督办（抄送的）的工作流实例对应的第三方使用系统的业务数据ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-06-01
     * @version     v1.0
     *              v2.0  2024-02-23  添加：按人员信息查询督办时，可按流程模板名称过滤
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I010QuerySuperviseServiceDataIDs")
    public AppMessage<Object> querySuperviseServiceDataIDs(AppMessage<FlowData> i_AppMsg)
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
            v_FlowData.setTemplateName(Help.NVL(v_FlowData.getTemplateName() ,null));
            v_ServiceDataIDs = v_XFlowEngine.querySuperviseServiceDataIDs(v_FlowData);
            
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
     * 督查：获取用户历史督办（抄送的）的已完结的工作流实例ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-06-02
     * @version     v1.0
     *              v2.0  2024-02-23  添加：按人员信息查询督查时，可按流程模板名称过滤
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I011QuerySupervisionWorkIDs")
    public AppMessage<Object> querySupervisionWorkIDs(AppMessage<FlowData> i_AppMsg)
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
            v_WorkIDs = v_XFlowEngine.queryBySupervisionWorkIDs(v_FlowData);
            
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
     * 督查：获取用户历史督办（抄送的）的已完结的工作流实例ID对应的第三方使用系统的业务数据ID。
     * 
     *   1. 通过用户ID查询
     *   2. 通过部门ID查询
     *   3. 通过角色ID查询，支持多角色。
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-06-02
     * @version     v1.0
     *              v2.0  2024-02-23  添加：按人员信息查询督查时，可按流程模板名称过滤
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I012QuerySupervisionServiceDataIDs")
    public AppMessage<Object> querySupervisionServiceDataIDs(AppMessage<FlowData> i_AppMsg)
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
            v_ServiceDataIDs = v_XFlowEngine.queryBySupervisionServiceDataIDs(v_FlowData);
            
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
     * 添加工作流备注
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-07-28
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I013AddFlowComment")
    public AppMessage<Object> addFlowComment(AppMessage<FlowComment> i_AppMsg)
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
        FlowComment        v_FlowComment = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        boolean            v_AddRet      = false;
        
        try
        {
            if ( v_FlowComment == null )
            {
                v_Ret.setRi("Flow comment is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( Help.isNull(v_FlowComment.getWorkID()) && Help.isNull(v_FlowComment.getServiceDataID()) )
            {
                v_Ret.setRi("WorkID and ServiceDataID is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( v_FlowComment.getCreateUser() == null || Help.isNull(v_FlowComment.getCreateUser().getUserID()) )
            {
                v_Ret.setRi("CreateUser is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( Help.isNull(v_FlowComment.getCommentTitle())
              && Help.isNull(v_FlowComment.getComment())
              && Help.isNull(v_FlowComment.getCommentFiles())
              && Help.isNull(v_FlowComment.getCommentImages()) )
            {
                v_Ret.setRi("CommentTitle and Files and Images and Comment is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            v_AddRet = v_XFlowEngine.addComment(v_FlowComment);
            
            if ( v_AddRet )
            {
                v_Ret.setBody(v_FlowComment);
                v_Ret.setResult(true);
            }
            else
            {
                v_Ret.setRi("WorkID[" + v_FlowComment.getWorkID() + "] User[" + v_FlowComment.getCreaterID() + "] is not participant.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
            }
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
     * 查询工作流备注
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-07-28
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I014QueryFlowComment")
    public AppMessage<Object> queryFlowComment(AppMessage<FlowComment> i_AppMsg)
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
        FlowComment        v_FlowComment = i_AppMsg.getBody();
        XFlowEngine        v_XFlowEngine = XFlowEngine.getInstance();
        List<FlowComment>  v_Comments    = null;
        
        try
        {
            if ( v_FlowComment == null )
            {
                v_Ret.setRi("Flow comment is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( Help.isNull(v_FlowComment.getWorkID()) && Help.isNull(v_FlowComment.getServiceDataID()) )
            {
                v_Ret.setRi("WorkID and ServiceDataID is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( !Help.isNull(v_FlowComment.getWorkID()) )
            {
                v_Comments = v_XFlowEngine.queryCommentByWorkID(v_FlowComment.getWorkID());
            }
            else
            {
                v_Comments = v_XFlowEngine.queryCommentByServiceDataID(v_FlowComment.getServiceDataID());
            }
            
            if ( !Help.isNull(v_Comments) )
            {
                v_Ret.setBody(v_Comments);
                v_Ret.setResult(true);
            }
            else
            {
                v_Ret.setResult(false);
                v_Ret.setBody(null);
            }
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
     * 流程的发起人有权随时结束整个流程
     * 
     * @author      ZhengWei(HY)
     * @createDate  2023-08-03
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I015ToFinishCreater")
    public AppMessage<Object> toFinishCreater(AppMessage<FlowData> i_AppMsg)
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
        FlowProcess        v_FlowProcess = null;
        
        try
        {
            if ( v_FlowData == null )
            {
                v_Ret.setRi("Flow data is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            if ( Help.isNull(v_FlowData.getWorkID()) && Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_Ret.setRi("WorkID and ServiceDataID is null.");
                v_Ret.setResult(false);
                v_Ret.setBody(null);
                return v_Ret;
            }
            
            FlowProcess v_ProcessExtra = new FlowProcess();
            v_ProcessExtra.setOperateFiles(Help.NVL(v_FlowData.getOperateFiles()));
            v_ProcessExtra.setOperateDatas(Help.NVL(v_FlowData.getOperateDatas()));
            v_ProcessExtra.setInfoComment( Help.NVL(v_FlowData.getInfoComment()));
            
            if ( !Help.isNull(v_FlowData.getWorkID()) )
            {
                v_FlowProcess = v_XFlowEngine.toFinishCreater(v_FlowData.getUser() ,v_FlowData.getWorkID() ,v_ProcessExtra);
            }
            else
            {
                v_FlowProcess = v_XFlowEngine.toFinishCreaterByServiceDataID(v_FlowData.getUser() ,v_FlowData.getServiceDataID() ,v_ProcessExtra);
            }
            
            if ( !Help.isNull(v_FlowProcess) )
            {
                v_Ret.setBody(v_FlowProcess);
                v_Ret.setResult(true);
            }
            else
            {
                v_Ret.setResult(false);
                v_Ret.setBody(null);
            }
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
     * @createDate  2024-04-10
     * @version     v1.0
     *
     * @param i_AppMsg
     * @return
     */
    @XRequest(id="I016QueryCounterSignatures")
    public AppMessage<Object> queryCounterSignatures(AppMessage<FlowData> i_AppMsg)
    {
        if ( i_AppMsg == null )
        {
            return null;
        }
        
        if ( i_AppMsg.getBody() == null )
        {
            return null;
        }
        
        AppMessage<Object>               v_Ret         = i_AppMsg.clone();
        FlowData                         v_FlowData    = i_AppMsg.getBody();
        XFlowEngine                      v_XFlowEngine = XFlowEngine.getInstance();
        List<ProcessCounterSignatureLog> v_CSInfos     = null;
        
        try
        {
            if ( v_FlowData.getCounterSignature() == null )
            {
                v_FlowData.setCounterSignature(new ProcessCounterSignatureLog());
            }
            
            if ( !Help.isNull(v_FlowData.getWorkID()) )
            {
                v_FlowData.getCounterSignature().setWorkID(v_FlowData.getWorkID());
                v_CSInfos = v_XFlowEngine.queryCSLogsByWorkID(v_FlowData.getCounterSignature());
            }
            else if ( !Help.isNull(v_FlowData.getServiceDataID()) )
            {
                v_FlowData.getCounterSignature().setServiceDataID(v_FlowData.getServiceDataID());
                v_CSInfos = v_XFlowEngine.queryCSLogsByServiceDataID(v_FlowData.getCounterSignature());
            }
            
            v_Ret.setBody(v_CSInfos);
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
