import type { Announcement } from "@/types/announcement.types";
import Button from "@/components/react/ui/Button";
import Badge from "@/components/react/ui/Badge";

type AnnouncementModalProps = {
  item: Announcement;
  onClose: () => void;
};

export default function AnnouncementModal({
  item,
  onClose,
}: AnnouncementModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">
            {item.title}
          </h2>

          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-700"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Meta */}
        <div className="mt-2 text-xs text-slate-500">
          {item.dateLabel}
        </div>

        {/* Content */}
        <p className="mt-4 text-sm text-slate-700">
          {item.summary}
        </p>

        {/* Achivements */}
        {item.achievements && item.achievements.length > 0 && (
            <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Logros
                </h3>

                <ul className="space-y-2">
                {item.achievements.map((ach, index) => (
                    <li
                    key={index}
                    className="rounded-lg border border-slate-200 p-3 text-sm"
                    >
                    <p className="font-medium text-slate-800">
                        {ach.name}
                    </p>
                    <p className="text-slate-600">
                        Dificultad: {ach.difficulty}
                    </p>
                    <p className="text-slate-600">
                        Impacto: {ach.potential}
                    </p>
                    </li>
                ))}
                </ul>
            </div>
            )}


        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="info">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <Button variant="primary" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
