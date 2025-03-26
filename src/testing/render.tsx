// ./testing/render.tsx
import { render as rtlRender } from "@testing-library/react";

export function customRender(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: (props: React.PropsWithChildren) => props.children,
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
