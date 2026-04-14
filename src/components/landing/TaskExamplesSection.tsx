import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const categories = [
  "Tutti",
  "Pulizie",
  "Traslochi",
  "Pet care",
  "Commissioni",
  "Montaggio",
  "Babysitting",
  "Giardinaggio",
];

const tasks = [
  {
    category: "Pulizie",
    title: "Pulizia appartamento completa",
    avatar: "🧹",
    rating: 4.9,
    reviews: 124,
    price: "15€/h",
  },
  {
    category: "Traslochi",
    title: "Aiuto trasloco e trasporto mobili",
    avatar: "📦",
    rating: 4.8,
    reviews: 87,
    price: "18€/h",
  },
  {
    category: "Pet care",
    title: "Dog sitting e passeggiata",
    avatar: "🐕",
    rating: 5.0,
    reviews: 56,
    price: "12€/h",
  },
  {
    category: "Commissioni",
    title: "Spesa a domicilio e consegne",
    avatar: "🛒",
    rating: 4.7,
    reviews: 203,
    price: "10€/h",
  },
  {
    category: "Montaggio",
    title: "Montaggio mobili IKEA",
    avatar: "🔧",
    rating: 4.9,
    reviews: 98,
    price: "20€/h",
  },
  {
    category: "Babysitting",
    title: "Babysitter con esperienza",
    avatar: "👶",
    rating: 4.8,
    reviews: 145,
    price: "13€/h",
  },
  {
    category: "Giardinaggio",
    title: "Cura giardino e potatura",
    avatar: "🌿",
    rating: 4.6,
    reviews: 42,
    price: "16€/h",
  },
  {
    category: "Pulizie",
    title: "Pulizia post-ristrutturazione",
    avatar: "✨",
    rating: 4.7,
    reviews: 33,
    price: "22€/h",
  },
  {
    category: "Traslochi",
    title: "Smontaggio e rimontaggio cucina",
    avatar: "🏠",
    rating: 4.9,
    reviews: 61,
    price: "25€/h",
  },
  {
    category: "Pet care",
    title: "Cat sitting a domicilio",
    avatar: "🐱",
    rating: 5.0,
    reviews: 29,
    price: "10€/h",
  },
];

const TaskExamplesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "Tutti"
      ? tasks
      : tasks.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
          Esplora i servizi
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
          Scopri cosa puoi fare o far fare. Trova il task perfetto per te.
        </p>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scrolling card row — full width */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filtered.map((task, i) => (
          <motion.div
            key={`${task.title}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="flex-[0_0_auto] w-[260px] sm:w-[280px] rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 hover:shadow-[var(--card-shadow-hover)] shadow-[var(--card-shadow)] transition-shadow cursor-pointer group"
          >
            {/* Category label */}
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {task.category}
            </span>

            {/* Avatar + Title */}
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0 mt-0.5">{task.avatar}</span>
              <h3 className="font-heading font-semibold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
                {task.title}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-auto">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-foreground">
                {task.rating}
              </span>
              <span className="text-xs text-muted-foreground">
                ({task.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="pt-2 border-t border-border">
              <span className="text-lg font-bold text-foreground">
                {task.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TaskExamplesSection;
