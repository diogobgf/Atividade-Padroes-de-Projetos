import readline from 'readline-sync';

export interface Editor {
  insertLine(lineNumber: number, text: string): void;
  removeLine(lineNumber: number): void;
}

export class TextEditor implements Editor {
  private linhasDeTexto: string[] = [];
  
  insertLine(lineNumber: number, text: string): void {
    this.linhasDeTexto.splice(lineNumber-1, 0, text);
  }

  removeLine(lineNumber: number): void {
    this.linhasDeTexto.splice(lineNumber-1, 1);
  } 

  open() {
    do {
      let linha = readline.question('Digite texto (EOF para sair): ');
      if (linha !== 'EOF') {
        let numeroLinha = readline.questionInt('Digite numero da linha: ');
        this.insertLine(numeroLinha, linha);
      } else {
        break;
      }
    } while (true);
  }

  save() {
    
    const arquivoConfigurado: ArquivoConfigurado = new ArquivoConfigurado(this.linhasDeTexto);
    console.log('\n___Arquivo Configurado___\n');
    arquivoConfigurado.linhasDoTexto.forEach(linha => console.log(linha));
    
  }
}

export class ArquivoConfigurado {
  private _linhasDoTexto: string[] =[];
  constructor(texto: string[]) {
    this._linhasDoTexto = texto;
  }
  get linhasDoTexto() {
    return this._linhasDoTexto;
  }
}

const textEditor: TextEditor = new TextEditor();
textEditor.open();
textEditor.save();