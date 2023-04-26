import styles from "./TopPageComponent.module.css";
import Htag from "@/components/Htag/Htag";
import { TopPageProps } from "./TopPageComponent.props";
import Tag from "@/components/Tag/Tag";
import Card from "@/components/Card/Card";
import Hhdata from "@/components/Hhdata/Hhdata";
import { TopLevelCategory } from "../../interfaces/page.interface";

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

      {firstCategory === TopLevelCategory.Courses && (
        <Hhdata {...page.hh}></Hhdata>
      )}
    </div>
  );
}
