"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ZoomIn } from "lucide-react";

type Item = {
  id: string;
  type: "photo" | "video";
  title: string;
  src: string;
  caption?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
};

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [filter, setFilter] = useState<"all" | "photo" | "video">("all");

  const filteredItems = items.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 justify-center">
        {(["all", "photo", "video"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {type === "all"
              ? "All"
              : type === "photo"
              ? "📸 Photos"
              : "🎥 Videos"}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => setSelectedItem(item)}
          >
            {/* Media Container */}
            <div
              className={`
              relative overflow-hidden
              ${
                item.aspectRatio === "portrait"
                  ? "aspect-[3/4]"
                  : item.aspectRatio === "landscape"
                  ? "aspect-[4/3]"
                  : "aspect-square"
              }
            `}
            >
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blue-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div className="font-semibold">{item.title}</div>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white"
                >
                  {item.type === "photo" ? (
                    <ZoomIn className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 fill-current" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4">
              <div className="font-semibold text-gray-800">{item.title}</div>
              {item.caption && (
                <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.caption}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {selectedItem.type === "photo" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
              )}

              <div className="text-white mt-4 text-center">
                <div className="font-semibold text-lg">
                  {selectedItem.title}
                </div>
                {selectedItem.caption && (
                  <div className="text-gray-300 mt-2">
                    {selectedItem.caption}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
