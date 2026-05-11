import { Fragment } from "react";

const URL_SPLIT = /(https?:\/\/[^\s]+)/g;

function linkifyLine(text: string) {
  const parts = text.split(URL_SPLIT);
  return parts.map((part, i) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={i}
          href={part}
          className="text-primary underline underline-offset-2 hover:opacity-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function LegalBodyParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
      {paragraphs.map((para, idx) => (
        <p key={idx} className="whitespace-pre-line">
          {linkifyLine(para)}
        </p>
      ))}
    </div>
  );
}
