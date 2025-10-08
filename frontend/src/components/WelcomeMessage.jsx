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
      className="mt-6 text-center bg-[#2A1F16] py-10 rounded-xl shadow-lg"
    >
      <h3
        className="text-5xl font-extrabold text-[#FFF200] drop-shadow-[0_0_8px_#FFF200]"
        style={{
          textShadow:
            "0 0 5px #FFF200, 0 0 10px #E8BB78, 0 0 20px #E8BB78, 0 0 30px #E8BB78",
        }}
      >
        ¡Bienvenido,{" "}
        <motion.span
          aria-label={`Nombre del usuario: ${displayName || "Usuario"}`}
          initial={{ scale: 0.8 }}
          animate={{
            scale: 1,
            textShadow:
              "0 0 10px #E8BB78, 0 0 20px #FFF200, 0 0 30px #FFF200",
          }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
          className="text-[#E8BB78]"
        >
          {displayName || "Usuario"}
        </motion.span>{" "}
        <span aria-hidden="true">{emoji}</span>
      </h3>

      <p className="text-[#987A64] font-medium mt-4 text-xl">
        Nos alegra verte de nuevo en{" "}
        <span className="font-bold text-[#E8BB78]">Recselpermadispro</span>
      </p>
    </motion.div>
  );
}
