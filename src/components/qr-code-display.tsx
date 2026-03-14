"use client";

import QRCode from "react-qr-code";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
}

export function QRCodeDisplay({ value, size = 256 }: QRCodeDisplayProps) {
  return (
    <div className="bg-white p-4 rounded-xl inline-block">
      <QRCode
        value={value}
        size={size}
        level="M"
        bgColor="#FFFFFF"
        fgColor="#0F172A"
      />
    </div>
  );
}
