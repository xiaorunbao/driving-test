export interface User {
  /* 名字 */
  name: string;
  /* 中文姓名 */
  cnName: string;
  /* 部门 */
  department?: string;
  /* 角色列表 */
  groupId?: string;
  /* 联系方式 */
  phoneNo?: string;
  /* 状态（正常，离职，停职等） */
  status?: string;
}
