function redirectToWhatsApp(productDetails) {
    // Replace with your WhatsApp business number
    const phoneNumber = '+1234567890';
    const message = `Hi! I'd like to buy the jersey: ${productDetails}.`;

    // Create WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');
}
