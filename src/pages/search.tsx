import { GetStaticProps } from "next";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import Htag from "@/components/Htag/Htag";

function Search({ menu, firstCategory }: SearchProps): JSX.Element {
  return <>{<Htag tag="h1">Страница поиска</Htag>}</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
