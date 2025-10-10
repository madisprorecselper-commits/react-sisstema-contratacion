import { motion } from "framer-motion";

function capitalizeFirstLetter(name) {
  if (!name) return "";
  const s = String(name).trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getDayEmoji() {
  const day = new Date().getDay(); // 0 = domingo, 1 = lunes, etc.
  const emojis = ["🌞", "🌈", "🌟", "✨", "💫", "🌺", "🎉"];
  return emojis[day] || "😊";
}

export function WelcomeMessage({ name = "" }) {
  const displayName = capitalizeFirstLetter(name);
  const emoji = getDayEmoji();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="bg-[#1a1a1a] min-h-screen flex items-center justify-center text-center"
    >
      <div>
        {/* Título principal */}
        <h3
          className="text-6xl font-extrabold text-[#FFF200]"
          style={{
            textShadow:
              "2px 2px 4px #987A64, 0 0 15px #E8BB78, 0 0 30px #FFF200",
          }}
        >
          ¡Bienvenido,{" "}
          <motion.span
            aria-label={`Nombre del usuario: ${displayName || "Usuario"}`}
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1,
              textShadow:
                "2px 2px 4px #987A64, 0 0 20px #E8BB78, 0 0 40px #FFF200",
            }}
            transition={{ type: "spring", stiffness: 300, duration: 1 }}
            className="text-[#E8BB78]"
          >
            {displayName || "Usuario"}
          </motion.span>{" "}
          <span aria-hidden="true">{emoji}</span>
        </h3>

        {/* Subtítulo */}
        <p className="mt-4 text-lg font-medium text-[#987A64]">
          Nos alegra verte de nuevo en{" "}
          <span className="font-bold text-[#E8BB78]">Recselpermadispro</span>
        </p>
      </div>
    </motion.div>
  );
}