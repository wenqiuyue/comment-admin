import { fetchGet,fetchPost } from '../utils/request.js'

/**
 * 登录后台
 */
export function getProcessDetails (data) {
  return fetchPost('/Home/LoginMgr',data)
};
/**
 * 登录前台
 */
export function homeLogin (data) {
  return fetchPost('/Home/Login',data)
};

/**
 * 查询客服管理列表
 */
export function getQueryList (data) {
  return fetchPost('/MgrCms/QueryList',data)
};
/**
 * 查询资源账户选择项
 */
export function getResQueryOptions (data) {
  return fetchPost('/MgrRsrAcc/QueryOptions',data)
};
/**
 * 查询客服的资源账号和可分配的好友数
 */
export function mgrCmsQueryRsrAcc (data) {
  return fetchPost('/MgrCms/QueryRsrAcc',data)
};
/**
 * 创建/修改客服账户
 */
export function mgrCreate (data) {
  return fetchPost('/MgrCms/Create',data)
};
/**
 * 删除客服
 */
export function mgrCmsDelete (data) {
  return fetchPost('/MgrCms/Delete',data)
};
/**
 * 批量绑定资源
 */
export function mgrCmsBatchBindRsrAcc (data) {
  return fetchPost('/MgrCms/BatchBindRsrAcc',data)
};

/**
 * 查询代理列表
 */
export function mgrRsrAccQueryList (data) {
  return fetchPost('/MgrRsrAgent/QueryList',data)
};
/**
 * 创建/修改代理
 */
export function mgrRsrAgentCreate (data) {
  return fetchPost('/MgrRsrAgent/Create',data)
};
/**
 * 删除代理
 */
export function mgrRsrAgentDelete (data) {
  return fetchPost('/MgrRsrAgent/Delete',data)
};

/**
 * 查询资源账户列表
 */
export function getResourcesQueryList (data) {
  return fetchPost('/MgrRsrAcc/QueryList',data)
};
/**
 * 创建/修改资源账户
 */
export function mgrRsrAccCreate (data) {
  return fetchPost('/MgrRsrAcc/Create',data)
};
/**
 * 删除资源账户
 */
export function mgrRsrAccDelete (data) {
  return fetchPost('/MgrRsrAcc/Delete',data)
};
/**
 * 资源账户上线
 */
export function mgrRsrAccGoOnline (data) {
  return fetchPost('/MgrRsrAcc/GoOnline',data)
};
/**
 * 账户下线（可批量）
 */
export function mgrRsrAccGoUnline (data) {
  return fetchPost('/MgrRsrAcc/GoUnline',data)
};
/**
 * 查询好友明细
 */
export function mgrRsrAccQueryFriendNum (data) {
  return fetchPost('/MgrRsrAcc/QueryFriendNum',data)
};


/**获取终端列表以及区域列表 */
export function mgrServerQueryList () {
  return fetchPost('/MgrServer/QueryList',{ cache: true })
};
/**
 * 启动终端（批量） 
 */
export function mgrServerStartEcs (data) {
  return fetchPost('/MgrServer/StartEcs',data)
};
/**
 * 重启终端（批量） 
 */
export function mgrServerRebootEcs (data) {
  return fetchPost('/MgrServer/RebootEcs',data)
};
/**
 * 停止终端（批量） 
 */
export function mgrServerStopEcs (data) {
  return fetchPost('/MgrServer/StopEcs',data)
};
/**
 * 释放终端（批量）
 */
export function mgrServerDeleteEcs (data) {
  return fetchPost('/MgrServer/DeleteEcs',data)
};
/**
 * 续费终端（批量）
 */
export function mgrServerRenewEcs (data) {
  return fetchPost('/MgrServer/RenewEcs',data)
};


/**
 * 获取登录的资源账户列表
 */
export function mgrRsrAccGetLoginAccs (data) {
  return fetchPost('/MgrRsrAcc/GetLoginAccs',data)
};
/**
 * 加载资源用户信息
 */
export function mgrRsrAccLoadInfo (data) {
  return fetchPost('/MgrRsrAcc/LoadInfo',data)
};
/**
 * 创建任务
 */
export function mgrTaskCreate (data) {
  return fetchPost('/MgrTask/Create',data)
};
/**
 * 上传任务文件
 */
export function mgrUploadTaskFiles (data) {
  return fetchPost('/MgrUpload/TaskFiles',data)
};
/**
 * 获取任务执行记录
 */
export function mgrTaskQueryList (data) {
  return fetchPost('/MgrTask/QueryList',data)
};
/**
 * 创建/编辑素材
 */
