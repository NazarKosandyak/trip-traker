import findLayout from "@/router/find-layout";
import { AppLayoutEnum } from "@/layouts/layout.types";

export async function loadLayoutMiddleware(route: any): Promise<void> {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayoutEnum.default;

  const component = await findLayout(normalizedLayoutName);
  route.meta.layoutComponent = component.default;
}
