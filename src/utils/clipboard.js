class ClipboardHelper {
    static async copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return { success: true, message: 'Copied to clipboard!' };
        } catch (err) {
            console.error('Error copying to clipboard:', err);
            return { success: false, message: 'Failed to copy to clipboard' };
        }
    }
}

export default ClipboardHelper;