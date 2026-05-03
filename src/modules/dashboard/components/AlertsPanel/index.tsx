import { AlertCard } from '../AlertCard';
import { BellRing } from 'lucide-react';
import type { AlertsPanelData } from '../../types';
import {
  Panel,
  PanelHeader,
  PanelTitleWrap,
  PanelIcon,
  PanelTitle,
  AlertsStack,
} from './styles';

interface Props {
  data: AlertsPanelData;
}

export function AlertsPanel({ data }: Props) {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitleWrap>
          <PanelIcon>
            <BellRing size={16} />
          </PanelIcon>
          <PanelTitle>{data.title}</PanelTitle>
        </PanelTitleWrap>
      </PanelHeader>

      <AlertsStack>
        {data.alerts.map((alert) => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </AlertsStack>
    </Panel>
  );
}