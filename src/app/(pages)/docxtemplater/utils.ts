import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import expressionParser from 'docxtemplater/expressions';
import { downloadFile } from '@/utils/download';

function loadFile(url: string, callback: (err: Error, data: string) => void) {
  PizZipUtils.getBinaryContent(url, callback);
}

export function generateDocument(pdf: string ,data: any) {
  loadFile(
    pdf,
    function (error, content) {
      if (error) {
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
        parser: expressionParser,
      });
      doc.render(data);
      const out = doc.getZip().generate({
        type: 'base64',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const base64 = 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,' + out;

      downloadFile({src: base64, type: "docx", name: 'arquivo_gerado'});
    }
  );
};