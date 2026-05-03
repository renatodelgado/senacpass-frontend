import { BookOpen, CalendarDays, GraduationCap, Users } from 'lucide-react';
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
  Section,
  SectionHeader,
  SectionTitle,
  SectionBadge,
  TableWrap,
  Table,
  Status,
} from './styles';

const turmaRows = [
  {
    code: 'TADS0043',
    subject: 'Algoritmos e Programação',
    course: 'Análise e Desenvolvimento de Sistemas',
    room: 'Sala 1604',
    schedule: 'Ter/Qui • 20:00 - 22:00',
    students: '28 alunos',
    status: 'Ativa',
  },
  {
    code: 'TADS0043-BD',
    subject: 'Banco de Dados',
    course: 'Análise e Desenvolvimento de Sistemas',
    room: 'Lab 03',
    schedule: 'Seg/Qua • 18:30 - 20:00',
    students: '26 alunos',
    status: 'Ativa',
  },
  {
    code: 'TADS0043-UI',
    subject: 'Interface e Experiência do Usuário',
    course: 'Análise e Desenvolvimento de Sistemas',
    room: 'Sala 1202',
    schedule: 'Sex • 19:00 - 21:00',
    students: '24 alunos',
    status: 'Em andamento',
  },
  {
    code: 'JDG0021',
    subject: 'Jogos Digitais e Prototipação',
    course: 'Jogos Digitais',
    room: 'Lab Criativo',
    schedule: 'Qua • 14:00 - 17:00',
    students: '22 alunos',
    status: 'Optativa',
  },
];

const summary = [
  {
    label: 'Turmas do professor',
    value: '4',
    note: '2 em ADS, 1 em UI e 1 em Jogos Digitais',
    icon: Users,
  },
  {
    label: 'Disciplinas ativas',
    value: '4',
    note: 'Programação, BD, UX e Prototipação',
    icon: BookOpen,
  },
  {
    label: 'Horários da semana',
    value: '5',
    note: 'Aulas distribuídas entre manhã, tarde e noite',
    icon: CalendarDays,
  },
];

export function Turmas() {
  return (
    <Page>
      <Header>
        <div>
          <Eyebrow>Visão geral acadêmica</Eyebrow>
          <Title>Minhas Turmas</Title>
          <Subtitle>
            Turmas do professor logado, com disciplinas, curso, número da turma e
            informações de horário.
          </Subtitle>
        </div>

        <SectionBadge>
          <GraduationCap size={18} />
          Professor Arnott R. Caiado
        </SectionBadge>
      </Header>

      <SummaryGrid>
        {summary.map((item) => {
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
          <SectionTitle>Turmas vinculadas</SectionTitle>
          <SectionBadge>
            <BookOpen size={16} />
            ADS + Jogos Digitais
          </SectionBadge>
        </SectionHeader>

        <TableWrap>
          <Table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Disciplina</th>
                <th>Curso</th>
                <th>Sala</th>
                <th>Horário</th>
                <th>Alunos</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {turmaRows.map((turma) => (
                <tr key={turma.code}>
                  <td>
                    <strong>{turma.code}</strong>
                  </td>
                  <td>{turma.subject}</td>
                  <td>{turma.course}</td>
                  <td>{turma.room}</td>
                  <td>{turma.schedule}</td>
                  <td>{turma.students}</td>
                  <td>
                    <Status>{turma.status}</Status>
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