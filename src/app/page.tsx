import { User } from '@/interfaces';

//  从服务端接口获取数据
async function getUser(id: string) {
  const res = await fetch(`http://localhost:3566/user/${id}`);
  if (!res.ok) {
    throw new Error('查询失败');
  }
  return res.json();
}

export default async function Page() {
  const user: User = await getUser('643f9f912ccf17fe6c91af94');
  return <h1>Hello,{user.name || ''} </h1>;
}
