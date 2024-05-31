import { format, getDate, getYear, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string): string {
  const isoDate = parseISO(date);

  const day = getDate(isoDate);
  const month = format(isoDate, 'LLLL', { locale: ptBR });
  const year = getYear(isoDate);

  return `${day} de ${month}, ${year}`;
}
