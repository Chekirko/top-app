import { TopPageProps } from "./TopPageComponent.props";

export default function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element {
  return <>{products && products.length}</>;
}
