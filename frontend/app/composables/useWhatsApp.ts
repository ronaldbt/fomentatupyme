export const WHATSAPP_PHONE = '56979796841'

export function buildWhatsAppUrl(text: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(text: string) {
  window.location.href = buildWhatsAppUrl(text)
}
