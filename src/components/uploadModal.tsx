"use Client";

import { MouseEventHandler, useState } from "react";
import Logo from "./logo";

type modal = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export default function UploadModal({ open, onClose }: modal) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-neutral-900 rounded-2xl p-8 w-full max-w-xl space-y-4 shadow-xl"></div>
    </div>
  );
}
