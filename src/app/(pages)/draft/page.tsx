'use client'

import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/text';
import { PageBase } from '@/components/page-base';

const EditorDocumento: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const handleSalvar = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = JSON.stringify(contentState);
    console.log(rawContentState);
  }

  return (
    <PageBase className="space-y-3">
      <Title as='h2'>Editor de Documento</Title>

      <p>Não funciona!</p>

      <div className='border'>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          placeholder='Insira o texto'
        />
      </div>
      <Button onClick={handleSalvar}>Salvar Alterações</Button>
    </PageBase>
  );
}

export default EditorDocumento;