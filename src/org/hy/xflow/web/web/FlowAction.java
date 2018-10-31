package org.hy.xflow.web.web;


import org.hy.common.Help;

import com.opensymphony.xwork2.ActionSupport;





public class FlowAction extends ActionSupport 
{

    private static final long serialVersionUID = 1206259536207222380L;
    

    private String userName;
    
    
    
    public String execute() 
    {

        if ( Help.isNull(userName) ) 
        {
            userName = "ABC";

            return SUCCESS;
        } 
        else if ( userName.equals("hello") )
        {
            return "html";
        }
        else 
        {
            return ERROR;
        }

    }

    public String getUserName() 
    {
        return userName;
    }

    public void setUserName(String userName) 
    {
        this.userName = userName;
    }
    
}