import { BellRing, LockKeyhole, MonitorCog, ShieldCheck, SlidersHorizontal, UserCog } from 'lucide-react';
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
  ToggleList,
  ToggleItem,
  ToggleTitle,
  ToggleText,
  TogglePill,
  ActionRow,
  GhostButton,
  PrimaryButton,
} from './styles';

const settingsBlocks = [
  {
    title: 'Notificações de frequência',
    description: 'Receba alertas de ausência, atraso e tentativas suspeitas.',
    status: 'Ativo',
    icon: BellRing,
  },
  {
    title: 'Sincronização automática',
    description: 'Atualiza sensores e listas sempre que houver mudança de sala.',
    status: 'Ativo',
    icon: SlidersHorizontal,
  },
  {
    title: 'Bloqueio de check-in',
    description: 'Trava entrada manual após o encerramento da aula.',
    status: 'Protegido',
    icon: LockKeyhole,
  },
  {
    title: 'Perfis e permissões',
    description: 'Controle de quem pode corrigir presença e gerar relatórios.',
    status: 'Gestão',
    icon: UserCog,
  },
];

const stats = [
  { label: 'Regras ativas', value: '7', note: 'Aplicadas ao fluxo do professor', icon: ShieldCheck },
  { label: 'Dispositivos monitorados', value: '6', note: 'Todos vinculados a salas com turmas', icon: MonitorCog },
  { label: 'Alertas configurados', value: '4', note: 'Frequência, IoT, aula e relatórios', icon: BellRing },
];

export function Configuracoes() {
  return (
    <Page>
      <Header>
        <div>
          <Eyebrow>Preferências do sistema</Eyebrow>
          <Title>Configurações</Title>
          <Subtitle>
            Ajustes do ambiente do professor, com foco em notificações, permissões,
            sincronização e proteção do fluxo de presença.
          </Subtitle>
        </div>

        <SectionBadge>
          <ShieldCheck size={18} />
          Segurança e operação
        </SectionBadge>
      </Header>

      <SummaryGrid>
        {stats.map((item) => {
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
          <SectionTitle>Blocos principais</SectionTitle>
          <SectionBadge>
            <SlidersHorizontal size={16} />
            Ajustes rápidos
          </SectionBadge>
        </SectionHeader>

        <ToggleList>
          {settingsBlocks.map((setting) => {
            const Icon = setting.icon;

            return (
              <ToggleItem key={setting.title}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(30,107,214,0.1)', color: '#1E6BD6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <ToggleTitle>{setting.title}</ToggleTitle>
                    <ToggleText>{setting.description}</ToggleText>
                  </div>
                </div>

                <TogglePill>{setting.status}</TogglePill>
              </ToggleItem>
            );
          })}
        </ToggleList>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Ações administrativas</SectionTitle>
          <SectionBadge>
            <UserCog size={16} />
            Perfil do professor
          </SectionBadge>
        </SectionHeader>

        <ActionRow>
          <GhostButton type="button">Revisar permissões</GhostButton>
          <PrimaryButton type="button">Salvar preferências</PrimaryButton>
        </ActionRow>
      </Section>
    </Page>
  );
}