import { useRef } from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Ribbon
} from '@syncfusion/ej2-react-documenteditor';
import defaultDocument from './defaultDocument.json';

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

function App() {
  const containerRef = useRef<DocumentEditorContainerComponent | null>(null);

  const onCreated = () => {
    if (containerRef.current?.documentEditor) {
      containerRef.current.documentEditor.open(defaultDocument.sfdt);
    }
  };

  return (
    <DocumentEditorContainerComponent
      ref={containerRef}
      id="container"
      height="590px"
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      toolbarMode="Ribbon"
      created={onCreated}
    />
  );
}

export default App;
