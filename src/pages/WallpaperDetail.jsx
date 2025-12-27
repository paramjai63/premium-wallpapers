import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { Download, Share2, ArrowLeft } from "lucide-react";
import wallpapers from "../data/wallpapers";
import WallpaperSection from "../components/Home";

function WallpaperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const wallpaper = wallpapers.find((w) => w.id === Number(id));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = wallpaper.src;
    link.download = wallpaper.src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!wallpaper) {
    return <p className="p-6">Wallpaper not found</p>;
  }

  const handleShare = () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: "New Year Wallpaper",
        text: "Check out this wallpaper",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    }
  };
  return (
    <div className="px-4 py-6 max-w-5xl mx-auto">
     

      {/* Back */}
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-2 text-slate-400 mb-4 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Big card */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        {/* Image */}
        <img
          src={wallpaper.src}
          alt="wallpaper"
          className="w-full max-h-[80vh] object-contain bg-black"
        />

        {/* Content */}
        <div className="p-4">
          {wallpaper.description && (
            <p className="text-sm text-slate-200 mb-4">
              {wallpaper.description}
            </p>
          )}

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
              Download
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
      {/* Other Wallpapers */}
      <WallpaperSection title="More wallpapers" excludeId={wallpaper.id} />
    </div>
  );
}

export default WallpaperDetail;