export function mgrMaterialCreate (data) {
  return fetchPost('/MgrMaterial/Create',data)
};
/**
 * 获取素材列表
 */
export function mgrMaterialQueryList (data) {
  return fetchPost('/MgrMaterial/QueryList',data)
};
/**
 * 删除素材
 */
export function mgrServerDelete (data) {
  return fetchPost('/MgrMaterial/Delete',data)
};

/**
 * 设置阿里云API参数
 */
export function mgrUserSetAliKey (data) {
  return fetchPost('/MgrUser/SetAliKey',data)
};

/**
 * 获取可能认识的人
 */
export function mgrRsrAccGetRecFriend (data) {
  return fetchPost('/MgrRsrAcc/GetRecFriend',data)
};
/**
 * 申请添加好友
 */
export function mgrRsrAccApplyFriend (data) {
  return fetchPost('/MgrRsrAcc/ApplyFriend',data)
};
/**
 * 移除可能认识的人
 */
export function mgrRsrAccRemoveRecFriend (data) {
  return fetchPost('/MgrRsrAcc/RemoveRecFriend',data)
};
/**
 * 获取向我申请的好友
 */
export function mgrRsrAccGetApplies (data) {
  return fetchPost('/MgrRsrAcc/GetApplies',data)
};
/**
 * 接受好友申请
 */
export function mgrRsrAccAcceptFriend (data) {
  return fetchPost('/MgrRsrAcc/AcceptFriend',data)
};

/**
 * 前台加载好友列表
 */
export function friendQueryList (data) {
  return fetchPost('/Friend/QueryList',data)
};
/**
 * 前台领取好友
 */
export function friendGetByNum (data) {
  return fetchPost('/Friend/GetByNum',data)
};
/**
 * 前台获取素材列表
 */
export function materialQueryList (data) {
  return fetchPost('/Material/QueryList',data)
};
/**
 * 前台添加/修改素材
 */
export function materialCreate (data) {
  return fetchPost('/Material/Create',data)
};
/**
 * 前台删除素材
 */
export function materialDelete (data) {
  return fetchPost('/Material/Delete',data)
};
/**
 * 获取消息列表
 */
export function msgQueryList (data) {
  return fetchPost('/Msg/QueryList',data)
};
/**
 * 加载好友详细信息
 */
export function friendLoadInfo (data) {
  return fetchPost('/Friend/LoadInfo',data)
};
/**
 * 发送消息
 */
export function msgSend (data) {
  return fetchPost('/Msg/Send',data)
};
/**
 * 发送消息
 */
export function msgTranslateText (data) {
  return fetchPost('/Msg/TranslateText',data)
};
/**
 * 上传消息文件（批量）
 */
export function uploadMsgFile (data) {
  return fetchPost('/Upload/MsgFile',data)
};
/**
 * 设置/取消置顶好友
 */
export function friendSetTop (data) {
  return fetchPost('/Friend/SetTop',data)
};
/**
 * 移除会话
 */
export function friendRemove (data) {
  return fetchPost('/Friend/Remove',data)
};
/**
 * 添加/编辑备注
 */
export function friendSetRemark (data) {
  return fetchPost('/Friend/SetRemark',data)
};
/**
 * 获取备注
 */
export function friendGetRemarks (data) {
  return fetchPost('/Friend/GetRemarks',data)
};
/**
 * 删除备注
 */
export function friendDeleteRemark (data) {
  return fetchPost('/Friend/DeleteRemark',data)
};

/**
 * 保存资源模板
 */
export function mgrTaskSaveSeed (data) {
  return fetchPost('/MgrTask/SaveSeed',data)
};
/**
 * 获取资源模板列表
 */
export function mgrTaskQuerySeeds (data) {
  return fetchPost('/MgrTask/QuerySeeds',data)
};
/**
 * 加载资源模板详细参数
 */
export function mgrTaskLoadSeed (data) {
  return fetchPost('/MgrTask/LoadSeed',data)
};
/**
 * 删除资源模板
 */
export function mgrTaskDeleteSeed (data) {
  return fetchPost('/MgrTask/DeleteSeed',data)
};
/**
 * 保存/编辑配置模板
 */
export function mgrTaskSaveConfig (data) {
  return fetchPost('/MgrTask/SaveConfig',data)
};
/**
 * 获取配置模板列表
 */
export function mgrTaskQueryConfigs (data) {
  return fetchPost('/MgrTask/QueryConfigs',data)
};
/**
 * 修改密码
 */
export function mgrUserEditPwd (data) {
  return fetchPost('/MgrUser/EditPwd',data)
};