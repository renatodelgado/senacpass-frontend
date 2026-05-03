import { Download, FileSpreadsheet, FileText, LineChart, Printer } from 'lucide-react';
import {
  Page,
  Header,
  Eyebrow,
  Title,
  Subtitle,
  SummaryGrid,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
  SummaryNote,
  Actions,
  ActionButton,
  Section,
  SectionHeader,
  SectionTitle,
  SectionBadge,
  TableWrap,
  Table,
  Status,
} from './styles';

const reportRows = [
  {
    name: 'Frequência por turma',
    type: 'Excel / CSV',
    range: 'Últimos 30 dias',
    owner: 'Professor Arnott',
    status: 'Disponível',
  },
  {
    name: 'Alunos ausentes e atestados',
    type: 'PDF',
    range: 'Aula atual',
    owner: 'Professor Arnott',
    status: 'Gerado',
  },
  {
    name: 'Turmas ativas por disciplina',
    type: 'Planilha',
    range: 'Semestre vigente',
    owner: 'Coordenação',
    status: 'Disponível',
  },
  {
    name: 'Dispositivos IoT por sala',
    type: 'CSV',
    range: 'Hoje',
    owner: 'TI / Sala',
    status: 'Atualizado',
  },
];

const metrics = [
  {
    label: 'Relatórios prontos',
    value: '12',
    note: 'Exportação rápida para CSV, PDF e planilha',
    icon: FileSpreadsheet,
  },
  {
    label: 'Aulas analisadas',
    value: '48',
    note: 'Cobertura das últimas semanas letivas',
    icon: LineChart,
  },
  {
    label: 'Pendências',
    value: '3',
    note: 'Itens aguardando confirmação do professor',
    icon: FileText,
  },
];

export function Relatorios() {
  return (
    <Page>
      <Header>
        <div>
          <Eyebrow>Painel de exportação</Eyebrow>
          <Title>Relatórios</Title>
          <Subtitle>
            Consolidação de frequência, turma e dispositivos em uma área preparada
            para exportação rápida.
          </Subtitle>
        </div>

        <Actions>
          <ActionButton type="button">
            <Download size={16} />
            Exportar CSV
          </ActionButton>
          <ActionButton type="button">
            <Printer size={16} />
            Imprimir
          </ActionButton>
        </Actions>
      </Header>

      <SummaryGrid>
        {metrics.map((item) => {
          const Icon = item.icon;

          return (
            <SummaryCard key={item.label}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <SummaryLabel>{item.label}</SummaryLabel>
                <Icon size={18} />
              </div>
              <SummaryValue>{item.value}</SummaryValue>
              <SummaryNote>{item.note}</SummaryNote>
            </SummaryCard>
          );
        })}
      </SummaryGrid>

      <Section>
        <SectionHeader>
          <SectionTitle>Relatórios prontos para exportar</SectionTitle>
          <SectionBadge>
            <Download size={16} />
            CSV, PDF e XLSX
          </SectionBadge>
        </SectionHeader>

        <TableWrap>
          <Table>
            <thead>
              <tr>
                <th>Relatório</th>
                <th>Formato</th>
                <th>Período</th>
                <th>Responsável</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reportRows.map((report) => (
                <tr key={report.name}>
                  <td>
                    <strong>{report.name}</strong>
                  </td>
                  <td>{report.type}</td>
                  <td>{report.range}</td>
                  <td>{report.owner}</td>
                  <td>
                    <Status>{report.status}</Status>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      </Section>
    </Page>
  );
}