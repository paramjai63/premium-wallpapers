import { useNavigate } from "react-router-dom";
import { Download, Share2 } from "lucide-react";

function WallpaperCard({ id, src, description }) {
  const navigate = useNavigate();

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const shareUrl = window.location.origin + `/wallpaper/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard");
  };

  return (
    <div
      onClick={() => navigate(`/wallpaper/${id}`)}
      className="rounded-xl overflow-hidden bg-slate-900 cursor-pointer active:scale-[0.98] transition"
    >
      {/* Image (PURE, untouched) */}
      <div className="aspect-[9/16] w-full">
        <img src={src} alt={description} className="w-full h-full object-cover transition-opacity duration-500 " loading="lazy" />
      </div>

      {/* Separate bottom section */}
      <div
        className="p-3 bg-slate-900 border-t border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {description && (
          <p className="text-xs text-slate-200 mb-3 leading-snug">
            {description}
          </p>
        )}

        <div className="flex justify-between text-slate-400">
          <Download
            className="w-4 h-4 hover:text-white transition"
            onClick={handleDownload}
          />
          <Share2
            className="w-4 h-4 hover:text-white transition"
            onClick={handleShare}
          />
        </div>
      </div>
    </div>
  );
}

export default WallpaperCard;
