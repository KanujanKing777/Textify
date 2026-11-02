// Text formatting utilities

export const handleCopy = (output, setCopied) => {
  if (!output) return;
  navigator.clipboard.writeText(output).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  });
};
