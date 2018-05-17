package org.hy.xflow.web.common;

import org.hy.common.Date;
import org.hy.common.Return;
import org.hy.common.xml.XHttp;
import org.hy.common.xml.XJSON;
import org.hy.common.xml.XJava;
import org.hy.xflow.engine.common.Base;





/**
 * Web服务的基础类
 *
 * @author      ZhengWei(HY)
 * @createDate  2017-10-25
 * @version     v1.0
 */
public class BaseWeb extends Base
{
    
    /**
     * 验证接口请求的时效性
     * 
     * @author      ZhengWei(HY)
     * @createDate  2017-11-24
     * @version     v1.0
     *
     * @param i_Time
     * @return        返回ture表示时间有效
     */
    protected boolean checkTime(Date i_Time)
    {
        long v_Diff    = Math.abs(Date.getNowTime().differ(i_Time));
        long v_TimeOut = Long.parseLong(XJava.getParam("WebInterfaceCheckTime").getValue());
        
        return v_TimeOut * 1000 >= v_Diff;
    }
    
    
    
    /**
     * 请求参数的类型，与返回值的类型相同
     * 
     * @author      ZhengWei(HY)
     * @createDate  2017-11-25
     * @version     v1.0
     *
     * @param i_XHttp
     * @param i_RequestParams
     * @return
     * @throws Exception
     */
    protected <T> T requestObject(XHttp i_XHttp ,T i_RequestParams) throws Exception
    {
        return requestObject(i_XHttp ,i_RequestParams ,i_RequestParams);
    }
    
    
 
    /**
     * 请求参数的类型，与返回值的类型不一样
     * 
     * @author      ZhengWei(HY)
     * @createDate  2017-11-25
     * @version     v1.0
     *
     * @param i_XHttp
     * @param i_RequestParams
     * @param i_ResponseObject   返回值的类型。new 一下对象，传入空实例即可。
     * @return
     * @throws Exception
     */
    @SuppressWarnings("unchecked")
    protected <T> T requestObject(XHttp i_XHttp ,Object i_RequestParams ,T i_ResponseObject) throws Exception
    {
        Return<?> v_XHttpRet = i_XHttp.request(i_RequestParams);
        
        if ( v_XHttpRet.booleanValue() )
        {
            XJSON v_XJson = new XJSON();
            return (T) v_XJson.parser(v_XHttpRet.paramStr, i_ResponseObject.getClass());
        }
        else
        {
            return null;
        }
    }
    
}
