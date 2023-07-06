import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>post title</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href={"/"}>back to index</Link>
        <Button type="primary">按钮</Button>
      </h2>
    </>
  );
}
