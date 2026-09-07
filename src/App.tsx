/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CustomTailoringModal } from './components/CustomTailoringModal';
import { CartModal } from './components/CartModal';
import { HowToOrderSection } from './components/HowToOrderSection';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { STORE_INFO, getCategoryDisplay } from './data/categories';
import { Product, CartItem, Language, CategoryGroupId } from './types';
import { 
  Sparkles, 
  Filter, 
  ArrowUpDown, 
  MessageCircle, 
  Send, 
  Phone, 
  SlidersHorizontal,
  Scissors
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('am');
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroupId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  
  // Page View Navigation: 'catalog' or 'detail'
  const [currentView, setCurrentView] = useState<'catalog' | 'detail'>('catalog');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modals state
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const isAm = language === 'am';

  // Deep linking and browser back/forward button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const prodId = hash.replace('#/product/', '');
        const found = PRODUCTS.find((p) => p.id === prodId || p.code === prodId);
        if (found) {
          setSelectedProduct(found);
          setCurrentView('detail');
          return;
        }
      }
      if (currentView === 'detail' && (!hash || hash === '#')) {
        setCurrentView('catalog');
        setSelectedProduct(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.location.hash = `#/product/${product.id}`;
  };

  const handleBackToCatalog = () => {
    setCurrentView('catalog');
    setSelectedProduct(null);
    if (window.location.hash.startsWith('#/product/')) {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate count per category tag
  const productCountByTag = useMemo(() => {
    const counts: Record<string, number> = {};
    PRODUCTS.forEach((prod) => {
      prod.hashtags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      // Group filter
      if (selectedGroup !== 'all' && prod.categoryGroup !== selectedGroup) {
        const matchesHashtagInGroup = prod.hashtags.some((t) => {
          if (selectedGroup === 'events') return t.includes('ሰርግ') || t.includes('መልስ') || t.includes('ክርስትና') || t.includes('ቁርባን') || t.includes('ምርቃት') || t.includes('ልደት') || t.includes('ኣመት') || t.includes('ኣሸንዳ') || t.includes('ቡና') || t.includes('ዝግጅት') || t.includes('ሸምግልና');
          if (selectedGroup === 'men_couples') return t.includes('ካፕል') || t.includes('ወንድ');
          if (selectedGroup === 'heritage_fabrics') return t.includes('ፈትል') || t.includes('ራያ') || t.includes('ጎንደር') || t.includes('ወሎ') || t.includes('ጎጃም') || t.includes('ብሔር') || t.includes('ንክር') || t.includes('ሳባ') || t.includes('ቻይና');
          return true;
        });
        if (!matchesHashtagInGroup) return false;
      }

      // Category filter
      if (selectedTag && !prod.hashtags.includes(selectedTag)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = prod.nameAm.toLowerCase().includes(query) || prod.nameEn.toLowerCase().includes(query);
        const matchesCode = prod.code.toLowerCase().includes(query);
        const matchesFabric = prod.fabricAm.toLowerCase().includes(query) || prod.fabricEn.toLowerCase().includes(query);
        const matchesTag = prod.hashtags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesCode && !matchesFabric && !matchesTag) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceETB - b.priceETB;
      if (sortBy === 'price-desc') return b.priceETB - a.priceETB;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [selectedGroup, selectedTag, searchQuery, sortBy]);

  // Cart operations
  const handleAddToCart = (product: Product, size = 'M', customMeasurements?: any) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, customMeasurements, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToCatalog = () => {
    if (currentView === 'detail') {
      handleBackToCatalog();
      setTimeout(() => {
        const el = document.getElementById('category-catalog') || document.getElementById('hashtag-catalog');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('category-catalog') || document.getElementById('hashtag-catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#2D241E]">
      {/* Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (currentView === 'detail') {
            setCurrentView('catalog');
            setSelectedProduct(null);
          }
        }}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        onLogoClick={handleBackToCatalog}
      />

      <main className="flex-1">
        {/* VIEW 1: SEPARATE PRODUCT DETAIL PAGE */}
        {currentView === 'detail' && selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToCatalog}
            onSelectProduct={(newProduct) => handleOpenProductDetail(newProduct)}
            onAddToCart={(prod, size, measurements) => {
              handleAddToCart(prod, size, measurements);
              setIsCartOpen(true);
            }}
            language={language}
            currency={currency}
            onSelectCategory={(catTag) => {
              setSelectedTag(catTag);
              handleBackToCatalog();
            }}
          />
        ) : (
          /* VIEW 2: MAIN STORE CATALOG */
          <>
            {/* Welcoming Hero Section */}
            <Hero
              language={language}
              onExploreCatalog={handleScrollToCatalog}
              onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
            />

            {/* Catalog & Category Section */}
            <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-10">
              
              {/* Category Navigation (Replacing Hashtags with Clean Categories) */}
              <CategoryNav
                language={language}
                selectedTag={selectedTag}
                onSelectTag={(tag) => {
                  setSelectedTag(tag);
                  setSearchQuery('');
                }}
                selectedGroup={selectedGroup}
                onSelectGroup={(grp) => {
                  setSelectedGroup(grp);
                  setSelectedTag(null);
                }}
                productCountByTag={productCountByTag}
              />

              {/* Catalog Controls: Result Count, Active Filter & Sorting */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pt-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-[#2D241E]">
                    {filteredProducts.length} {isAm ? 'አልባሳት ተገኝተዋል' : 'Items Found'}
                  </span>
                  
                  {selectedTag && (
                    <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-[#8B0000] text-white font-bold rounded-lg shadow-2xs">
                      <span>{getCategoryDisplay(selectedTag, language)}</span>
                      <button 
                        onClick={() => setSelectedTag(null)}
                        className="hover:text-amber-200 ml-1 text-xs font-bold"
                        title="Remove filter"
                      >
                        ×
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-[#2D241E] text-[#FDFCF8] rounded-lg">
                      <span>"{searchQuery}"</span>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="hover:text-[#C5A059] ml-1"
                        title="Clear search"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>

                {/* Sort Selector */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-[#2D241E]/70 flex items-center gap-1 font-medium">
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#8B0000]" />
                    <span>{isAm ? 'አቀማመጥ፦' : 'Sort:'}</span>
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e: any) => setSortBy(e.target.value)}
                    className="text-xs py-1.5 px-3 bg-white border border-[#EAD8C0] rounded-xl text-[#2D241E] focus:outline-none focus:border-[#8B0000]"
                  >
                    <option value="featured">{isAm ? 'የተመረጡ (Featured)' : 'Featured'}</option>
                    <option value="price-asc">{isAm ? 'ዋጋ፡ ከዝቅተኛ ወደ ከፍተኛ' : 'Price: Low to High'}</option>
                    <option value="price-desc">{isAm ? 'ዋጋ፡ ከከፍተኛ ወደ ዝቅተኛ' : 'Price: High to Low'}</option>
                  </select>
                </div>
              </div>

              {/* Product Grid (Mobile 2-Columns for Modern App-like Feel!) */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                  {filteredProducts.map((product) => {
                    const inCart = cart.some((c) => c.product.id === product.id);
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        language={language}
                        currency={currency}
                        onOpenDetails={(p) => handleOpenProductDetail(p)}
                        onAddToCart={(p) => handleAddToCart(p)}
                        onSelectHashtag={(tag) => setSelectedTag(tag)}
                        isAddedToCart={inCart}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 bg-[#F9F4EC] rounded-3xl border border-[#EAD8C0] p-8">
                  <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-3 shadow-xs border border-[#EAD8C0]">
                    <Scissors className="w-8 h-8 text-[#8B0000]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#2D241E] mb-1">
                    {isAm ? 'በዚህ ማጣሪያ የተገኘ አልባሳት የለም' : 'No items match your search'}
                  </h3>
                  <p className="text-xs text-[#2D241E]/75 max-w-sm mx-auto mb-5">
                    {isAm 
                      ? 'እባክዎ የተመረጠውን ምድብ ይቀይሩ ወይም በፈለጉት ዲዛይን እንዲዘጋጅልዎ ትዕዛዝ ይስጡን።' 
                      : 'Try clearing your category filter or request a bespoke custom tailoring order.'}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedTag(null);
                        setSelectedGroup('all');
                        setSearchQuery('');
                      }}
                      className="px-4 py-2 bg-[#8B0000] hover:bg-[#6e0000] text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                    >
                      {isAm ? 'ሁሉንም አልባሳት አሳይ' : 'Show All Items'}
                    </button>
                    <button
                      onClick={() => setIsCustomOrderOpen(true)}
                      className="px-4 py-2 bg-white border border-[#EAD8C0] text-[#8B0000] rounded-xl text-xs font-bold hover:bg-[#F9F4EC] transition-colors"
                    >
                      {isAm ? 'በትዕዛዝ ያሰሩ' : 'Custom Tailoring'}
                    </button>
                  </div>
                </div>
              )}

            </section>

            {/* How to Order 3-Step Section (Prompt specific requirement) */}
            <HowToOrderSection language={language} />
          </>
        )}

      </main>

      {/* Footer with All Store Socials & Shiromeda Address */}
      <Footer
        language={language}
        onSelectHashtag={(tag) => {
          setSelectedTag(tag);
          if (currentView === 'detail') {
            handleBackToCatalog();
          }
        }}
      />

      {/* Custom Tailoring Modal */}
      <CustomTailoringModal
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
        language={language}
      />

      {/* Cart Drawer / Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        language={language}
        currency={currency}
      />

      {/* Floating Fast Chat Actions for Mobile & Desktop */}
      <div className={`fixed ${currentView === 'detail' ? 'bottom-16 sm:bottom-5' : 'bottom-5'} right-4 sm:right-5 z-40 flex flex-col gap-2.5 transition-all`}>
        <a
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href={STORE_INFO.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#29b6f6] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Chat on Telegram @AbelDesignChat"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
        </a>
      </div>
    </div>
  );
}

