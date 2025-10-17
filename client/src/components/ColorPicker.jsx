import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';  // ✅ Added Check icon here

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Red", value: "#EF4444" },
    { name: "Green", value: "#10B981" },
    { name: "Yellow", value: "#FACC15" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Orange", value: "#F97316" },
    { name: "Pink", value: "#EC4899" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Gray", value: "#6B7280" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Lime", value: "#84CC16" },
    { name: "Cyan", value: "#06B6D4" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Brown", value: "#92400E" },
    { name: "Maroon", value: "#7F1D1D" },
    { name: "Olive", value: "#4D7C0F" },
    { name: "Gold", value: "#F59E0B" },
    { name: "Coral", value: "#F87171" },
    { name: "Sky Blue", value: "#0EA5E9" },
    { name: "Mint", value: "#2DD4BF" },
    { name: "Lavender", value: "#C4B5FD" },
    { name: "Navy", value: "#1E3A8A" },
    { name: "Beige", value: "#F5F5DC" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 
        bg-gradient-to-br from-purple-50 to-purple-100
        ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        {/* If you want it hidden on small screens, replace below with max-sm:hidden */}
        <span>Accent</span> 
      </button>

      {isOpen && (
        <div
          className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0
          right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm"
        >
          {colors.map((color) => (
            <div
              key={color.value}
              className="relative cursor-pointer group flex flex-col"
              onClick={() => {
                onChange(color.value);
                setIsOpen(false); // ✅ close picker after selection
              }}
            >
              <div
                className="w-12 h-12 rounded-full border-2
                border-transparent group-hover:border-black/25
                transition-colors"
                style={{ backgroundColor: color.value }}
              ></div>

              {selectedColor === color.value && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Check
                    className={`size-5 ${
                      color.value === '#FFFFFF' ? 'text-black' : 'text-white'
                    }`}
                  />
                </div>
              )}

              <p className="text-xs text-center mt-1 text-gray-600">
                {color.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
