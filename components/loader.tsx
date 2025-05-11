// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B12]/80 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
