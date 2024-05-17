import ControleEditora from "../../../classes/controle/ControleEditora";



export default async function handler(req: { method: string; query: { codEditora: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { nome?: any; error?: string; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
    if (req.method === 'GET') {
      try {
        const { codEditora } = req.query;
        const controleEditora = new ControleEditora(); // Instanciando o controle de editora
        const nomeEditora = await controleEditora.getNomeEditora(Number(codEditora));
        res.status(200).json({ nome: nomeEditora });
      } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
    } else {
      res.status(405).end();
    }
  }