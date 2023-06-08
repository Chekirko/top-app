import Htag from "@/components/Htag/Htag";
import React from "react";
import { withLayout } from "../../layout/Layout";

export function Error500() {
  return (
    <>
      <Htag tag="h1">Ошибка 404</Htag>
    </>
  );
}

export default withLayout(Error500);
