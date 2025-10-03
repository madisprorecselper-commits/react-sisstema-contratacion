import { motion } from "framer-motion";

function capitalizeFirstLetter(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getDayEmoji() {
  const day = new Date().getDay(); // 0 = domingo, 1 = lunes, etc.
  const emojis = ["🌞", "🌈", "🌟", "✨", "💫", "🌺", "🎉"];
  return emojis[day] || "😊";
}

export function WelcomeMessage({ name }) {
  const displayName = capitalizeFirstLetter(name);
  const emoji = getDayEmoji();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="mt-6 text-center"
    >
      <h3
        className="text-4xl font-extrabold text-[#FFF200]"
        style={{ textShadow: "1px 1px 2px #987A64" }}
      >
        ¡Bienvenido,{" "}
        <motion.span
          aria-label={`Nombre del usuario: ${displayName || "Usuario"}`}
          initial={{ scale: 0.8, textShadow: "0px 0px 0px #E8BB78" }}
          animate={{
            scale: 1,
            textShadow: "0px 0px 10px #E8BB78, 0px 0px 20px #FFF200",
          }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
          className="text-[#E8BB78]"
        >
          {displayName || "Usuario"}
        </motion.span>{" "}
        <span aria-hidden="true">{emoji}</span>
      </h3>

      <p className="text-[#987A64] font-medium mt-2">
        Nos alegra verte de nuevo en{" "}
        <span className="font-bold text-[#E8BB78]">Recselpermadispro</span>
      </p>
    </motion.div>
  );
}




