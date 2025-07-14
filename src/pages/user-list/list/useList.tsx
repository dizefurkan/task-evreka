import { useContext, useLayoutEffect, useRef, useState } from "react";
import { UserListContext } from "../context";

function useList() {
  const { view } = useContext(UserListContext);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [listHeight, setListHeight] = useState(360);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const parent = wrapper.parentElement;
      if (!parent) return;

      let totalOffset = 0;

      for (const child of Array.from(parent.children)) {
        if (child !== wrapper) {
          totalOffset += (child as any)?.getBoundingClientRect?.().height;
        }
      }

      const height = window.innerHeight - totalOffset;
      setListHeight(height > 0 ? height : 0);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [view]);

  return {
    wrapperRef,
    listHeight,
  };
}

export default useList;
