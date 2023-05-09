import styles from "./TopPageComponent.module.css";
import Htag from "@/components/Htag/Htag";
import { TopPageProps } from "./TopPageComponent.props";
import Tag from "@/components/Tag/Tag";
import Hhdata from "@/components/Hhdata/Hhdata";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Advantages from "@/components/Advantages/Advantages";
import Sort from "@/components/Sort/Sort";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import Product from "@/components/Product/Product";

export default function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      sort: SortEnum.Rating,
      products,
    }
  );

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && (
          <Tag size="m" color="red">
            hh.ru
          </Tag>
        )}
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <Hhdata {...page.hh}></Hhdata>
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="accent">
          {t}
        </Tag>
      ))}
    </div>
  );
}
