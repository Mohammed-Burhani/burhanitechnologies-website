"use client"
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { PrimaryButton } from "../Home/Blocks/PrimaryButton";

export function ContactModal({ className }) {
  return (
    <Link href="/contact">
      <PrimaryButton
        title="Book a free consultation"
        className={className}
        icon={<ArrowUpRight size={18} weight="bold" color="white" />}
      />
    </Link>
  );
}