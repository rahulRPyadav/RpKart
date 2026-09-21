import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

export default function RecentPurchasePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    { name: "Rahul from Delhi", item: "Birthday Website Template 1", code: "#RP-01", time: "2 minutes ago" },
    { name: "Amit from Bengaluru", item: "Birthday Website Template 2", code: "#RP-03", time: "5 minutes ago" },
    { name: "Neha from Mumbai", item: "Birthday Website Template 3", code: "#RP-04", time: "12 minutes ago" },
    { name: "Vikram from Jaipur", item: "Birthday Website Landing Page 1", code: "#RP-05", time: "25 minutes ago" },
    { name: "Shiva from Sikar", item: "Birthday Website Landing Page 2", code: "#RP-06", time: "35 minutes ago" },
  ];

  useEffect(() => {
    // Show popup after 4 seconds initially
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Loop through notifications every 10 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const data = notifications[currentNotification];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs bg-white/95 dark:bg-gray-900 backdrop-blur-xl border border-orange-200/80 dark:border-gray-800 rounded-2xl p-4 shadow-2xl shadow-orange-500/10 animate-slideUp flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 mt-0.5">
        <ShoppingBag size={18} />
      </div>
      
      <div className="flex-1 pr-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Recent Purchase 🔥
          </span>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
          >
            <X size={12} />
          </button>
        </div>
        <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5">
          {data.name} just purchased <span className="text-orange-600 dark:text-orange-400">{data.item}</span> ({data.code})
        </p>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium mt-1 block">
          {data.time}
        </span>
      </div>
    </div>
  );
}