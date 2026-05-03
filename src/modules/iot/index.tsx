import { Cpu, MapPin, Network, Radar, SlidersHorizontal } from 'lucide-react';
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
  RoomTag,
} from './styles';

const devices = [
  { id: 'IO-801-01', device: 'Sensor de presença', floor: '8º', room: '801', course: 'ADS', link: 'TADS0043', state: 'Online' },
  { id: 'IO-802-02', device: 'Leitor RFID', floor: '8º', room: '802', course: 'ADS', link: 'TADS0043-BD', state: 'Online' },
  { id: 'IO-803-01', device: 'Controle de acesso', floor: '8º', room: '803', course: 'ADS', link: 'TADS0043-UI', state: 'Online' },
  { id: 'IO-1201-01', device: 'Gateway IoT', floor: '12º', room: '1201', course: 'ADS', link: 'TADS0043', state: 'Online' },
  { id: 'IO-1604-01', device: 'Câmera de entrada', floor: '16º', room: '1604', course: 'ADS', link: 'TADS0043', state: 'Em uso' },
  { id: 'IO-2106-01', device: 'Módulo de rede', floor: '21º', room: '2106', course: 'Jogos Digitais', link: 'JDG0021', state: 'Online' },
];

const metrics = [
  { label: 'Dispositivos vinculados', value: '6', note: 'Apenas salas com turmas ativas', icon: Cpu },
  { label: 'Salas monitoradas', value: '6', note: 'Numeração entre 801 e 2106', icon: MapPin },
  { label: 'Cursos cobertos', value: '2', note: 'ADS e Jogos Digitais', icon: Network },
];

export function IoT() {
  return (
    <Page>
      <Header>
        <div>
          <Eyebrow>Infraestrutura conectada</Eyebrow>
          <Title>Dispositivos IoT</Title>
          <Subtitle>
            Lista dos dispositivos vinculados apenas às salas onde existem turmas,
            com identificação, andar, sala e vínculo com a disciplina.
          </Subtitle>
        </div>

        <SectionBadge>
          <Radar size={18} />
          Monitoramento ativo
        </SectionBadge>
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
          <SectionTitle>Dispositivos por sala</SectionTitle>
          <SectionBadge>
            <SlidersHorizontal size={16} />
            Salas com turmas ativas
          </SectionBadge>
        </SectionHeader>

        <TableWrap>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Dispositivo</th>
                <th>Andar</th>
                <th>Sala</th>
                <th>Curso</th>
                <th>Turma</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id}>
                  <td>
                    <strong>{device.id}</strong>
                  </td>
                  <td>{device.device}</td>
                  <td>{device.floor}</td>
                  <td>
                    <RoomTag>{device.room}</RoomTag>
                  </td>
                  <td>{device.course}</td>
                  <td>{device.link}</td>
                  <td>
                    <Status>{device.state}</Status>
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