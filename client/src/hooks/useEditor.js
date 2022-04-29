import Quill from "quill";
import { useEffect, useState } from "react";

const useEditor = (element) => {
  const [quill, setQuill] = useState();
  useEffect(() => {
    const quill = new Quill(element, {
      readOnly: true,
      theme: "bubble",
      modules: {
        toolbar: false,
      },
    });
    document.querySelector('.ql-clipboard').setAttribute('contenteditable', false);

    setQuill(quill);
  }, []);

  return [quill];
};

export default useEditor;

