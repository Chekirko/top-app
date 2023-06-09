import Head from "next/head";
import { GetStaticProps } from "next";
import { Noto_Sans } from "next/font/google";
import Htag from "@/components/Htag/Htag";
import { useState } from "react";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import cn from "classnames";

const notosans = Noto_Sans({ weight: "300", subsets: ["latin"] });

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRaiting] = useState<number>(2);
  return (
    <>
      <div className={notosans.className}>
        <Htag tag="h1">Выберите в меню, что именно вас интересует</Htag>
      </div>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
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
