import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <meta
          name="google-site-verification"
          content="tv2MJN7704pUtClKWxy27tfNMtyV87lY5UfcPtBl3hA"
        />
        <meta property="og:title" content="Premium Mobile Wallpapers" />
        <meta
          property="og:description"
          content="Download premium HD & AMOLED wallpapers for mobile."
        />
        <meta
          property="og:image"
          content="https://premium-wallpapers.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://premium-wallpapers.vercel.app"
        />
        <meta property="og:type" content="website" />

        <title>Premium Mobile Wallpapers – Free HD & AMOLED Wallpapers</title>
        <meta
          name="description"
          content="Download premium mobile wallpapers in HD and AMOLED quality. Explore nature, abstract, dark, minimal, coffee & more wallpapers for your phone."
        />
        <meta
          name="keywords"
          content="mobile wallpapers, amoled wallpapers, hd wallpapers, premium wallpapers"
        />
        <link rel="canonical" href="https://premium-wallpapers.vercel.app/" />
      </Helmet>

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
