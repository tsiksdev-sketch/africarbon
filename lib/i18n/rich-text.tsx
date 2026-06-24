// lib/i18n/rich-text.tsx
import React, { ReactNode } from "react";

type Components = Record<string, (children: string) => ReactNode>;

export function richText(template: string, components: Components): ReactNode[] {
  // Matches: <tagName>content</tagName>
  const regex = /<(\w+)>([^<]*)<\/\1>/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  let idx = 0;

  while ((match = regex.exec(template)) !== null) {
    // Add text before the tag
    if (match.index > lastIndex) {
      const text = template.slice(lastIndex, match.index);
      parts.push(<React.Fragment key={`t-${idx++}`}>{text}</React.Fragment>);
    }

    const [, tagName, content] = match;
    const component = components[tagName];

    if (component) {
      // Ensure the returned node is keyed
      parts.push(
        <React.Fragment key={`c-${idx++}`}>
          {component(content)}
        </React.Fragment>
      );
    } else {
      parts.push(<React.Fragment key={`u-${idx++}`}>{content}</React.Fragment>);
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < template.length) {
    const text = template.slice(lastIndex);
    parts.push(<React.Fragment key={`tail-${idx++}`}>{text}</React.Fragment>);
  }

  return parts;
}