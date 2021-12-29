import { useEffect, useState } from 'react';

type WidowDimension = {
  width: number;
  height: number;
} | null;

const useDimension = () => {
  const [dimension, setDimension] =
    useState<WidowDimension>(null);
  useEffect(() => {
    function getDocumentDimension([
      documentEntry,
    ]: ResizeObserverEntry[]) {
      const { width, height } = documentEntry.contentRect;
      if (width > 250 && height > 340) {
        setDimension({ width, height });
      }
    }

    const resizeObserver = new ResizeObserver(
      getDocumentDimension
    );
    resizeObserver.observe(document.documentElement);
    return resizeObserver.unobserve.bind(
      null,
      document.documentElement
    );
  }, []);
  return dimension;
};

export default useDimension;
