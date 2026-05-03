import { Plus } from 'lucide-react';
import type { DashboardHeaderData } from '../../types';
import { HeaderRow, HeaderCopy, Eyebrow, Title, PrimaryButton } from './styles';

interface Props {
  data: DashboardHeaderData;
  onStartProcess?: () => void;
}

export function DashboardHeader({ data, onStartProcess }: Props) {
  return (
    <HeaderRow>
      <HeaderCopy>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <Title>{data.title}</Title>
      </HeaderCopy>

      <PrimaryButton type="button" onClick={onStartProcess}>
        <Plus size={16} />
        {data.actionLabel}
      </PrimaryButton>
    </HeaderRow>
  );
}