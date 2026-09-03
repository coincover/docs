import type * as React from "react";

declare global {
  const useState: typeof React.useState;
  const useEffect: typeof React.useEffect;
  const useRef: typeof React.useRef;
  const useCallback: typeof React.useCallback;
  const useMemo: typeof React.useMemo;
  const useContext: typeof React.useContext;
  const useReducer: typeof React.useReducer;
}

export {};
