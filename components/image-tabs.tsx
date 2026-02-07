"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState<
    "organize" | "hired" | "boards"
  >("organize");

  return (
    <section className="border-t bg-white py-16">
      {/* SAME WIDTH SYSTEM */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Button
              onClick={() => setActiveTab("organize")}
              variant={activeTab === "organize" ? "default" : "outline"}
              className="h-10 px-5 text-sm font-medium"
            >
              Organise Applications
            </Button>

            <Button
              onClick={() => setActiveTab("hired")}
              variant={activeTab === "hired" ? "default" : "outline"}
              className="h-10 px-5 text-sm font-medium"
            >
              Getting Hired
            </Button>

            <Button
              onClick={() => setActiveTab("boards")}
              variant={activeTab === "boards" ? "default" : "outline"}
              className="h-10 px-5 text-sm font-medium"
            >
              Manage Boards
            </Button>
          </div>

          {/* Image */}
          <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-lg">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            )}

            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Getting Hired"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}

            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
