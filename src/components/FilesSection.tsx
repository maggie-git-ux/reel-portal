import { useState } from "react";
import { Film, Image, FileText, ChevronDown, ChevronUp, Clock, Upload } from "lucide-react";
import FileCard from "./FileCard";
import type { FileItem } from "@/types/dashboard";
import type { UserRole } from "@/types/dashboard";

interface FilesSectionProps {
  files: {
    reels: FileItem[];
    pictures: FileItem[];
    raw: FileItem[];
  };
  meta: { startTime: string; endTime: string; duration: string };
  role: UserRole;
}

const FilesSection = ({ files, meta, role }: FilesSectionProps) => {
  const [open, setOpen] = useState(false);
  const [reelsOpen, setReelsOpen] = useState(false);
  const [picturesOpen, setPicturesOpen] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);

  const canUpload = role === "admin" || role === "creator";

  const renderFileGroup = (
    label: string,
    icon: React.ReactNode,
    items: FileItem[],
    type: "reel" | "picture" | "raw",
    isOpen: boolean,
    toggle: () => void,
  ) => (
    <div className="rounded-md border border-border">
      <button onClick={toggle} className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold active:scale-[0.99]">
        <span className="flex items-center gap-2">
          {icon} {label}
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{items.length}</span>
        </span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {isOpen && (
        <div className="border-t border-border p-3">
          {canUpload && (
            <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-md border-2 border-dashed border-primary/30 bg-primary/5 py-3 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 active:scale-[0.98]">
              <Upload className="h-3.5 w-3.5" /> Upload {label}
            </button>
          )}
          {items.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {items.map((f) => (
                <FileCard key={f.id} file={f} type={type} role={role} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground py-4">No {label.toLowerCase()} yet</p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-3 rounded-lg bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Film className="h-4 w-4 text-primary" /> Your Files
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-3">
          {/* Meta bar */}
          <div className="grid grid-cols-3 gap-2 rounded-md border border-primary/15 bg-primary/5 px-3 py-3 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Started
              </p>
              <p className="mt-0.5 text-xs font-semibold">{meta.startTime}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Ended
              </p>
              <p className="mt-0.5 text-xs font-semibold">{meta.endTime}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> Duration
              </p>
              <p className="mt-0.5 text-xs font-semibold text-primary">{meta.duration}</p>
            </div>
          </div>

          {renderFileGroup("Reels", <Film className="h-4 w-4 text-primary" />, files.reels, "reel", reelsOpen, () => setReelsOpen(!reelsOpen))}
          {renderFileGroup("Pictures", <Image className="h-4 w-4 text-primary" />, files.pictures, "picture", picturesOpen, () => setPicturesOpen(!picturesOpen))}
          {renderFileGroup("Raw Content", <FileText className="h-4 w-4 text-primary" />, files.raw, "raw", rawOpen, () => setRawOpen(!rawOpen))}
        </div>
      )}
    </div>
  );
};

export default FilesSection;
