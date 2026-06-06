import { Cpu, Server, Activity } from 'lucide-react';
import { Panel, DeviceHeader, DeviceIcon, DeviceTitle } from './styles';
import { StatsGrid, StatCard, StatLabel, StatValue } from '../CourseOverviewCard/styles';
import { EmptyState } from '../../../../components/ui/EmptyState';
import type { DevicePanelData } from '../../types';

interface Props {
  data: DevicePanelData;
}

export function DevicePanel({ data }: Props) {
  if (!data.description) {
    return (
      <Panel>
        <EmptyState title={data.title} description="Nenhum dispositivo disponível." />
      </Panel>
    );
  }

  // Divisão segura
  const [deviceId, status] = data.description.split('|');

  return (
    <Panel>
      <DeviceHeader>
        <DeviceIcon>
          <Cpu size={16} />
        </DeviceIcon>
        <DeviceTitle>{data.title}</DeviceTitle>
      </DeviceHeader>

      <StatsGrid style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        <StatCard>
          <StatLabel>
            <Server size={12} style={{ display: 'inline', marginRight: 6 }} />
            ID do Hardware
          </StatLabel>
          <StatValue style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
            {deviceId || 'N/A'}
          </StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>
            <Activity size={12} style={{ display: 'inline', marginRight: 6 }} />
            Status
          </StatLabel>
          <StatValue>{status || 'Indeterminado'}</StatValue>
        </StatCard>
      </StatsGrid>
    </Panel>
  );
}