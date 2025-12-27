import { useState } from "react";
import wallpapers from "../data/wallpapers";
import WallpaperCard from "./WallpaperCard";
import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

function Home({ title = "Wallpapers", excludeId }) {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredWallpapers = excludeId
    ? wallpapers.filter((w) => w.id !== excludeId)
    : wallpapers;
  // const visibleCategories = showAllCategories ? categories: categories.slice(0,4);
  return (
    <>
      

      <section className="px-4 py-6">
        <h1 className="text-xl font-semibold text-white mb-4">
          Explore Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className={
                index >= 4 && !showAllCategories ? "hidden md:block" : ""
              }
            >
              <CategoryCard id={cat.id} title={cat.title} cover={cat.cover} />
            </div>
          ))}
        </div>
        {/* View All / Show Less button (mobile-first) */}
        {categories.length > 4 && (
          <div className="mt-4 text-center md:hidden">
            <button
              onClick={() => setShowAllCategories((prev) => !prev)}
              className="text-sm text-slate-400 hover:text-white transition"
            >
              {showAllCategories ? "Show Less" : "View All Categories"}
            </button>
          </div>
        )}
      </section>

      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredWallpapers.map((wallpaper) => (
            <WallpaperCard
              key={wallpaper.id}
              id={wallpaper.id}
              src={wallpaper.src}
              description={wallpaper.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
