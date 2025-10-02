import { motion } from "framer-motion";

export function  Welcomemessage ({ name }) {
    return (
        <motion.div
         initial={{ opacity: 0, y:  -20 }} 
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, type: "spring" }}
         className="mt-6 text-center"
        >
         <h3
        ClassName="text-3xl front-extrabold text-transparent bg-clip-text drop-shadow-md"
    style={{
      backgroundImage: "linear-gradient(135deg, #8B5A2B 0%, #A0522D 50%, #DEB887 100%)",
    }}
  >
    Bienvenido {name}! 
    
    </h3>
    <p className="text-gray-700 font-medium mt-2"></p>" Nos alegra verte
    </motion.div>
  );
}

