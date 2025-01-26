package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.KechengchengjiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.KechengchengjiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.KechengchengjiView;


/**
 * 课程成绩
 *
 * @author 
 * @email 
 * @date 2023-03-09 20:51:24
 */
public interface KechengchengjiService extends IService<KechengchengjiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<KechengchengjiVO> selectListVO(Wrapper<KechengchengjiEntity> wrapper);
   	
   	KechengchengjiVO selectVO(@Param("ew") Wrapper<KechengchengjiEntity> wrapper);
   	
   	List<KechengchengjiView> selectListView(Wrapper<KechengchengjiEntity> wrapper);
   	
   	KechengchengjiView selectView(@Param("ew") Wrapper<KechengchengjiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<KechengchengjiEntity> wrapper);
   	

}
