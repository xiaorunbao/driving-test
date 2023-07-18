import { User } from '@/interfaces';
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';

//  从服务端接口获取数据
async function getUser(id: string) {
  try {
    const res = await fetch(`http://localhost:3566/user/${id}`);
    if (!res.ok) {
      // throw new Error('查询失败');
      return { name: 'testName', cnName: '中文名' };
    }
    return res.json();
  } catch (error) {
    return { name: 'testName', cnName: '中文名' };
  }
}

export default async function Page() {
  const user: User = await getUser('643f9f912ccf17fe6c91af94');
  console.log('user', user);
  if (!isEmpty(user)) redirect('/side');
  return <h1>Hello,{user?.name || ''} </h1>;
}
