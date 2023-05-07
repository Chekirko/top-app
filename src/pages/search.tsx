import { GetStaticProps } from "next";
import Tag from "@/components/Tag/Tag";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import axios from "axios";
import { API } from "../../helpers/api";

function Search({ menu, firstCategory }: SearchProps): JSX.Element {
  return (
    <>
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
      <h1>Lets find something !!!</h1>
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
    </>
  );
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
