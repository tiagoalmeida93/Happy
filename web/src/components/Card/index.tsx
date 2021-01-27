import React from 'react';
import { FiInfo } from "react-icons/fi";

interface CardProps {
  open: string
}

export default function Card({ open = "false", ...props }: CardProps) {
  return (
    <div className={open ? "open-on-weekends" : "dont-open-weekends"} {...props}>
      <FiInfo size={32} color={open ? "#39CC83" : "#FF669D"} />
      {open ? 'Atendemos' : 'Não atendemos'} <br />
      aos finais de semana
    </div>
  );
}