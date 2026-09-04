export const WHATSAPP_NUMBER = "254731864547";

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (!newWindow) {
    window.location.href = url;
  }
}