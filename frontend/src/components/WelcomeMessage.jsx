import { motion } from "framer-motion";

function capitalizeFirstLetter(name) {
  if (!name) return "";
  const s = String(name).trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getDayEmoji() {
  const day = new Date().getDay();

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
      className="bg-[#c1c5c7] min-h-screen flex items-center justify-center text-center"
    >
      <div>
        {/* Título principal */}
        <h3
          className="text-6xl font-extrabold text-[#ad4224]"
          style={{
            textShadow:
              "2px 2px 4px #ddc7b1ff, 0 0 15px #8d7b61ff, 0 0 30px #c5714aff",
          }}
        >
          ¡Bienvenid@,{" "}
          <motion.span
            aria-label={`Nombre del usuario: ${displayName || "Usuario"}`}
            initial={{ scale: 0.9 }}
          
            transition={{ type: "spring", stiffness: 300, duration: 1 }}
            className="text-[#c76c34]"
          >
            {displayName || "Usuario"}
          </motion.span>{" "}
        </h3>

        {/* Subtítulo */}
        <p className="mt-4 text-lg font-medium text-[#c76c34]">
          Nos alegra verte de nuevo en{" "}
          <span className="font-bold text-[#ad4224]">Recselpermadispro</span>
        </p>
      </div>
    </motion.div>
  );
}