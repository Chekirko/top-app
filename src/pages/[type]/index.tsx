import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Tag from "@/components/Tag/Tag";
import { withLayout } from "../../../layout/Layout";
import { MenuItem } from "../../../interfaces/menu.interface";
import axios from "axios";
import { firstLevelMenu } from "../../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";
import { API } from "../../../helpers/api";

function Type({ menu, firstCategory }: TypeProps): JSX.Element {
  return (
    <>
      <h1>FirstCategory: {firstCategory}</h1>
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
      <h1>Привіт, Боженка!</h1>
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

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  });
  return {
    props: {
      firstCategory: firstCategoryItem.id,
      menu,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
