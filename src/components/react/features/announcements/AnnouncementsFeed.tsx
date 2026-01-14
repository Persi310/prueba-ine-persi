import type { Announcement } from "@/types/announcement.types";
import AnnouncementCard from "@/components/react/features/announcements/AnnouncementCard";

import { useState } from "react";
import AnnouncementModal from "@/components/react/features/announcements/AnnouncementModal";

/**
 * Propiedades del componente AnnouncementsFeed.
 */
type AnnouncementsFeedProps = {
  items: Announcement[];
};

/**
 * Feed de anuncios que muestra una lista de tarjetas de anuncios o un mensaje cuando está vacío.
 * 
 * @component
 * @param {AnnouncementsFeedProps} props - Las propiedades del componente
 * @param {Announcement[]} props.items - Array de anuncios a mostrar
 * @returns {JSX.Element} Una cuadrícula de tarjetas o un mensaje de lista vacía
 */
export function AnnouncementsFeed({ items }: AnnouncementsFeedProps) {
  
  const [selected, setSelected] = useState<Announcement | null>(null);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600 shadow-sm">
        No hay anuncios que coincidan con tu búsqueda.
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <AnnouncementCard key={item.id} item={item} onOpen={() => setSelected(item)}/>
      ))}
      {selected && (
        <AnnouncementModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
