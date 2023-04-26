import styles from "./TopPageComponent.module.css";
import Htag from "@/components/Htag/Htag";
import { TopPageProps } from "./TopPageComponent.props";
import Tag from "@/components/Tag/Tag";
import Card from "@/components/Card/Card";
import Hhdata from "@/components/Hhdata/Hhdata";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Advantages from "@/components/Advantages/Advantages";
import pages from "@/pages";
import Ptag from "@/components/Ptag/Ptag";

export default function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <span>Sorting</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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

      {page.seoText && <Ptag>{page.seoText}</Ptag>}

      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} size="s" color="accent">
          {t}
        </Tag>
      ))}
    </div>
  );
}
