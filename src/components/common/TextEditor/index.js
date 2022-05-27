import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import "./styles.scss";
export default function TextEditor() {
    const { quill, quillRef } = useQuill();
    return (<div className="crm-text-editor" style={{ width: 500, height: 300 }}>
      <div ref={quillRef}/>
    </div>);
}
