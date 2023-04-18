import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";
import { useState } from "react";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import axios from "axios";

const notosans = Noto_Sans({ weight: "300", subsets: ["latin"] });

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRaiting] = useState<number>(2);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={notosans.className}>
        <div>
          {menu.map((item) => (
            <div key={item._id.secondCategory}>{item._id.secondCategory}</div>
          ))}
        </div>
        <Htag tag="h1">Мій заголовок</Htag>
        <Htag tag="h3">Мій заголовок</Htag>
        <Htag tag="h2">Мій заголовок</Htag>
        <Button appearance="primary" arrow="down">
          Go
        </Button>
        <Button appearance="ghost" arrow="right">
          Stop
        </Button>
        <Ptag size="s">
          У нашому житті є багато речей, які можуть привести нас у пастку, і
          яких ми не можемо уникнути, але Ісус прийшов на цю землю, щоб
          звільнити нас від усього, навіть від смерті! Коли Ісус воскрес із
          мертвих, Він переміг усе погане.
        </Ptag>
        <Ptag size="l">
          У нашому житті є багато речей, які можуть привести нас у пастку, і
          яких ми не можемо уникнути, але Ісус прийшов на цю землю, щоб
          звільнити нас від усього, навіть від смерті! Коли Ісус воскрес із
          мертвих, Він переміг усе погане.
        </Ptag>
        <Ptag>
          У нашому житті є багато речей, які можуть привести нас у пастку, і
          яких ми не можемо уникнути, але Ісус прийшов на цю землю, щоб
          звільнити нас від усього, навіть від смерті! Коли Ісус воскрес із
          мертвих, Він переміг усе погане.
        </Ptag>
        <Tag size="s" color="red">
          Small red
        </Tag>
        <Tag size="s" color="green">
          Small green
        </Tag>
        <Tag size="s" color="ghost">
          Small ghost
        </Tag>
        <Tag size="s" color="accent">
          Small accent
        </Tag>
        <Tag size="s" color="grey">
          Small grey
        </Tag>

        <Tag size="m" color="red">
          Large red
        </Tag>
        <Tag size="m" color="green">
          Large green
        </Tag>
        <Tag size="m" color="ghost">
          Large ghost
        </Tag>
        <Tag size="m" color="accent">
          Large accent
        </Tag>
        <Tag size="m" color="grey">
          Large grey
        </Tag>
        <Rating rating={rating} isEditable setRating={setRaiting} />
        <Rating rating={5} isEditable />
        <Rating rating={1} />
      </div>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      firstCategory,
      menu,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
