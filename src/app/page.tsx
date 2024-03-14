import { PageBase } from "@/components/page-base";
import { Text, Title } from "@/components/text";

export default function Home() {
  return (
    <PageBase>
      <Title as="h2" className="mb-3">Sobre</Title>

      <Text>Aplicação feita para testes de bibliotecas de edição de texto.</Text>
    </PageBase>
  );
}
