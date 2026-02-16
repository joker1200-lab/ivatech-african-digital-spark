import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  from: "user" | "bot";
  text: string;
}

const botResponses: Record<string, string> = {
  services: "We offer telecommunications, CCTV & surveillance, access control, fire detection, structured cabling, electrical services, renewable energy, and maintenance & support services.",
  contact: "You can reach us at +255 788 222 899 or email ivatech@ivatech.co.tz. Our office is at 3rd Floor, EAGT Building, Dar es Salaam.",
  location: "We are located at 3rd Floor, EAGT Building, PO Box 38698, Dar es Salaam, Tanzania.",
  cctv: "We install both analog/HD and IP-based CCTV systems with AI-powered analytics, facial recognition, LPR, people counting, and perimeter detection.",
  price: "Pricing depends on project scope and requirements. Please contact us at +255 788 222 899 or email ivatech@ivatech.co.tz for a custom quote.",
  maintenance: "Yes! We provide comprehensive maintenance services including preventive maintenance, spare parts management, and 24/7 network monitoring.",
};

const getResponse = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes("service") || lower.includes("what do you do")) return botResponses.services;
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("reach")) return botResponses.contact;
  if (lower.includes("location") || lower.includes("where") || lower.includes("address") || lower.includes("office")) return botResponses.location;
  if (lower.includes("cctv") || lower.includes("camera") || lower.includes("surveillance")) return botResponses.cctv;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("quote") || lower.includes("how much")) return botResponses.price;
  if (lower.includes("maintenance") || lower.includes("support") || lower.includes("repair")) return botResponses.maintenance;
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) return "Hello! Welcome to Ivatech Informatics. How can I help you today? You can ask about our services, location, pricing, or contact details.";
  return "Thank you for your message! For detailed inquiries, please contact us at +255 788 222 899 or email ivatech@ivatech.co.tz. You can also ask me about our services, location, or pricing.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hello! 👋 Welcome to Ivatech Informatics. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: getResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "450px" }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4">
              <h3 className="font-heading font-bold">Ivatech Support</h3>
              <p className="text-xs opacity-80 font-body">We typically reply instantly</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm font-body ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
