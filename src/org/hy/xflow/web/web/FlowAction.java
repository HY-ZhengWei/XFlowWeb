package org.hy.xflow.web.web;

import java.util.List;

import org.hy.common.xml.XJava;
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
     * 获取：查询所有工作流模板信息。内部组合生成关系数据网。
     */
    public List<Template> getTemplates()
    {
        return templates;
    }
    
}