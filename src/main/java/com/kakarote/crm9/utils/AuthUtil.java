package com.kakarote.crm9.utils;

import cn.hutool.core.collection.CollectionUtil;
import com.jfinal.aop.Inject;
import com.jfinal.plugin.activerecord.Db;
import com.kakarote.crm9.common.constant.BaseConstant;
import com.kakarote.crm9.erp.admin.service.AdminUserService;

import java.util.ArrayList;
import java.util.List;

/**
 * @author wyq
 */
public class AuthUtil {
    @Inject
    private AdminUserService adminUserService;

    public boolean dataAuth( String table,String fieldName,Integer dataId){
        List<Integer> roles = BaseUtil.getUser().getRoles();
        List<Integer> dataAuth = Db.query("select data_type from 72crm_admin_role where role_id in ("+CollectionUtil.join(roles,",")+")");
        List<Long> userIdList = new ArrayList<>();
        Integer deptId = BaseUtil.getUser().getDeptId();
        if (dataAuth.contains(5)){
            return true;
        }else if (dataAuth.contains(4)){
            List<Integer> deptIdList = adminUserService.queryChileDeptIds(deptId, BaseConstant.AUTH_DATA_RECURSION_NUM);
            deptIdList.add(deptId);
            List<Long> userIds = Db.query("select user_id from 72crm_admin_user where dept_id in ("+CollectionUtil.join(deptIdList,",")+")");
            userIdList.addAll(userIds);
        }else if (dataAuth.contains(3)){
            userIdList.addAll(Db.query("select user_id from 72crm_admin_user where dept_id = ?",deptId));
        }else if (dataAuth.contains(2)){
            userIdList.addAll(adminUserService.queryChileUserIds(BaseUtil.getUserId(),BaseConstant.AUTH_DATA_RECURSION_NUM));
        }else if (dataAuth.contains(1)){
            userIdList.add(BaseUtil.getUserId());
        }
        Long ownerUserId = Db.queryLong("select owner_user_id from 72crm_crm_"+table+" where "+fieldName+" = ?",dataId);
        return userIdList.contains(ownerUserId);
    }

}
