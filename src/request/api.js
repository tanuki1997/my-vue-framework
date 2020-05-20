/**
 *
 * @auto cjl
 * @date 2020/5/20-10:10
 * @desc 这里定义通用的接口函数
 */
import { get, post } from './http'
//获取知识类型
export const getKnowledgeTypeListUrl = p => post('/member/knowledge/getKnowledgeTypeList', p);




