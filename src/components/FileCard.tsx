import { Download, Play, Trash2 } from "lucide-react";
import type { FileItem } from "@/types/dashboard";
import type { UserRole } from "@/types/dashboard";

interface FileCardProps {
  file: FileItem;
  type: "reel" | "picture" | "raw";
  role: UserRole;
}

const FileCard = ({ file, type, role }: FileCardProps) => {
  const handlePlay = () => {
    console.log("view", file.id);
  };

  const handleDownload = () => {
    console.log("download", file.id);
  };

  const handleDelete = () => {
    console.log("delete", file.id);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-muted/30 transition-shadow hover:shadow-md">
      {/* Thumbnail area */}
      <div
        className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 cursor-pointer"
        onClick={handlePlay}
      >
        {type === "reel" && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-4 w-4 ml-0.5" />
          </div>
        )}
      </div>
      <div className="px-3 py-2.5">
        <p className="truncate text-xs font-medium">{file.name}</p>
        <p className="text-[10px] text-muted-foreground">{file.size} · {file.createdAt}</p>
        <div className="mt-1.5 flex items-center gap-1">
          <button
            onClick={handleDownload}
            className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:bg-muted active:scale-95"
          >
            <Download className="h-3.5 w-3.5" />
          </button>
          {role === "admin" && (
            <button
              onClick={handleDelete}
              className="shrink-0 rounded p-1 text-destructive/70 transition-colors hover:bg-destructive/10 active:scale-95"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileCard;
