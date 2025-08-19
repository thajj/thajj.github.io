import { useRef } from "react";

const useFirstMount = () => {
  const isFirstMount = useRef(true);

  if (isFirstMount.current) {
    isFirstMount.current = false;

    return { isFirstMount: true };
  }

  return { isFirstMount: isFirstMount.current };
};

export default useFirstMount;
