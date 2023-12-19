import { lazy, Suspense } from "react";
import FallBack from '../pages/FallBack'

const lazyFn = (importFn, access = true) => {

  if(!access) {
    return () => {
      return <FallBack/>
    }
  }

  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFn());
      }, 1000);
    });
  });
  ///const LazyComponent = lazy(importFn)

  return () => (
    <Suspense fallback={<div className="lazyLoading"><span className="loader"></span></div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default lazyFn;