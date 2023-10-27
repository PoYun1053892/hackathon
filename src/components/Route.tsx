import { NetworkWrapper } from "@jk/use";
import type { RouteComponentProps } from "@reach/router";
import React from "react";

/**
 * SPA Route
 * 1. router ts type define
 * 2. pass page props from app to child component
 *
 * @param props
 * @returns
 */
const Route = (
  props: {
    pageComponent: JSX.Element;
    pageProps?: Record<string, unknown>;
  } & RouteComponentProps
) => {
  return (
      <NetworkWrapper>
        {React.cloneElement(props.pageComponent, {
          ...props.pageProps,
          ...props.pageComponent.props,
        })}
      </NetworkWrapper>
  );
};

export default Route;
