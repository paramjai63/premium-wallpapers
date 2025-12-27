import { useParams, useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";
import wallpapers from "../data/wallpapers";
import WallpaperCard from "../components/WallpaperCard";

function CategoryPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const categoryWallpapers = wallpapers.filter(
    (w) => w.category === categoryId
  );

  const readableCategory =
    categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

  return (
    <section className="px-4 py-6">
    

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-slate-400 mb-4 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Home</span>
      </button>

      <h1 className="text-xl font-semibold text-white mb-6">
        {readableCategory} Wallpapers
      </h1>

      {categoryWallpapers.length === 0 ? (
        <p className="text-slate-400">No wallpapers found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoryWallpapers.map((wallpaper) => (
            <WallpaperCard
              key={wallpaper.id}
              id={wallpaper.id}
              src={wallpaper.src}
              description={wallpaper.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CategoryPage;
