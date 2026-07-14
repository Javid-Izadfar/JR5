import { Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4" />
          <span className="font-medium">World Cup Hub</span>
        </div>
        <p>Built with React, TypeScript, and Vite.</p>
      </div>
    </footer>
  );
}
