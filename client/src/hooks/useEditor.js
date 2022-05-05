import Quill from "quill";
import { useEffect, useState } from "react";

const useEditor = (element, opts) => {
  const [quill, setQuill] = useState();
  useEffect(() => {
    const quill = new Quill(element, opts);
    document.querySelector('.ql-clipboard').setAttribute('contenteditable', false);

    setQuill(quill);
  }, [element, opts]);

  return [quill];
};

export default useEditor;

